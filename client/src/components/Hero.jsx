import React from "react";
import { assets, cities } from "../assets/assets";

const Hero = () => {
  return (
    <div
      className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 
    xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover
    bg-center h-screen'
    >
      <p className="bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20">
        Trải Nghiệm Khách Sạn Ấm Áp & Đẳng Cấp
      </p>
      <h1
        className="font-playfair text-2x1 md:text-5x1 md:text-[56px] md:leading-
      [56px] font-bold md:font-extrabold max-w-xl mt-4"
      >
        Khám Phá Điểm Đến Lý Tưởng Của Bạn
      </h1>
      <p className="max-w-130 mt-2 text-sm md:text-base">
        Tận hưởng sự thoải mái cùng dịch vụ sang trọng tại những khách sạn và
        khu nghỉ dưỡng hàng đầu. Bắt đầu hành trình đáng nhớ ngay hôm nay.
      </p>

      <form className="bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto">
        <div>
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} alt="" className="h-4" />
            <label htmlFor="destinationInput">Điểm Đến</label>
          </div>
          <input
            list="destinations"
            id="destinationInput"
            type="text"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            placeholder="Nhập địa điểm"
            required
          />
          <datalist id='destinations'>
              {cities.map((city, index)=>(
                <option value={city} key={index} />
              ))}
          </datalist>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} alt="" className='h-4' />
            <label htmlFor="checkIn">Ngày nhận phòng</label>
          </div>
          <input
            id="checkIn"
            type="date"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} alt="" className='h-4' />
            <label htmlFor="checkOut">Ngày trả phòng</label>
          </div>
          <input
            id="checkOut"
            type="date"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
          <label htmlFor="guests">Số khách</label>
          <input
            min={1}
            max={4}
            id="guests"
            type="number"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16"
            placeholder="0"
          />
        </div>

        <button className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1">
          <img src={assets.searchIcon} alt="searchIcon" className='h-7' />
          <span>Tìm kiếm</span>
        </button>
      </form>
    </div>
  );
};

export default Hero;
