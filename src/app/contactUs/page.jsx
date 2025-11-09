"use client"
import React from 'react'
import Link from 'next/link'
import Container from '@/component/Container'

function ContactUs() {

    const handelsubmit = () =>{
        alert("ثبت شد !")
    }
    
  return (
    <div>
        <div className='bg-cover bg-center shadow-xl h-[280px] shape relative' style={{backgroundImage:'url("/Contact-us.webp")'}}>
            <span className='bg-black/55 rounded-md px-4 py-2 absolute bottom-1/3 right-1/12 text-4xl text-white'>تماس با ما</span>
            <div className='bg-black/55 rounded-md px-4 py-2 absolute bottom-4 right-1/12  text-white'>
              <Link className='hover:text-redd' href="/"><i className="ri-arrow-right-circle-line"></i>  Home</Link>
              <span className='mr-2'>تماس با ما</span>
            </div>
        </div>
        <Container>
            <section className='mt-15 mx-[100px]'>
                <div>
                    <label className='text-xl' htmlFor="inp1">نام شما</label>
                    <input type="text" id='inp2' className='w-full py-2 shadow1 outline-0 px-2' />
                </div>
                <div className='mt-10'>
                    <label className='text-xl' htmlFor="inp2">ایمیل شما</label>
                    <input type="text" id='inp2' className='w-full py-2 shadow1 px-2 outline-0' />
                </div>
                <div className='mt-10'>
                    <label className='text-xl' htmlFor="inp3">موضوع</label>
                    <input type="text" id='inp3' className='w-full py-2 shadow1 px-2 outline-0' />
                </div>
                <div className='mt-10'>
                    <label className='text-xl' htmlFor="">پیغام شما (اختیاری)</label>
                    <textarea className='w-full py-10 shadow1 '  id=""></textarea>
                </div>
                <div className='mt-10 flex justify-center'>
                    <button className='text-white px-7 py-3 bg-red-700 rounded-md shadow-2xl' onClick={handelsubmit}>ثبت</button>
                </div>
            </section>
            <section className='mt-10 grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-2xl'>
                <div className='p-2'>
                    <h3 className='text-xl md:text-2xl text-gray-700 mt-4 md:mt-0 px-2 text-center md:text-right'>راه‌های ارتباطی دفتر مرکزی</h3>
                    <div className='rounded-2xl shadow1 p-3 group mt-4'>
                        <div className='flex justify-between'>
                            <h4 className='font-bold text-gray-700 text-xl'>آدرس</h4>
                            <i className="ri-map-pin-2-line text-3xl group-hover:text-redd"></i>
                        </div>
                        <p className='text-gray-700'>تهران، میدان آرژانتین، خیابان احمد قصیر، خیابان احمدیان، پلاک 8</p>
                    </div>
                    <div className='rounded-2xl shadow1 p-2 group mt-4'>
                        <div className='flex justify-between'>
                            <h4 className='font-bold text-gray-700 text-xl'>تلفن</h4>
                            <i className="ri-phone-fill text-3xl group-hover:text-redd"></i>
                        </div>
                        <p className='text-gray-700'>021-61966</p>
                    </div>
                    <div className='rounded-2xl shadow1 p-2 group mt-4'>
                        <div className='flex justify-between'>
                            <h4 className='font-bold text-gray-700 text-xl'>فکس</h4>
                            <i className="ri-file-list-2-fill text-3xl group-hover:text-redd"></i>
                        </div>
                        <p className='text-gray-700'>021-66817848</p>
                    </div>
                    <div className='rounded-2xl shadow1 p-2 group mt-4'>
                        <div className='flex justify-between'>
                            <h4 className='font-bold text-gray-700 text-xl'>کدپستی</h4>
                            <i className="ri-home-3-fill text-3xl group-hover:text-redd"></i>
                        </div>
                        <p className='text-gray-700'>1513814811</p>
                    </div>
                    <div className='rounded-2xl shadow1 p-2 group mt-4'>
                        <div className='flex justify-between'>
                            <h4 className='font-bold text-gray-700 text-xl'>ایمیل</h4>
                            <i className="ri-mail-fill text-3xl group-hover:text-redd"></i>
                        </div>
                        <p className='text-gray-700'>info@bijanfood.com</p>
                    </div>
                    <p className='mt-5 text-xl text-gray-700'>بیژن را در شبکه‌های اجتماعی دنبال کنید</p>
                    <div className='m-8 justify-center flex'>
                        <i className="ri-instagram-line text-3xl hover:text-redd mx-4"></i>
                        <i className="ri-linkedin-fill text-3xl hover:text-redd mx-4"></i>
                    </div>
                </div>
                <figure className='m-4 flex justify-center'>
                    <img className='rounded-2xl' src="/bijan-central-branch.png" alt="" />
                </figure>
            </section>
            <section className='mt-10 grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-2xl'>
                <div className='p-2'>
                    <h3 className='text-xl md:text-2xl text-gray-700 px-2 md:mt-0 mt-4 text-center md:text-right'>راه‌های ارتباطی کارخانه</h3>
                    <div className='rounded-2xl shadow1 p-3 group mt-4'>
                        <div className='flex justify-between'>
                            <h4 className='font-bold text-gray-700 text-xl'>آدرس</h4>
                            <i className="ri-map-pin-2-line text-3xl group-hover:text-redd"></i>
                        </div>
                        <p className='text-gray-700'>تهران، بزرگراه فتح، خیابان هفده شهریور،کوچه کاوش، پلاک 10</p>
                    </div>
                    <div className='rounded-2xl shadow1 p-2 group mt-4'>
                        <div className='flex justify-between'>
                            <h4 className='font-bold text-gray-700 text-xl'>تلفن</h4>
                            <i className="ri-phone-fill text-3xl group-hover:text-redd"></i>
                        </div>
                        <p className='text-gray-700'>021-66808739</p>
                    </div>
                    <div className='rounded-2xl shadow1 p-2 group mt-4'>
                        <div className='flex justify-between'>
                            <h4 className='font-bold text-gray-700 text-xl'>فکس</h4>
                            <i className="ri-file-list-2-fill text-3xl group-hover:text-redd"></i>
                        </div>
                        <p className='text-gray-700'>021-66807186</p>
                    </div>
                </div>
                <figure className='m-4 flex justify-center'>
                    <img className='rounded-2xl object-cover' src="/bijan-factory.png" alt="" />
                </figure>
            </section>
        </Container>
    </div>
  )
}

export default ContactUs