"use client"
import React, { useEffect, useState , useRef} from 'react'
import Link from 'next/link'
import Container from '@/component/Container'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

function Jobs() {

  const [number1 , setNumber1] = useState(0)
  const [number2 , setNumber2] = useState(0)
  const target1 = 3747
  const target2 = 28
  const duration = 4000
  

  useEffect(()=>{
    let start = 0
    const increment1 = target1 / (duration / 10)

    const interval1 = setInterval(() => {
      start += increment1 
      if(start >= target1){
        start = target1
        clearInterval(interval1)
      }
      setNumber1(Math.floor(start));
      
    }, );
    
   return () => clearInterval(interval1);
  }, []);

  useEffect(()=>{
    let start = 0
    const increment2 = target2 / (duration / 10)

     const interval2 = setInterval(() => {
      start += increment2 
      if(start >= target2){
        start = target2
        clearInterval(interval2)
      }
      setNumber2(Math.floor(start));
      
    },10 );
    
   return () => clearInterval(interval2);
  }, []);

  
  return (
    <div>
      <div className='bg-cover bg-center shadow-xl h-[280px] shape relative' style={{backgroundImage:'url("/Contact-us.webp")'}}>
        <span className='bg-black/55 rounded-md px-4 py-2 absolute bottom-1/3 right-1/12 text-4xl text-white'>استخدام</span>
        <div className='bg-black/55 rounded-md px-4 py-2 absolute bottom-4 right-1/12  text-white'>
          <Link className='hover:text-redd' href="/"><i className="ri-arrow-right-circle-line"></i>  Home</Link>
          <span className='mr-2'>استخدام</span>
        </div>
      </div>
      <Container>
        <div className='rounded-2xl shadow-xl text-white p-4 mt-10'>
          <p className='text-md md:text-xl text-gray-700 text-center'>جهت آگاهی از فرصت‌های شغلی و کسب اطلاعات بیشتر کلیک نمایید</p>
          <button className='text-white bg-red-700 px-3 md:px-8 py-2 md:py-5 mt-5 md:text-xl text-md rounded-md'>درخواست همکاری</button>
        </div>
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-6 mt-8 mx-15'>
          <div className=''>
            <div className='rounded-2xl shadow-xl flex flex-col justify-center items-center lg:my-12'>
              <h4 className='mt-5 text-gray-700 text-2xl font-bold'>{number1}</h4>
              <h5 className='text-gray-700 text-xl mb-5'>کل افراد استخدام شده</h5>
            </div>
            <div className='rounded-2xl shadow-xl flex flex-col justify-center items-center lg:my-12 mt-5 sm:mt-0 '>
              <h4 className='mt-5 text-gray-700 text-2xl font-bold'>{number2}</h4>
              <h5 className='text-gray-700 text-xl mb-5'>استخدام ماه گذشته</h5>
            </div>
          </div>
          <figure className='rounded-2xl shadow-xl flex justify-center h-[200px] lg:h-[300px]'>
            <img className='object-center' src="/download.png" alt="" />
          </figure>
          <figure className='rounded-2xl shadow-xl flex justify-center h-[200px] lg:h-[300px]'>
            <img className='object-cover' src="/iran-map-p6a2fubjekva0xogok0qd1hk9qyvu75yklxmcllqtc.png" alt="" />
          </figure>
        </section>
        <section className=''>
          <h4 className='text-gray-700 text-xl font-bold lg:text-2xl mt-8 text-center lg:text-right'>مزایای کار در بیژن</h4>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-10 lg:mx-0 gap-3 mt-3 lg:mt-10'>
            <article className='shadow-xl rounded-2xl bg-white px-3 py-5 '>
              <i className="ri-user-follow-fill text-gray-700 text-5xl flex justify-center"></i>
              <h3 className='text-center mt-3'>ثبات شغلی</h3>
            </article>
            <article className='shadow-xl rounded-xl bg-white px-3 py-5'>
              <i className="ri-id-card-fill text-gray-700 text-5xl flex justify-center"></i>
              <h3 className='text-center mt-3'>برخورداری از بیمه تکمیلی</h3>
            </article>
            <article className='shadow-xl rounded-2xl bg-white px-3 py-5'>
              <i className="ri-percent-line text-gray-700 text-5xl flex justify-center"></i>
              <h3 className='text-center mt-3'>تخفیف محصولات غذایی</h3>
            </article>
            <article className='shadow-xl rounded-2xl bg-white px-3 py-5'>
              <i className="ri-bank-card-2-fill text-gray-700 text-5xl flex justify-center"></i>
              <h3 className='text-center mt-3'>اعطای وام‌های بلندمدت</h3>
            </article>
            <article className='shadow-xl rounded-2xl bg-white px-3 py-5'>
              <i className="ri-bank-fill text-gray-700 text-5xl flex justify-center"></i>
              <h3 className='text-center mt-3'>آموزش ضمن خدمت</h3>
            </article>
            
          </div>
        </section>
        <section className='shadow-xl rounded-2xl bg-white p-10 mt-15 mx-5 lg:mx-0'>
          <h5 className='text-gray-700 text-md font-bold lg:text-2xl'>تجربه افراد استخدام شده</h5>
          <Swiper navigation={true} autoplay={{delay : 4000 , disableOnInteraction : false}} modules={[Autoplay]} className="mySwiper m-10 px-10">
            <SwiperSlide>
              <p className='text-gray-700'>شرکت بیژن با هدف مشتری مداری و با استفاده از پل روابط عمومی توانسته تا چهره مناسبی از سازمان میان مردم، مخاطبین و مشتریان شکل دهد. همچنین در این زمینه بسیار پیش رو بوده و توانسته با انتشار نشریه، سایت و اخبار این امر را پیش ببره.</p>
              <div className='flex justify-center items-center mt-4'>
                <img src="/user.png" alt="" />
                <h4 className='text-gray-700 text-md lg:text-xl font-bold mx-2'>سرپرست روابط عمومی</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <p className='text-gray-700'>صنایع غذایی بیژن با بیش از پنجاه سال ، سابقه یک شرکت قوی است که در این چند سال پیشرفت شایانی در داخل و خارج ار کشور داشته، فضای مجموعه بیژن خیلی دوستانه است همه ی ما باهم یک خانواده هستیم و به واسطه زمان زیادی که در  کنار همیم به تبع باید خیلی صمیمی باشیم.</p>
              <div className='flex justify-center items-center mt-4'>
                <img src="/user.png" alt="" />
                <h4 className='text-gray-700 text-md lg:text-xl font-bold mx-2'>خدمات</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <p className='text-gray-700'>1.رفتار سازمانی مناسب و احترام به یکدیگر 2.کلاس های آموزشی جهت آموزش و بالا بردن دانش پرسنل در سازمان 3.منظم بودن و ایجاد محیط آرام 4.استفاده بهینه از توانایی هایی پرسنل در واحد و تیم</p>
              <div className='flex justify-center items-center mt-4'>
                <img src="/user.png" alt="" />
                <h4 className='text-gray-700 text-md lg:text-xl font-bold mx-2'>سرپرست تحقیقات و بازاریابی</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <p className='text-gray-700'>آموزش و یادگیری هنر مذاکره، گفتگو با شرکت ها و اشخاص متفاوت زیر نظر مدریت بازرگانی انجام امور به صورت تیمی در واحدی کاملا هماهنگ. در صورت همراه شدن با بیژن شما تجربه انجام کارها با سرعت بالا و یه صورت صحیح کسب می کنید.</p>
              <div className='flex justify-center items-center mt-4'>
                <img src="/user.png" alt="" />
                <h4 className='text-gray-700 text-md lg:text-xl font-bold mx-2'>کارشناس بازرگانی</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <p className='text-gray-700'>نظم سازمانی و احترام بین پرسنل و مدریت از نقاط شاخص و بارز شرکت بیژن میباشد.</p>
              <div className='flex justify-center items-center mt-4'>
                <img src="/user.png" alt="" />
                <h4 className='text-gray-700 text-md lg:text-xl font-bold mx-2'>کارشناس دیجیتال مارکتینگ</h4>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </Container>
    </div>
  )
}

export default Jobs