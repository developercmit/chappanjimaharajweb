"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageSlider() {
  return (
    <div className="bg-orange-50">
        <div className="container mx-auto max-w-[100%] pt-[0px] hero-slider">
            <div className="w-full mx-auto">
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="rounded-lg overflow-hidden"
        >
            <SwiperSlide>
            <img
                src="./slide1.png"
                alt="Slide 1"
                className="h-[100vh] w-[100%]  object-cover object-center-center"
            />
            </SwiperSlide>
            <SwiperSlide>
            <img
                src="./hero-img.jpg"
                alt="Slide 2"
                className="h-[100vh] w-[100%]  object-cover" 
            />
            </SwiperSlide>
            <SwiperSlide>
            <img
                src="./hero-img.jpg"
                alt="Slide 3"
                className="h-[100vh] w-[100%]  object-cover" 
            />
            </SwiperSlide>
        </Swiper>
        </div>
    </div>
    </div>
  );
}