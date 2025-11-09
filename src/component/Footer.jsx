import React from 'react'

function Footer() {
  return (
    <div className='bg-BijanRed text-white mt-30'>
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 p-10'>
            <div className='grid col-span-1'>
                <figure>
                    <img className='w-[150px]  sm:w-[150px] mx-auto lg:mx-0 object-cover' src="/footer-logo-bijan.webp" alt="" />
                </figure>
                <div className='mt-5'>
                    <h3 className='text-xl sm:text-xl mt-10 lg:mt-0'>بیژن در شبکه‌های اجتماعی</h3>
                    <div className='flex lg:justify-start mt-2'>
                        <i className="ri-instagram-line text-2xl sm:text-3xl mx-2"></i>
                        <i className="ri-linkedin-fill text-2xl sm:text-3xl mx-2"></i>
                        <i className="ri-youtube-line text-2xl sm:text-3xl mx-2"></i>
                    </div>
                </div>
            </div>
            <div className='sm:col-span-2 mt-10 lg:mt-0'>
                <h4 className='text-xl sm:text-2xl font-semibold mb-3'>اطلاعات تماس</h4>
                <ul className='text-base sm:text-lg space-y-2 leading-relaxed'>
                    <li className='py-'>
                      <span><i className="ri-phone-fill px-1"></i></span>
                       <span>
                           <b>دفترمرکزی :</b>
                            61966-021
                        </span>
                    </li>
                    <li className='py-1'>
                        <span><i className="ri-phone-fill px-1"></i></span>
                        <span>
                            <b>کارخانه :</b>
                            66808739-021
                        </span>
                    </li>
                    <li className='py-1'>
                        <span><i className="ri-check-line px-1"></i></span>
                        <span>
                            <b>سامانه پیامکی :</b>
                            1000780
                        </span>
                    </li>
                    <li className='py-1'>
                        <span><i className="ri-check-line px-1"></i></span>
                        <span>
                            <b>ایمیل :</b>
                            info@bijanfood.com
                        </span>
                    </li>
                    <li className='py-1'>
                        <span><i className="ri-check-line px-1"></i></span>
                        <span>
                            <b>کدپستی :</b>
                            1513814811
                        </span>
                    </li>
                    <li className='py-1'>
                        <span><i className="ri-map-pin-2-line px-1"></i></span>
                        <span>
                            <b>دفترمرکزی :</b>
                            تهران، میدان آرژانتین، خیابان احمدقیصر، خیابان احمدیان ،پلاک 8
                        </span>
                    </li>
                    <li className='py-1'>
                        <span><i className="ri-map-pin-2-line px-1"></i></span>
                        <span>
                            <b>کارخانه :</b>
                            تهران، بزرگراه فتح، خیابان هفده شهریور،کوچه کاوش، پلاک 10
                        </span>
                    </li>
                </ul>
            </div>
            <div className='sm:col-span-2 mt-10 lg:mt-0'>
                <div className='flex flex-col sm:flex-row sm:justify-between gap-6 text-center sm:text-right'>
                    <div>
                        <h4 className='text-xl sm:text-2xl mb-2'>دسترسی سریع</h4>
                        <ul className='text-xl sm:text-lg'>
                            <li className='py-1'><a href="/store">محصولات</a></li>
                            <li className='py-1'><a href="/sale">دپارتمان فروش</a></li>
                            <li className='py-1'><a href="/export">دپارتمان صادرات</a></li>
                            <li className='py-1'><a href="/aboutUs">درباره ما</a></li>
                            <li className='py-1'><a href="/contactUs">تماس باما</a></li>
                            <li className='py-1'><a href="/jobs">استخدام</a></li>
                        </ul>
                    </div>
                    <div className='mt-10 lg:mt-0'>
                        <h4 className='text-xl sm:text-2xl  mb-2'>مجله صنعت غذا بیژن</h4>
                        <ul className='text-xl sm:text-lg'>
                           <li className='py-1'><a href="/news">اخبار</a></li>
                           <li className='py-1'><a href="/healthyLifestyle">سبک زندگی سالم</a></li>
                           <li className='py-1'><a href="/cooking">آشپزخانه بیژن</a></li>
                           <li className='py-1'><a href="/video">ویدیو</a></li>
                        </ul>
                    </div>
                    <figure className='flex justify-center'>
                        <img className='w-[100px] sm:w-[150px]' src="/logo.png" alt="" />
                    </figure>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer