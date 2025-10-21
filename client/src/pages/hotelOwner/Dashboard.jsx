import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {

    const [dashboardData, setDashboardData] = useState(dashboardDummyData)

  return (
    <div>
      <Title align='left' font='outfit' title='Bảng Điều Khiển' subTitle='Theo dõi danh sách phòng, 
      đặt phòng và doanh thu của bạn — tất cả trong một nơi. Cập nhật dữ liệu theo thời gian thực 
      để đảm bảo hoạt động suôn sẻ.'/>

      <div className='flex gap-4 my-8'>
        {/* --- Total Bookings --- */}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 
        pr-8'>
            <img src={assets.totalBookingIcon} alt="" className='max-sm:hidden 
            h-10'/>
            <div className='flex flex-col sm:ml-4 font-medium'>
                <p className='text-blue-500 text-lg'>Tổng Đặt Phòng</p>
                <p className='text-neutral-400 text-case'>{dashboardData.totalBookings}</p>
            </div>
        </div>
        {/* --- Total Revenue --- */}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 
        pr-8'>
            <img src={assets.totalRevenueIcon} alt="" className='max-sm:hidden 
            h-10'/>
            <div className='flex flex-col sm:ml-4 font-medium'>
                <p className='text-blue-500 text-lg'>Tổng Doanh Thu</p>
                <p className='text-neutral-400 text-case'>$ {dashboardData.totalRevenue}</p>
            </div>
        </div>
      </div>
      {/* --- Recent Bookings --- */}
      <h2 className='text-xl text-blue-950/70 font-medium mb-5'>Đặt Phòng Gần Đây</h2>

        <div className='w-full max-w-3xl text-left border border-gray-300 
        rounded-lg max-h-80 overflow-y-scroll'>

        <table className='w-full'>
            <thead className='bg-gray-50'>
                <tr>
                    <th className='py-3 px-4 text-gray-800 font-medium'>Tên Người Dùng</th>
                    <th className='py-3 px-4 text-gray-800 font-medium 
                    max-sm:hidden'>Tên Phòng</th>
                    <th className='py-3 px-4 text-gray-800 font-medium 
                    text-center'>Tổng Tiền</th>
                    <th className='py-3 px-4 text-gray-800 font-medium 
                    text-center'>Trạng Thái Thanh Toán</th>
                </tr>
            </thead>

            <tbody className='text-sm'>
                {dashboardData.bookings.map((item, index)=>(
                  <tr key={index}>
                      <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                          {item.user.username}
                      </td>

                      <td className='py-3 px-4 text-gray-700 border-t border-gray-300 
                      max-sm:hidden'>
                          {item.room.roomType}
                      </td>

                      <td className='py-3 px-4 text-gray-700 border-t border-gray-300 
                      text-center'>
                          $ {item.totalPrice}
                      </td>

                      <td className='py-3 px-4 border-t border-gray-300 flex'>
                          <button className={`py-1 px-3 text-xs rounded-full mx-auto 
                            ${item.isPaid ? 'bg-green-200 text-green-600' : 'bg-amber-200 text-yellow-600'}`}>
                              {item.isPaid ? 'Đã Hoàn Tất' : 'Đang Xử Lý'}
                          </button>
                      </td>
                  </tr>
                ))}
            </tbody>

        </table>
        </div>
    </div>
  )
}

export default Dashboard
