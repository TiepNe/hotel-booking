import Hotel from "../models/Hotel.js";
import { v2 as cloudinary } from "cloudinary";
import Room from "../models/Room.js";

// API tạo phòng mới cho khách sạn
export const createRoom = async (req, res)=>{
    try {
        const {roomType, pricePerNight, amenities} = req.body;
        const hotel = await Hotel.findOne({owner: req.auth.userId})

        if(!hotel) return res.json({ success: false, message: "Không Tìm Thấy Khách Sạn" });

        // Upload hình ảnh lên Cloudinary
        const uploadImages = req.files.map(async (file) =>{
            const response = await cloudinary.uploader.upload(file.path);
            return response.secure_url;
        })
        // Chờ tất cả các upload hoàn tất
        const images = await Promise.all(uploadImages)

        await Room.create({
            hotel: hotel._id,
            roomType,
            pricePerNight: +pricePerNight,
            amenities: JSON.parse(amenities),
            images,
        })
        res.json({ success: true, message: "Phòng Đã Được Tạo Thành Công" })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}


// API lấy tất cả các phòng
export const getRooms = async (req, res)=>{
    try {
        const rooms = await Room.find({isAvailable: true}).populate({
            path: 'hotel',
            populate:{
                path: 'owner',
                select: 'image'
            }
        }).sort({createAt: -1 })
        res.json({success: true, rooms});
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}


// API lấy tất cả phòng của một khách sạn cụ thể
export const getOwnerRooms = async (req, res)=>{
    try {
        const hotelData = await Hotel.findOne({owner: req.auth.userId})
        const rooms = await Room.find({hotel: hotelData._id.toString()}).populate
        ("hotel");
        res.json({success: true, rooms});
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

// API bật/tắt trạng thái khả dụng của phòng
export const toggleRoomAvailability = async (req, res)=>{
    try {
        const { roomId } = req.body;
        const roomData = await Room.findById(roomId);
        roomData.isAvailable = !roomData.isAvailable;
        await roomData.save();
        res.json({ success: true, message: "Trạng Thái Của Phòng Đã Được Cập Nhật" });
        res.json({success: false, message: error.message});
    } catch (error) {
        
    }
}