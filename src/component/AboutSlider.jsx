"use client"
import React from 'react'
import Container from './Container'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation , Autoplay } from 'swiper/modules';

function AboutSlider() {
  return (
    <div className='mt-10 shadow-2xl p-4 rounded-3xl mx-5  lg:mx-0'>
      <Container>
        <h3 className='text-gray-600 text-2xl lg:text-4xl mt-5'>جوایز و استانداردها</h3>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          autoplay = {{
            delay : 3000 , 
            disableOnInteraction : false
          }}
          modules={[Pagination , Autoplay , Navigation]}
          className="mySwiper mt-5 h-[300px]">
        <SwiperSlide>
            <img className='rounded-3xl' src="/A-plaque-honoring-the-famous-figures-of-the-countrys-industry-and-economy-pdogyjh9t8xmv578kmha7n4q2l6youcys9za1uywqs.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-3xl' src="/Customer-Satisfaction-Summit-Tablet-pdogwkzdko94oe1n0a09imx5ioufnjl3il1v23vfpg.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-3xl' src="/Golden-statue-plate-of-a-popular-Iranian-brand-in-1399-pdoh05r9kz5euyul4bo5i8fawh7py2sboafdt0ki10.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-3xl' src="/Honor1-pdog82cxb8ovujnp66hkzbnbpvorvr9558gxfa8404.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-3xl' src="/Honor2-pdog848lowrghrkyv7au4b68wnfib5glthrwdu5bno.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-3xl' src="/Honor3-pdog7wpw68h5wvvw341tkd2k5kgklkmr4gk0jmgh1g.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-3xl' src="/Honor4-pdog7ylkjwjqk3t5s4v2pclhcc7b0yu7spuzi6dop0.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-3xl' src="/Honor5-pdog80h8xkmb7bqfh5obuc4ej3y1gd1ogz5ygqawck.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-3xl' src="/Iran-Economic-Summit-2021-pfnlk8d1wipxce5g8o187wwcp1dcnxa8lac2hw99hg.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-3xl' src="/National-plan-tablet-pdohcyc6lsnwvw9keurcg075za5kprksrm3aylllc4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-3xl' src="/Nutrition-tablet-pdoh198hk0ngel98psqheygnunt4xd51tptrymxyro.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-3xl' src="Responsible-tablet-pdohelk0kcwz7bvjt2cub397ek1p6p3vzr6w715sg4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-3xl' src="/Simin-Health-Apple-Plate-pdohaw2xlvu9ep9fggnth0xr1ubktoe05ejy1qnozo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-3xl' src="/Tablet-of-the-National-Conference-on-Value-Creating-Brands-pdohfhij0q4q62l4mg65nv6vlno6gemrg5deifuekk.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-3xl' src="/Tablet-of-top-managers-and-entrepreneurs-pdohdv8j8zwy68xs2qzad9warrnf767ek4xara8tac.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-3xl' src="/Tehran-Consumer-Rights-Observation-Table-pdoh9j7bqhzcmz8fdvj7vd9s5t0hpezymomp3co5z8.png" alt="" />
        </SwiperSlide>
      </Swiper>
        </Container>
    </div>
  )
}

export default AboutSlider