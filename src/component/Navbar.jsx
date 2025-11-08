"use client"
import React from 'react'
import Container from './Container'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

function Navbar() {

    const pathnames = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)


  return (
    <div>
        <div className='bg-redd flex px-3 text-white items-center sm:justify-start h-10'>
            <i className="ri-instagram-line px-2 text-xl lg:text-3xl "></i>
            <i className="ri-linkedin-box-line px-2 text-xl lg:text-3xl"></i>
            <h4 className='px-2 text-sm md:text-lg lg:text-xl'>بیژن طعم زندگی</h4>
        </div>
        <div>
            <Container>
                <div className='hidden place-items-center lg:grid grid-cols-3'>
                    <div className='flex flex-wrap w-[350px] h-23 mr-35'>
                        <Link className={`mx-5 text-[19px] font-bold mb-2 hover:border-b-3 hover:border-redd ${pathnames == "/" ? ' text-redd border-b-3 border-redd px-2' : ''}`} href='/'> خانه </Link>
                        <span>|</span>
                        <Link className={`mx-5 text-[19px] font-bold mb-2 hover:border-b-3 hover:border-redd ${pathnames == "/aboutUs" ? 'text-redd border-b-3 border-redd px-2' : ''}`} href='/aboutUs'>درباره ما</Link>
                        <span>|</span>
                        <div className='relative group'>
                            <Link className={`mx-5 font-bold text-[19px] mb-2 hover:border-b-3 hover:border-redd ${pathnames == "/store" ? 'text-redd border-b-3 border-redd px-2' : ''}`} href='/store'> محصولات <i className="ri-arrow-down-s-fill"></i></Link>
                            <div className='absolute right-0 hidden group-hover:flex flex-col bg-white rounded-md shadow-lg mt-1  min-w-[180px] z-50'>
                                <div  className='group/item relative'>
                                    <Link className='block w-full px-4 py-3  hover:bg-gray-700 hover:text-redd text-[16px] transition' href="/store/cat/sauce-bottl">انواع سس <i className="ri-arrow-right-s-fill"></i></Link>
                                    <div className='absolute left-45 top-[-6] hidden group-hover/item:flex flex-col bg-white shadow-lg mt-1 w-[130px] z-50'>
                                        <Link className='px-4 py-3 hover:bg-gray-700 hover:text-redd text-[16px] transition' href="">سس بطری</Link>
                                        <Link className='px-4 py-3 hover:bg-gray-700 hover:text-redd text-[16px] transition' href="">سس شیشه ای</Link>
                                        <Link className='px-4 py-3 hover:bg-gray-700 hover:text-redd text-[16px] transition' href="">سس تک نفره</Link>
                                        <Link className='px-4 py-3 hover:bg-gray-700 hover:text-redd text-[16px] transition' href="">سس دبه </Link>
                                    </div>
                                </div>
                                <div className='relative group/item'>
                                    <Link className='px-4 py-3 block w-full hover:bg-gray-700 hover:text-redd text-[16px] transition' href="/store/cat/Protein%20products">فراورده های پروتیینی <i className="ri-arrow-right-s-fill"></i></Link>
                                    <div  className='absolute left-45 top-[-5] hidden group-hover/item:flex flex-col bg-white shadow-lg mt-1 w-[130px] z-50'>
                                        <Link className='px-4 py-3 hover:bg-gray-700 hover:text-redd text-[16px] transition' href="">سوسیس</Link>
                                        <Link className='px-4 py-3 hover:bg-gray-700 hover:text-redd text-[16px] transition' href="">کالباس</Link>
                                        <Link className='px-4 py-3 hover:bg-gray-700 hover:text-redd text-[16px] transition' href="">پنیر پیتزا</Link>
                                        <Link className='px-4 py-3 hover:bg-gray-700 hover:text-redd text-[16px] transition' href="">خلال سیب زمینی</Link>
                                        <Link className='px-4 py-3 hover:bg-gray-700 hover:text-redd text-[16px] transition' href="">ناگت مرغ</Link>
                                        <Link className='px-4 py-3 hover:bg-gray-700 hover:text-redd text-[16px] transition' href="">همبرگر</Link>
                                    </div>
                                </div>
                                <div className='relative group/item'>
                                    <Link className='block w-full px-4 py-3  hover:bg-gray-700 hover:text-redd text-[16px] transition' href="">فراورده های لبنی <i className="ri-arrow-right-s-fill"></i></Link>
                                    <div className='absolute left-45 top-[-5] hidden group-hover/item:flex flex-col bg-white shadow-lg mt-1 w-[130px] z-50'>
                                        <Link className='px-4 py-3 hover:bg-gray-700 hover:text-redd text-[16px] transition' href="">پنیر لیقوان</Link>
                                    </div>
                                </div>
                                <div className='relative group/item'>
                                    <Link className='px-4 py-3 block w-full hover:bg-gray-700 hover:text-redd text-[16px] transition' href="/store/cat/oil">روغن <i className="ri-arrow-right-s-fill"></i></Link>
                                    <div className='absolute left-45 top-[-5] hidden group-hover/item:flex flex-col bg-white rounded-md shadow-lg mt-1 w-[150px] z-50'>
                                        <Link className='px-4 py-3 hover:bg-gray-700 hover:text-redd text-[16px] transition' href="">روغن سرخ کردنی</Link>
                                        <Link className='px-4 py-3 hover:bg-gray-700 hover:text-redd text-[16px] transition' href="">روغن مخلوط خوراکی</Link>
                                        <Link className='px-4 py-3 hover:bg-gray-700 hover:text-redd text-[16px] transition' href="">روغن آفتابگردان</Link>
                                        <Link className='px-4 py-3 hover:bg-gray-700 hover:text-redd text-[16px] transition' href="">روغن زیتون</Link>
                                        <Link className='px-4 py-3 hover:bg-gray-700 hover:text-redd text-[16px] transition' href=""> روغن کنجد</Link>
                                    </div>
                                </div>
                                <div className='relative group/item'>
                                    <Link className='px-4 py-3 block w-full hover:bg-gray-700 hover:text-redd text-[16px] transition' href="/store/cat/rice">برنج <i className="ri-arrow-right-s-fill"></i></Link>
                                    <div className='absolute left-45 top-[-5] hidden group-hover/item:flex flex-col bg-white rounded-md shadow-lg mt-1 w-[150px] z-50'>
                                        <Link className='px-4 py-3 hover:bg-gray-700 hover:text-redd text-[16px] transition' href="/store/product/63">طارم</Link>
                                        <Link className='px-4 py-3 hover:bg-gray-700 hover:text-redd text-[16px] transition' href="/store/product/62">هاشمی</Link>
                                    </div>
                                </div>
                                <div className='relative group/item'>
                                    <Link className='px-4 py-3 block w-full hover:bg-gray-700 hover:text-redd text-[16px] transition' href="/store/cat/pickled">ترشیجات <i className="ri-arrow-right-s-fill"></i></Link>
                                    <div className='absolute left-45 top-[-5] hidden group-hover/item:flex flex-col bg-white rounded-md shadow-lg mt-1 w-[150px] z-50'>
                                        <Link className='px-4 py-3 hover:bg-gray-700 hover:text-redd text-[16px] transition' href="">خیارشور</Link>
                                        <Link className='px-4 py-3 hover:bg-gray-700 hover:text-redd text-[16px] transition' href="">زیتون</Link>
                                        <Link className='px-4 py-3 hover:bg-gray-700 hover:text-redd text-[16px] transition' href="">ترشی</Link>
                                    </div>
                                </div>
                                <Link className='px-4 py-2 hover:bg-gray-700 hover:text-redd text-[16px] transition' href="/store/cat/canned">کنسرو</Link>
                                <Link className='px-4 py-2 hover:bg-gray-700 hover:text-redd text-[16px] transition' href="/store/cat/honey-jam">مربا و عسل</Link>
                                <Link className='px-4 py-2 hover:bg-gray-700 hover:text-redd text-[16px] transition' href="/store/cat/whey">کشک</Link>
                                <Link className='px-4 py-2 hover:bg-gray-700 hover:text-redd text-[16px] transition' href="/store/cat/verjuice">آبلیمو و آبغوره و سرکه</Link>
                            </div>
                        </div>
                        <span>|</span>
                        <div className='group relative mx-5 font-bold text-[19px] mb-2 hover:border-b-3 hover:border-redd'> سازمان فروش <i className="ri-arrow-down-s-fill"></i>
                          <div className='absolute right-0 hidden group-hover:flex flex-col bg-white text-gray-700 rounded-md shadow-lg mt-1 w-[150px] z-50'>
                            <Link className='px-4 py-2 hover:bg-gray-700 hover:text-redd transition text-[16px]' href="/export">دپارتمان صادرات</Link>
                            <Link className='px-4 py-2 hover:bg-gray-700 hover:text-redd text-[16px] transition' href="/sale">دپارتمان فروش</Link>
                          </div>
                        </div>
                    </div>
                   <figure className='ml-10'>
                        <img className='w-[180px]' src="/bijan-logo-2-420x366.png" alt="" />
                    </figure>
                    <div className='flex flex-wrap h-23 w-[400px] ml-25'>
                       <Link className={`mx-5 text-[19px] font-bold mb-2 hover:border-b-3 hover:border-redd ${pathnames == "/coustomerVoice" ? 'text-redd border-b-3 border-redd px-2' : ''}`} href='/coustomerVoice'> صدای مشتریان </Link>
                       <span>|</span>
                       <Link className={`mx-5 text-[19px] font-bold mb-2 hover:border-b-3 hover:border-redd ${pathnames == "/blog" ? 'text-redd border-b-3 border-redd px-2' : ''}`} href='/blog'>مجله اینترنتی</Link>
                       <span>|</span>
                       <Link className={`mx-5 font-bold text-[19px] mb-2 hover:border-b-3 hover:border-redd ${pathnames == "/elementor" ? 'text-redd border-b-3 border-redd px-2' : ''}`} href='/elementor'> نمایشگاه ها</Link>
                       <span>|</span>
                       <Link className={`mx-5 font-bold text-[19px] mb-2 hover:border-b-3 hover:border-redd ${pathnames == "/contactUs" ? 'text-redd border-b-3 border-redd px-2' : ''}`} href='/contactUs'>تماس با ما</Link>
                    </div>
                </div>
                <div className="lg:hidden flex justify-between items-center p-4 bg-white shadow-md">
                    <img className="w-[120px]" src="/bijan-logo-2-420x366.png" alt="بیژن"/>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl text-redd focus:outline-none">{menuOpen ? (
                        <i className="ri-close-line"></i>) : (<i className="ri-menu-line"></i>)}
                    </button>
                </div>
                {menuOpen && (
                    <div className="lg:hidden flex flex-col items-center bg-white shadow-md border-t py-4 space-y-3">
                        <Link href="/" className="text-lg font-bold hover:text-redd">خانه</Link>
                        <Link href="/aboutUs" className="text-lg font-bold hover:text-redd"> درباره ما</Link>
                        <Link href="/store" className="text-lg font-bold hover:text-redd">محصولات</Link>
                        <Link href="/blog" className="text-lg font-bold hover:text-redd">مجله اینترنتی</Link>
                        <Link href="/contactUs" className="text-lg font-bold hover:text-redd">تماس با ما</Link>
                   </div>
                )}
            </Container>
        </div>
    </div>
  )
}

export default Navbar