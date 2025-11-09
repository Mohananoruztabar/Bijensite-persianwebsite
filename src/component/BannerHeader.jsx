"use client"
import React from 'react'
import Container from './Container'
import gsap from 'gsap'
import { useRef , useEffect } from 'react'

function BannerHeader() {

    const rightRef = useRef(null)
      
    useEffect(() => {
    
     if (!rightRef.current ) return

     const mq = window.matchMedia("(min-width: 1024px)");
      if (mq.matches) {
         const card = rightRef.current.querySelectorAll(".card");
         gsap.fromTo(card, { xPercent: 420 }, { duration: 1.3, delay: 1, stagger: -0.4, xPercent: 0, ease: "power2.out" }); }
    } , [])

  return (
    <div className='mt-15'>
        <div className='w-full h-[300px] md:h-[500px] object-cover bg-cover bg-center md:bg-fixed' style={{backgroundImage : "url('/baner.jpg')" ,  backgroundAttachment: "fixed"}}></div>
        <section className='overflow-hidden'>
            <h3 className='text-xl lg:text-3xl text-gray-600 text-center mt-5 lg:mt-15 font-bold'>بیژن طعم زندگی</h3>
            <Container>
                <div ref={rightRef} className='overflow-hidden grid grid-cols-1 place-content-center place-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-5 lg:mt-15'>
                    <div className='relative card'>
                        <img className='rounded-2xl ' src="/cat.jpg" alt="" />
                        <div className='absolute top-2 right-2 bg-white/60 py-2 rounded-bl-full z-30 w-[270px] h-[200px]'>
                           <h4 className='text-redd text-2xl text-center my-10'>کاتالوگ بیژن</h4>
                        </div>
                        
                    </div>
                    <div className='relative card'>
                        
                        <img className='rounded-2xl' src="/cooking.jpg" alt="" />
                        <div className='absolute top-2 right-2 bg-white/60 py-2 rounded-bl-full z-30 w-[270px] h-[200px]'>
                           <h4 className='text-redd text-2xl text-center my-10'>آشپزی با بیژن</h4>
                        </div>
                        
                    </div>
                    <div className='relative card'>
                        <img className='h-[385px] w-[300px] sm:h-[400px] lg:h-[385px] rounded-2xl' src="/044.webp" alt="" />
                        <div className='absolute top-2 right-2 bg-white/60 py-2 rounded-bl-full z-30 w-[270px] h-[200px]'>
                           <h4 className='text-redd text-2xl text-center my-10'>گزارش تصویری</h4>
                        </div>
                        
                    </div>
                    <div className='relative card'>
                        
                        <img className='rounded-2xl' src="/magazine.jpg" alt="" />
                        <div className='absolute top-2 right-2 bg-white/60 py-2 rounded-bl-full z-30 w-[270px] h-[200px]'>
                           <h4 className='text-redd text-2xl text-center my-10'>مجله بیژن</h4>
                        </div>
                        
                    </div>
                </div>
            </Container>
        </section>
    </div>
  )
}

export default BannerHeader