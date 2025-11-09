"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

export default function HeaderSlider() {
  return (
    <>
      <Swiper modules={[Autoplay]} autoplay={{delay : 3000 , disableOnInteraction : "false"}} className="mySwiper">
        <SwiperSlide>
          <img src="/banner.01.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner-03.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
