import transporter from "../configs/nodemailer.js";
import Booking from "../models/Booking.js";
import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

//Hàm kiểm tra phòng có sẵn hay không
const checkAvailability = async ({ checkInDate, checkOutDate, room }) => {
  try {
    const bookings = await Booking.find({
      room,
      checkInDate: { $lte: checkOutDate },
      checkOutDate: { $gte: checkInDate },
    });
    const isAvailable = bookings.length === 0;
    return isAvailable;
  } catch (error) {
    console.error(error.message);
  }
};

// Kiểm tra phòng có sẵn (API)
// POST/api/bookings/check-availability
export const checkAvailabilityAPI = async (req, res) => {
  try {
    const { room, checkInDate, checkOutDate } = req.body;
    const isAvailable = await checkAvailability({
      checkInDate,
      checkOutDate,
      room,
    });
    res.json({ success: true, isAvailable });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Tạo booking mới (API)
// POST/api/bookings/book

export const createBooking = async (req, res) => {
  try {
    const { room, checkInDate, checkOutDate, guests } = req.body;
    const user = req.user._id;

    // Kiểm tra phòng trước khi đặt
    const isAvailable = await checkAvailability({
      checkInDate,
      checkOutDate,
      room,
    });

    if (!isAvailable) {
      return res.json({ success: false, message: "Phòng không còn trống" });
    }
    // Lấy tổng giá từ phòng
    const roomData = await Room.findById(room).populate("hotel");
    let totalPrice = roomData.pricePerNight;

    // Tính tổng giá dựa trên số đêm
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const timeDiff = checkOut.getTime() - checkIn.getTime();
    const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));

    totalPrice *= nights;
    const booking = await Booking.create({
      user,
      room,
      hotel: roomData.hotel._id,
      guests: +guests,
      checkInDate,
      checkOutDate,
      totalPrice,
    });

    const mailOptions = {
        from: process.env.SENDER_EMAIL,
        to: req.user.email,
        subject: 'Chi Tiết Đặt Phòng Khách Sạn',
        html: `
            <h2>Chi Tiết Đặt Phòng Của Bạn</h2>
            <p>Xin chào ${req.user.username},</p>
            <p>Cảm ơn bạn đã đặt phòng với chúng tôi! Dưới đây là thông tin chi tiết 
            đơn đặt phòng của bạn:</p>
            <ul>
                <li><strong>Mã Đặt Phòng:</strong> ${booking._id}</li>
                <li><strong>Tên Khách Sạn:</strong> ${roomData.hotel.name}</li>
                <li><strong>Địa Chỉ:</strong> ${roomData.hotel.address}</li>
                <li><strong>Ngày Nhận Phòng:</strong> ${booking.checkInDate.toDateString()}
                </li>
                <li><strong>Giá Phòng:</strong> ${process.env.CURRENCY || 
                '$'} ${booking.totalPrice} /đêm</li>
            </ul>
            <p>Chúng tôi rất mong được chào đón bạn!</p>
            <p>Nếu bạn cần thay đổi hoặc hỗ trợ thêm, vui lòng liên hệ với chúng tôi.</p>
        `
    }
    
    await transporter.sendMail(mailOptions)

    res.json({ success: true, message: "Đặt phòng thành công" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Đặt phòng thất bại, vui lòng thử lại" });
  }
};

// Lấy danh sách tất cả booking của user (API)
// GET /api/bookings/user
export const getUserBookings = async (req, res) => {
  try {
    const user = req.user._id;
    const bookings = await Booking.find({ user })
      .populate("room hotel")
      .sort({ createAt: -1 });
    res.json({ success: true, bookings });
  } catch (error) {
    res.json({ success: false, message: "Không thể tải danh sách đặt phòng" });
  }
};

export const getHotelBookings = async (req, res) => {
  try {
    const hotel = await Hotel.findOne({ owner: req.auth.userId });
    if (!hotel) {
      return res.json({ success: false, message: "Không tìm thấy khách sạn" });
    }
    const bookings = await Booking.find({ hotel: hotel._id }).populate("room hotel user")
    .sort({ createAt: -1 });
    // Tổng số booking
    const totalBookings = bookings.length;
    // Tổng doanh thu
    const totalRevenue = bookings.reduce((acc, booking)=>acc + booking.
    totalPrice, 0);

    res.json({success: true, dashboardData: { totalBookings, totalRevenue, 
    bookings }})
  } catch (error) {
        res.json({success: false, message: "Không thể tải danh sách đặt phòng"})
  }
};
