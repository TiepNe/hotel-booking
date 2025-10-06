import React from "react";
import { assets } from "../assets/assets";
import Title from "./Title";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center max-w-5xl lg:w-full rounded-2xl px-4 
    py-12 md:py-16 mx-2 lg:mx-auto my-30 bg-gray-900 text-white">

      <Title title="Truyền Cảm Hứng Cho Hành Trình Của Bạn" subTitle='Đăng ký nhận 
      bản tin để khám phá điểm đến mới, ưu đãi độc quyền và cảm hứng cho kỳ nghỉ sắp tới.' />
      
      <div className="flex flex-col md:flex-row items-center justify-center 
      gap-4 mt-6">
        <input type="text" className="bg-white/10 px-4 h-12 border 
        border-white/20 rounded outline-none max-w-66 w-full"
        placeholder="Nhập email của bạn" />
        <button className="flex items-center justify-center gap-2 group 
        bg-black px-6 h-12 rounded active:scale-95 transition-all whitespace-nowrap">
        Đăng ký
          <img src={assets.arrowIcon} alt="arrow-icon" className='w-3.5
          invert group-hover:translate-x-1 transition-all' />
        </button>
      </div>
      <p className="text-gray-500 mt-6 text-xs text-center">Khi đăng ký, bạn đồng ý với 
      Chính Sách Bảo Mật và nhận thông tin mới nhất từ QuickStay.</p>
    </div>
  );
};

export default NewsLetter;
