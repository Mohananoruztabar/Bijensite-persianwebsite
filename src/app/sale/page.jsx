import Container from '@/component/Container'
import React from 'react'

function Sale() {
  return (
    <div>
        <div className='bg-cover bg-center shadow-xl h-[280px] shape relative' style={{backgroundImage:'url("/online-programming-course-hero-section-bg.svg")'}}>
            <div className='absolute top-0 left-0 w-full h-full bg-black/30 shape'></div>
            <span className='px-4 py-2 rounded-xl absolute bottom-10 bg-black/50 right-1/12 text-4xl text-white'>دپارتمان فروش</span>
        </div>
        <section className='mt-20'>
            <Container>
                <h3 className='text-3xl text-gray-700 font-bold'>واحد فروش تهران</h3>
                <div className='grid grid-cols-1 md:flex md:justify-between group'>
                    <div className='text-center lg:pt-25 pt-10'>
                        <i className="ri-phone-fill text-6xl text-gray-700  group-hover:text-redd"></i>
                        <h4 className='text-2xl lg:text-3xl text-gray-700 mt-5'>(2112 داخلی) 61966-021</h4>
                        <p className='text-gray-700 mt-5 text-md lg:text-xl'>کارشناسان واحد فروش تهران آماده پاسخگویی و ثبت سفارش شما هستند.</p>
                        
                    </div>
                    <figure>
                        <img className='rounded-3xl ' src="/tehran-department.jpg" alt="" />
                    </figure>
                </div>
                <h3 className='text-3xl text-gray-700 font-bold mt-10'>واحد فروش شهرستان</h3>
                <div className='grid grid-cols-1 md:flex md:justify-between group'>
                    <div className='text-center lg:pt-25 pt-10 '>
                        <i className="ri-phone-fill text-6xl text-gray-700  group-hover:text-redd"></i>
                        <h4 className='text-2xl lg:text-3xl text-gray-700 mt-5'>(2127 داخلی) 61966-021</h4>
                        <p className='text-gray-700 mt-5 text-md lg:text-xl'>کارشناسان واحد فروش شهرستان آماده پاسخگویی و ثبت سفارش شما هستند.</p>
                        
                    </div>
                    <figure>
                        <img className='rounded-3xl' src="/iran-department.webp" alt="" />
                    </figure>
                </div>
            </Container>
        </section>
    </div>
  )
}

export default Sale