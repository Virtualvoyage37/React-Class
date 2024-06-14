import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSection = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        // navigation={{
        //     prevEl: '.prev',
        //     nextEl: '.next',
        //   }}
        navigation={true}
        autoplay={
          {
            delay:5000,
            disableOnInteraction:true
          }
        }
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide>
          <img
            src="public/images/pexels1.jpg"
            alt=""
            className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="public/images/pexels2.jpg"
            alt=""
            className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="public/images/pexels3.jpg"
            alt=""
            className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>
{/* 
         <div className="flex justify-between items-center  px-5">
          <button className="prev">Priv--</button>
          <button className="next">--Next</button>
        </div>  */}
      </Swiper>
    </div>
  );
};

export default HeroSection;
