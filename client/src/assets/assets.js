import logo from "./logo.svg";
import searchIcon from "./searchIcon.svg";
import userIcon from "./userIcon.svg";
import calenderIcon from "./calenderIcon.svg";
import locationIcon from "./locationIcon.svg";
import starIconFilled from "./starIconFilled.svg";
import arrowIcon from "./arrowIcon.svg";
import starIconOutlined from "./starIconOutlined.svg";
import instagramIcon from "./instagramIcon.svg";
import facebookIcon from "./facebookIcon.svg";
import twitterIcon from "./twitterIcon.svg";
import linkedinIcon from "./linkedinIcon.svg";
import freeWifiIcon from "./freeWifiIcon.svg";
import freeBreakfastIcon from "./freeBreakfastIcon.svg";
import roomServiceIcon from "./roomServiceIcon.svg";
import mountainIcon from "./mountainIcon.svg";
import poolIcon from "./poolIcon.svg";
import homeIcon from "./homeIcon.svg";
import closeIcon from "./closeIcon.svg";
import locationFilledIcon from "./locationFilledIcon.svg";
import heartIcon from "./heartIcon.svg";
import badgeIcon from "./badgeIcon.svg";
import menuIcon from "./menuIcon.svg";
import closeMenu from "./closeMenu.svg";
import guestsIcon from "./guestsIcon.svg";
import roomImg1 from "./roomImg1.png";
import roomImg2 from "./roomImg2.png";
import roomImg3 from "./roomImg3.png";
import roomImg4 from "./roomImg4.png";
import regImage from "./regImage.png";
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";

export const assets = {
  logo,
  searchIcon,
  userIcon,
  calenderIcon,
  locationIcon,
  starIconFilled,
  arrowIcon,
  starIconOutlined,
  instagramIcon,
  facebookIcon,
  twitterIcon,
  linkedinIcon,
  freeWifiIcon,
  freeBreakfastIcon,
  roomServiceIcon,
  mountainIcon,
  poolIcon,
  closeIcon,
  homeIcon,
  locationFilledIcon,
  heartIcon,
  badgeIcon,
  menuIcon,
  closeMenu,
  guestsIcon,
  regImage,
  addIcon,
  dashboardIcon,
  listIcon,
  uploadArea,
  totalBookingIcon,
  totalRevenueIcon,
};

export const cities = ["Dubai", "Singapore", "New York", "London"];

// Exclusive Offers Dummy Data
export const exclusiveOffers = [
  {
    _id: 1,
    title: "Gói Nghỉ Dưỡng Mùa Hè",
    description: "Tặng thêm 1 đêm miễn phí và bữa sáng hằng ngày",
    priceOff: 25,
    expiryDate: "31/08",
    image: exclusiveOfferCardImg1,
  },
  {
    _id: 2,
    title: "Kỳ Nghỉ Lãng Mạn",
    description: "Ưu đãi đặc biệt dành cho cặp đôi kèm trị liệu spa thư giãn",
    priceOff: 20,
    expiryDate: "20/09",
    image: exclusiveOfferCardImg2,
  },
  {
    _id: 3,
    title: "Kỳ Nghỉ Sang Trọng",
    description:
      "Đặt trước 60 ngày để nhận ưu đãi và tiết kiệm chi phí lưu trú cao cấp",
    priceOff: 30,
    expiryDate: "25/09",
    image: exclusiveOfferCardImg3,
  },
];

// Testimonials Dummy Data
export const testimonials = [
  {
    id: 1,
    name: "Ngọc Anh",
    address: "Hà Nội, Việt Nam",
    image:
      "https://media.istockphoto.com/id/1919265357/vi/anh/c%E1%BA%ADn-c%E1%BA%A3nh-ch%C3%A2n-dung-doanh-nh%C3%A2n-t%E1%BB%B1-tin-%C4%91%E1%BB%A9ng-trong-v%C4%83n-ph%C3%B2ng.jpg?s=2048x2048&w=is&k=20&c=FIpIuGT6hyyCHGFpfgX75iCBClRhZ0LrkcWnd6jt-Dg=",
    rating: 5,
    review:
      "Tôi đã từng sử dụng nhiều trang đặt phòng khác nhau, nhưng chưa nơi nào mang lại trải nghiệm chu đáo và cá nhân hóa như QuickStay. Rất hài lòng!",
  },
  {
    id: 2,
    name: "Minh Hoàng",
    address: "TP. Hồ Chí Minh, Việt Nam",
    image:
      "https://media.istockphoto.com/id/1490764451/vi/anh/ch%C3%A2n-dung-headshot-c%E1%BB%A7a-doanh-nh%C3%A2n-trung-ni%C3%AAn-t%E1%BB%B1-tin-%C4%91%E1%BA%B9p-trai-tr%C6%B0%E1%BB%9Fng-th%C3%A0nh-t%E1%BA%A1i-v%C4%83n-ph%C3%B2ng.jpg?s=2048x2048&w=is&k=20&c=zQkiZbmVheny_gcNCVYWP-8mZ9Mq-D7ddtEkTazpY2c=",
    rating: 4,
    review:
      "QuickStay vượt xa mong đợi của tôi. Việc đặt phòng rất nhanh chóng, khách sạn sang trọng và dịch vụ chuyên nghiệp. Chắc chắn sẽ quay lại!",
  },
  {
    id: 3,
    name: "Lan Phương",
    address: "Đà Nẵng, Việt Nam",
    image:
      "https://media.istockphoto.com/id/1705503967/vi/anh/n%E1%BB%AF-doanh-nh%C3%A2n-t%E1%BB%B1-tin-trong-v%C4%83n-ph%C3%B2ng-hi%E1%BB%87n-%C4%91%E1%BA%A1i.jpg?s=2048x2048&w=is&k=20&c=PeBSL-jyze3IUp6Ja-X8dnT5TjOjiYdFrV4YdSw8NYs=",
    rating: 5,
    review:
      "Dịch vụ thật tuyệt vời! Tôi luôn tìm được những nơi lưu trú ưng ý và cao cấp qua QuickStay. Các gợi ý của họ chưa bao giờ khiến tôi thất vọng.",
  },
];

// Facility Icon
export const facilityIcons = {
  "Free WiFi": assets.freeWifiIcon,
  "Free Breakfast": assets.freeBreakfastIcon,
  "Room Service": assets.roomServiceIcon,
  "Mountain View": assets.mountainIcon,
  "Pool Access": assets.poolIcon,
};

// For Room Details Page
export const roomCommonData = [
  {
    icon: assets.homeIcon,
    title: "Clean & Safe Stay",
    description: "A well-maintained and hygienic space just for you.",
  },
  {
    icon: assets.badgeIcon,
    title: "Enhanced Cleaning",
    description: "This host follows Staybnb's strict cleaning standards.",
  },
  {
    icon: assets.locationFilledIcon,
    title: "Excellent Location",
    description: "90% of guests rated the location 5 stars.",
  },
  {
    icon: assets.heartIcon,
    title: "Smooth Check-In",
    description: "100% of guests gave check-in a 5-star rating.",
  },
];

// User Dummy Data
export const userDummyData = {
  _id: "user_2unqyL4diJFP1E3pIBnasc7w8hP",
  username: "Great Stack",
  email: "user.greatstack@gmail.com",
  image:
    "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
  role: "hotelOwner",
  createdAt: "2025-03-25T09:29:16.367Z",
  updatedAt: "2025-04-10T06:34:48.719Z",
  __v: 1,
  recentSearchedCities: ["New York"],
};

// Hotel Dummy Data
export const hotelDummyData = {
  _id: "67f76393197ac559e4089b72",
  name: "Khách Sạn Hòa Bình",
  address: "Số 45, Đường Lý Thường Kiệt, Quận Hoàn Kiếm",
  contact: "+84901234567",
  owner: userDummyData,
  city: "Hà Nội, Việt Nam",
  createdAt: "2025-04-10T06:22:11.663Z",
  updatedAt: "2025-04-10T06:22:11.663Z",
  __v: 0,
};

// Rooms Dummy Data
export const roomsDummyData = [
  {
    _id: "67f7647c197ac559e4089b96",
    hotel: hotelDummyData,
    roomType: "Phòng giường đôi",
    pricePerNight: 399,
    amenities: ["Dịch vụ phòng", "Hướng núi", "Hồ bơi"],
    images: [roomImg1, roomImg2, roomImg3, roomImg4],
    isAvailable: true,
    createdAt: "2025-04-10T06:26:04.013Z",
    updatedAt: "2025-04-10T06:26:04.013Z",
    __v: 0,
  },
  {
    _id: "67f76452197ac559e4089b8e",
    hotel: hotelDummyData,
    roomType: "Phòng giường đôi",
    pricePerNight: 299,
    amenities: ["Dịch vụ phòng", "Hướng núi", "Hồ bơi"],
    images: [roomImg2, roomImg3, roomImg4, roomImg1],
    isAvailable: true,
    createdAt: "2025-04-10T06:25:22.593Z",
    updatedAt: "2025-04-10T06:25:22.593Z",
    __v: 0,
  },
  {
    _id: "67f76406197ac559e4089b82",
    hotel: hotelDummyData,
    roomType: "Phòng giường đôi",
    pricePerNight: 249,
    amenities: ["WiFi miễn phí", "Bữa sáng miễn phí", "Dịch vụ phòng"],
    images: [roomImg3, roomImg4, roomImg1, roomImg2],
    isAvailable: true,
    createdAt: "2025-04-10T06:24:06.285Z",
    updatedAt: "2025-04-10T06:24:06.285Z",
    __v: 0,
  },
  {
    _id: "67f763d8197ac559e4089b7a",
    hotel: hotelDummyData,
    roomType: "Phòng giường đơn",
    pricePerNight: 199,
    amenities: ["WiFi miễn phí", "Dịch vụ phòng", "Hồ bơi"],
    images: [roomImg4, roomImg1, roomImg2, roomImg3],
    isAvailable: true,
    createdAt: "2025-04-10T06:23:20.252Z",
    updatedAt: "2025-04-10T06:23:20.252Z",
    __v: 0,
  },
];

// User Bookings Dummy Data
export const userBookingsDummyData = [
  {
    _id: "67f76839994a731e97d3b8ce",
    user: userDummyData,
    room: roomsDummyData[1],
    hotel: hotelDummyData,
    checkInDate: "2025-04-30T00:00:00.000Z",
    checkOutDate: "2025-05-01T00:00:00.000Z",
    totalPrice: 299,
    guests: 1,
    status: "Chờ xác nhận",
    paymentMethod: "Thanh toán qua Stripe",
    isPaid: true,
    createdAt: "2025-04-10T06:42:01.529Z",
    updatedAt: "2025-04-10T06:43:54.520Z",
    __v: 0,
  },
  {
    _id: "67f76829994a731e97d3b8c3",
    user: userDummyData,
    room: roomsDummyData[0],
    hotel: hotelDummyData,
    checkInDate: "2025-04-27T00:00:00.000Z",
    checkOutDate: "2025-04-28T00:00:00.000Z",
    totalPrice: 399,
    guests: 1,
    status: "Chờ Xác Nhận",
    paymentMethod: "Thanh Toán Tại Khách Sạn",
    isPaid: false,
    createdAt: "2025-04-10T06:41:45.873Z",
    updatedAt: "2025-04-10T06:41:45.873Z",
    __v: 0,
  },
  {
    _id: "67f76810994a731e97d3b8b4",
    user: userDummyData,
    room: roomsDummyData[3],
    hotel: hotelDummyData,
    checkInDate: "2025-04-11T00:00:00.000Z",
    checkOutDate: "2025-04-12T00:00:00.000Z",
    totalPrice: 199,
    guests: 1,
    status: "Chờ Xác Nhận",
    paymentMethod: "Thanh Toán Tại Khách Sạn",
    isPaid: false,
    createdAt: "2025-04-10T06:41:20.501Z",
    updatedAt: "2025-04-10T06:41:20.501Z",
    __v: 0,
  },
];

// Dashboard Dummy Data
export const dashboardDummyData = {
  totalBookings: 3,
  totalRevenue: 897,
  bookings: userBookingsDummyData,
};

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/
