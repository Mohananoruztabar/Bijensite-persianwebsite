import React from 'react'
import Link from 'next/link'
import Container from '@/component/Container'

function CoustomerVoice() {
  return (
    <div>
        <div className='bg-cover bg-center shadow-xl h-[280px] shape relative' style={{backgroundImage:'url("/online-programming-course-hero-section-bg.svg")'}}>
            <div className='absolute top-0 left-0 w-full h-full bg-black/30 shape'></div>
            <span className=' absolute bottom-10 right-1/12 text-4xl text-white'>صدای مشتریان</span>
            <div className='absolute bottom-4 right-1/12  text-white'>
                <Link className='hover:text-redd' href="/"><i className="ri-arrow-right-circle-line"></i>  Home</Link>
                <span className='mr-2'>صدای مشتریان</span>
            </div>
        </div>
        <Container>
            <section className='shadow-2xl rounded-3xl flex flex-col justify-center items-center my-25 py-8 group mx-4 md:mx-0'>
                <i className="ri-phone-fill text-6xl text-gray-700 group-hover:text-redd"></i>
                <h4 className='text-2xl md:text-3xl text-gray-700 mt-5'>(داخلی1) 61966-021</h4>
                <h5 className='text-2xl md:text-3xl text-gray-700 mt-10'>0904-4444504</h5>
                <p className='text-gray-700 mt-5 px-4 md:px-0 text-md md:text-xl'>کاربر گرامی شما می‌توانید برای طرح انتقاد و پیشنهاد و یا هرگونه شکایت از محصولات ما با شماره های بالا تماس بگیرید.</p>
            </section>
        </Container>
    </div>
  )
}

export default CoustomerVoice