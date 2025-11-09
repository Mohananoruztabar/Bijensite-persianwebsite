"use client"
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import Container from '@/component/Container';
import LatestNews from '@/component/LatestNews';
import Link from 'next/link';
import dataApi from '@/dataBase/db.json'

function Blog() {

    // const [allData , setAllData] = useState([])
    // const [element , setElement] = useState([])
    // const [cook , setCook] = useState([])

    // useEffect(()=>{
    //     fetch('http://localhost:8000/news')
    //     .then((respon) => respon.json())
    //     .then((data) => setAllData(data))
    // }, [])

    // useEffect(()=>{
    //     fetch('http://localhost:8000/elementor')
    //     .then((res)=> res.json())
    //     .then((para) => setElement(para))
    // } , [])

    // useEffect(()=>{
    //     fetch('http://localhost:8000/cooking')
    //     .then((result)=> result.json())
    //     .then((check) => setCook(check))
    // } , [])

    const allData = dataApi.news || []
    const cook = dataApi.cooking || []
    const element = dataApi.elementor || []
  return (
    <div>
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-15'>
                <div className='col-span-2 mx-5 md:mx-0 h-[400px] md:h-[500px]'>
                    <Swiper
                        spaceBetween={30}
                        hashNavigation={{
                        watchState: true,
                        }}
                        modules={[Autoplay]}
                        autoplay = {{
                        delay : 5000 ,
                        disableOnInteraction : false 
                        }}
                        className="mySwiper rounded-2xl">
                        <SwiperSlide data-hash="slide1" >
                            <img className='object-cover' src="/همام-2-2048x1367.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide data-hash="slide2">
                            <img className='object-cover w-full' src="/3A3A1506-600x400.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide data-hash="slide3" >
                            <img src="/1نمایشگاه-آگروفود-scaled.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide data-hash="slide4">
                            <img className='object-cover' src="/نمایشگاه-آگروفود-2048x1365.jpg" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='col-span-1 mt-5 md:mt-0 mx-5 md:mx-0 h-auto '>
                    <LatestNews news={allData} />
                </div>
            </div>
            <section className='mt-15'>
                <h4 className='text-xl text-center md:text-right md:text-2xl text-gray-700'>نمایشگاه</h4>
                <span className='block border-b border-trans mt-5'></span>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
                    {element.map((item)=> {
                        return(
                            <Link key={item.id} href={`/elementor/${item.id}`}>
                                <div>
                                    <div className='border-trans border h-[400px] mx-5 md:mx-0'>
                                        <figure className='overflow-hidden'>
                                            <img className='object-cover hover:scale-105 duration-500 ease-in-out h-[250px] w-full bg-cover bg-center' src={item.img} alt="" />
                                        </figure>
                                        <h3 className='text-xl md:text-2xl mt-4 mx-5 text-gray-700'>{item.name}</h3>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </section>
            <section className='mt-15'>
                <h4 className='text-xl text-center md:text-right md:text-2xl text-gray-700'>آشپزی</h4>
                <span className='block border-b border-trans mt-5'></span>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Autoplay]}
                    autoplay = {{
                        delay : 5000 ,
                        disableOnInteraction : false 
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    className="mySwiper mt-10"  >
                    {cook.map((val)=> {
                        return(
                            <SwiperSlide key={val.id}>
                                <Link href={`/cooking/${val.id}`}>
                                    <div className='shadow-xl rounded-xl border border-trans w-full h-[450px] lg:mx-0'>
                                        <figure>
                                            <img className='rounded-xl h-[250px] w-full object-cover' src={val.img} alt="" />
                                        </figure>
                                        <div className='m-5'>
                                            <h3 className='text-xl font-bold md:text-2xl text-gray-700'>{val.name}</h3>
                                            <p className='mt-4 text-gray-700 text-md line-clamp-3'>{val.title}</p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                         )
                    })}
                </Swiper>
            </section>
        </Container>
    </div>
  )
}

export default Blog


