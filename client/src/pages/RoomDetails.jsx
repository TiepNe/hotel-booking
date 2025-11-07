import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData } from '../assets/assets'
import StarRating from '../components/StarRating'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const RoomDetails = () => {
    const {id} = useParams()
    const {rooms, getToken, axios, navigate} = useAppContext()
    const [room, setRoom] = useState(null)
    const [mainImage, setMainImage] = useState(null)
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [guests, setGuests] = useState(1);

    const [isAvailable, setIsAvailable] = useState(false);

    // Kiểm tra phòng trống
    const checkAvailability = async ()=>{
        try {
          // Kiểm tra nếu ngày nhận phòng sau ngày trả phòng
          if(checkInDate >= checkOutDate){
            toast.error('Ngày nhận phòng phải trước ngày trả phòng')
            return;
          }
          const {data} = await axios.post('/api/bookings/check-availability', 
          {room: id, checkInDate, checkOutDate})
          if(data.success){
              if(data.isAvailable){
                  setIsAvailable(true)
                  toast.success('Phòng còn trống')
              }else{
                setIsAvailable(false)
                toast.error('Phòng không còn trống')
              }
          }else{
              toast.error(data.message)
          }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // Hàm onSubmitHandle để kiểm tra phòng trống và đặt phòng
    const onSubmitHandle = async (e)=>{
        try {
            e.preventDefault();
            if(!isAvailable){
                return checkAvailability();
            }else{
                const { data } = await axios.post('/api/bookings/book', {room: id, 
                checkInDate, checkOutDate, guests, paymentMethod: "Thanh Toán Tại Khách Sạn"}, 
              {headers: {Authorization: `Bearer ${await getToken()}` }})
              if (data.success){
                toast.success(data.message)
                navigate('/my-bookings')
                scrollTo(0, 0)
              }else{
                  toast.error(data.message)
              }
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        const room = rooms.find(room => room._id === id)
        room && setRoom(room)
        room && setMainImage(room.images[0])
    },[rooms])

  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      {/* Chi tiết phòng */}
      <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl font-playfair'>
            {room.hotel.name} <span className='font-inter text-sm'>({room.roomType})
            </span></h1>
        <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500
        rounded-full'>GIẢM 20%</p>
      </div>

      {/* Đánh giá phòng */}
      <div className='flex items-center gap-1 mt-2'>
        <StarRating />
        <p className='ml-2'>200+ đánh giá</p>
      </div>

      {/* Địa chỉ phòng */}
      <div className='flex items-center gap-1 text-gray-500 mt-2'>
          <img src={assets.locationIcon} alt="location-icon" />
          <span>{room.hotel.address}</span>
      </div>

      {/* Ảnh phòng */}
      <div className='flex flex-col lg:flex-row mt-6 gap-6'>
          <div className='lg:w-1/2 w-full'>
              <img src={mainImage} alt="Room Image" 
              className='w-full rounded-xl shadow-lg object-cover'/>
          </div>
          <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
              {room?.images.length > 1 && room.images.map((image, index)=>(
                <img onClick={()=> setMainImage(image)}
                key={index} src={image} alt="Room Image" 
                className={`w-full rounded-xl shadow-md object-cover
                cursor-pointer ${mainImage === image && 'outline-3 outline-orange-500'}`}/>
              ))}
          </div>
      </div>

      {/* Điểm nổi bật của phòng */}
      <div className='flex flex-col md:flex-row md:justify-between mt-10'>
          <div className='flex flex-col'>
              <h1 className='text-3xl md:text-4xl font-playfair'>Trải Nghiệm Đẳng Cấp 
                Sang Trọng Chưa Từng Có</h1>
              <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                  {room.amenities.map((item, index)=>(
                    <div key={index} className='flex items-center gap-2 px-3 py-2 
                    rounded-lg bg-gray-100'>
                        <img src={facilityIcons[item]} alt={item} className='w-5
                        h-5'/>
                        <p className='text-xs'>{item}</p>
                    </div>
                  ))}
              </div>
          </div>
          {/* Giá phòng */}
          <p className='text-2xl font-medium'>${room.pricePerNight}/đêm</p>
      </div>

      {/* Nhận/Trả Phòng */}
      <form onSubmit={onSubmitHandle} className='flex flex-col md:flex-row 
      items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba
      (0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>

          <div className='flex flex-col flex-wrap md:flex-row items-start 
          md:items-center gap-4 md:gap-10 text-gray-500'> 

              <div className='flex flex-col'>
                  <label htmlFor="checkInDate" className='font-medium'>Ngày Nhận Phòng</label>
                  <input onChange={(e)=>setCheckInDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]} type="date" 
                  id='checkInDate' placeholder='Chọn ngày nhận phòng' className='w-full rounded 
                  border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
              </div>
              <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
              <div className='flex flex-col'>
                  <label htmlFor="checkOutDate" className='font-medium'>Ngày Trả Phòng</label>
                  <input onChange={(e)=>setCheckOutDate(e.target.value)}
                  min={checkInDate} disabled={!checkInDate}
                  type="date" id='checkOutDate' placeholder='Chọn ngày trả phòng' 
                  className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 
                  outline-none' required/>
              </div>
              <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
              <div className='flex flex-col'>
                  <label htmlFor="guests" className='font-medium'>Số Lượng</label>
                  <input onChange={(e)=>setGuests(e.target.value)} value={guests} 
                  type="number" id='guests' placeholder='1' className='max-w-20 
                  rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' 
                  required/>
              </div>

          </div>

          <button type='submit' className='bg-primary hover:bg-primary-dull 
          active:scale-95 transition-all text-white rounded-md max-md:w-full 
          max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer'>
              {isAvailable ? "Đặt Ngay" : "Kiểm Tra Phòng Trống"}
          </button>
      </form>

      {/* Đặc điểm chung */}
      <div className='mt-25 space-y-4'>
        {roomCommonData.map((spec, index)=>(
            <div key={index} className='flex items-start gap-2'>
                <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5'/>
                <div>
                    <p className='text-base'>{spec.title}</p>
                    <p className='text-gray-500'>{spec.description}</p>
                </div>
            </div>
        ))}
      </div>

      <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
        <p>Khách sẽ được bố trí tại tầng trệt tùy theo tình trạng phòng trống. 
        Căn hộ hai phòng ngủ mang đến không gian tiện nghi, thoáng đãng cùng 
        cảm giác thành phố hiện đại và năng động. Giá niêm yết áp dụng cho hai khách, 
        vui lòng chọn đúng số lượng khách để hệ thống hiển thị mức giá phù hợp cho nhóm của bạn. 
        Việc sắp xếp phòng sẽ được thực hiện linh hoạt tùy vào khả năng tiếp nhận.</p>
      </div>

        
    </div>
  )
}

export default RoomDetails
