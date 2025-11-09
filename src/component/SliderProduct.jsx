"use client"
import React from 'react'
import Container from './Container'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation , Autoplay } from 'swiper/modules';
import { useRouter } from 'next/navigation';

function SliderProduct() {
  
  const router = useRouter()

  const categoresImg = [
    { img:"/01.jpg" , slug : "sauce-bottl"} ,
    { img :"/02.jpg" , slug : "Protein products"} ,
    { img:"/03.jpg" , slug : "oil"} ,
    { img:"/04.jpg" , slug : "pickled"} ,
    { img:"/05.jpg" , slug : "canned"} ,
    { img:"/06.jpg" , slug : "honey-jam"} ,
    { img:"/07.jpg" , slug : "whey"} ,
  ]

  const handelClick = (slug) => {
    router.push(`/store/cat/${slug}`)
  }
  return (
    <div className='mt-10 p-4'>
      <h3 className='text-gray-600 text-3xl font-bold mt-5'>محصولات بیشتر</h3>
      <Container>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
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
             slidesPerView: 5,
             spaceBetween: 10,
            },
          }}
          autoplay = {{
            delay : 3000 , 
            disableOnInteraction : false
          }}
          modules={[Autoplay , Navigation]}
          className="mySwiper mt-10 ">
            {categoresImg.map((item) => {
              return(
                <SwiperSlide>
                  <button onClick={()=>handelClick(item.slug)}><img className='rounded-3xl' src={item.img} alt="" /></button>
                </SwiperSlide>
              )
            })}
        </Swiper>
      </Container>
    </div>
  )
}

export default SliderProduct