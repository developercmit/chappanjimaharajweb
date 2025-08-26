"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function LatestImages() {
  return (
    <div className="bg-orange-50">
      <div className="container mx-auto max-w-[100%] pt-[0px] hero-slider">
            <div className="text-center mb-12 lg:max-w-[65%] md:max-w-[65%] max-w-full mx-auto" data-aos="zoom-in">
                <h2 className="text-3xl font-bold text-orange-800">जुड़िए हमारे YouTube परिवार से – Like & Subscribe कीजिए!</h2>
            </div>
        <div className="w-full mx-auto">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}  // Default to 1 slide for mobile (default behavior)
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="rounded-lg overflow-hidden"
            breakpoints={{
              640: {
                slidesPerView: 3,  // On screens larger than 640px, show 3 slides
              },
            }}
          >
            <SwiperSlide>
              <iframe
                id="ytplayer"
                width="100%"
                height="350px"
                src="https://www.youtube.com/embed/IMHSq72iht4?si=OGwAyiRDOJr95yxO"
                frameBorder="0"
                allowFullScreen
                className="rounded-[12px] lg:h-[350px] md:h-[250px]"
            ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                id="ytplayer"
                width="100%"
                height="350px"
                src="https://www.youtube.com/embed/DrAkhuuyB30?si=-Zx3pzEvFKAF0mTD"
                frameBorder="0"
                allowFullScreen
                className="rounded-[12px] lg:h-[350px] md:h-[250px]"
            ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                id="ytplayer"
                width="100%"
                height="350px"
                src="https://www.youtube.com/embed/7Quz_FQvWcg?si=ipUBuL7Pc45kwA3l"
                frameBorder="0"
                allowFullScreen
                className="rounded-[12px] lg:h-[350px] md:h-[250px]"
            ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                id="ytplayer"
                width="100%"
                height="350px"
                src="https://www.youtube.com/embed/FpOOEjYpQ1o?si=D5dwoDikehZGwugJ"
                frameBorder="0"
                allowFullScreen
                className="rounded-[12px] lg:h-[350px] md:h-[250px]"
            ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                id="ytplayer"
                width="100%"
                height="350px"
                src="https://www.youtube.com/embed/3REe7lk-wPs?si=Sbtb4DyVbvDQaeic"
                frameBorder="0"
                allowFullScreen
                className="rounded-[12px] lg:h-[350px] md:h-[250px]"
            ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                id="ytplayer"
                width="100%"
                height="350px"
                src="https://www.youtube.com/embed/re9xlI96IMU?si=5-1NmR317F2ATWfe"
                frameBorder="0"
                allowFullScreen
                className="rounded-[12px] lg:h-[350px] md:h-[250px]"
            ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                id="ytplayer"
                width="100%"
                height="350px"
                src="https://www.youtube.com/embed/z-VCTEQhJ50?si=O87aL0Pz1YmCaGph"
                frameBorder="0"
                allowFullScreen
                className="rounded-[12px] lg:h-[350px] md:h-[250px]"
            ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                id="ytplayer"
                width="100%"
                height="350px"
                src="https://www.youtube.com/embed/5lGNoBEXiJs?si=siJO2TT-tnf6GYmG"
                frameBorder="0"
                allowFullScreen
                className="rounded-[12px] lg:h-[350px] md:h-[250px]"
            ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                id="ytplayer"
                width="100%"
                height="350px"
                src="https://www.youtube.com/embed/CFeAWslEe8Y?si=CZeTBhtu0m5mJmb6"
                frameBorder="0"
                allowFullScreen
                className="rounded-[12px] lg:h-[350px] md:h-[250px]"
            ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                id="ytplayer"
                width="100%"
                height="350px"
                src="https://www.youtube.com/embed/-Q5eaf05_L8?si=OUxKpCdwR1OSoBCn"
                frameBorder="0"
                allowFullScreen
                className="rounded-[12px] lg:h-[350px] md:h-[250px]"
            ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                id="ytplayer"
                width="100%"
                height="350px"
                src="https://www.youtube.com/embed/3sEVlTcjocU?si=3nravm1CeOsh91cz"
                frameBorder="0"
                allowFullScreen
                className="rounded-[12px] lg:h-[350px] md:h-[250px]"
            ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                id="ytplayer"
                width="100%"
                height="350px"
                src="https://www.youtube.com/embed/8fzJ8gPFjsw?si=POAH6KzeJslAZgeI"
                frameBorder="0"
                allowFullScreen
                className="rounded-[12px] lg:h-[350px] md:h-[250px]"
            ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                id="ytplayer"
                width="100%"
                height="350px"
                src="https://www.youtube.com/embed/4PYNXiwzezU?si=2B5wwPQg43Ir0OvI"
                frameBorder="0"
                allowFullScreen
                className="rounded-[12px] lg:h-[350px] md:h-[250px]"
            ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                id="ytplayer"
                width="100%"
                height="350px"
                src="https://www.youtube.com/embed/PejFru5-xtU?si=EX1Yr5bVrm49DVhr"
                frameBorder="0"
                allowFullScreen
                className="rounded-[12px] lg:h-[350px] md:h-[250px]"
            ></iframe>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
