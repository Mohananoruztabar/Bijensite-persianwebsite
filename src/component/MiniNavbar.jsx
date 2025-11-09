"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React , { useState } from "react"


function MiniNavbar() {

    const usepathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    const nav = [
        {
            title : "خانه" ,
            href : "/"
        },
        {
            title : "محصولات" ,
            href : "/store"
        },
        {
            title : "اخبار" ,
            href : "/news"
        },
        {
            title : "سبک زندگی سالم" ,
            href : "/healthyLifestyle"
        },
        {
            title : "داستان موادغذایی" , 
            href : "/foodStore"
        },
        {
            title : "آشپزی" ,
            href : "/cooking"
        },
        {
            title : "ویدیو" ,
            href : "/video"
        },
        {
            title : "مجله بیژن" ,
            href : "/magzin"
        }
        
    ]
  return (
    <div className='shadow-xl h-[60px]'>
        <div className='hidden lg:flex mx-12 relative'>
            <figure className='absolute top-[-20] duration-300 ease-in-out hover:top-0 z-40'>
                <img className='' src="/logo100pix-fa.png" alt="" />
            </figure>
            <nav className='flex justify-center my-4 mx-20'>
                {nav.map((item , i) => {
                    return(
                        <Link className={`mx-4 hover:text-redd text-gray-600 ${usepathname == item.href ? 'text-redd' : ''}`} key={i} href={item.href}>{item.title}</Link>
                    )
                })}
            </nav>
            <div className='flex justify-items-end text-gray-700 text-3xl py-3 mr-auto'>
                <i className="ri-instagram-line mx-5 hover:text-redd"></i>
                <i className="ri-linkedin-fill hover:text-redd"></i>
            </div>
        </div>
        <div className='flex lg:hidden justify-between items-center px-4 h-full'>
            <figure>
                <img src="/logo100pix-fa.png" alt="" className='h-20'/>
            </figure>
            <button onClick={() => setIsOpen(!isOpen)}>
                <i className="ri-menu-line text-3xl"></i>
            </button>
        </div>
        {isOpen && (
            <div className='absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center md:hidden z-50'>
                {nav.map((item, i) => (
                    <Link key={i} className={`w-full text-center py-3 border-b hover:bg-gray-100 ${usepathname == item.href ? 'text-redd' : 'text-gray-700'}`}
                        href={item.href} onClick={() => setIsOpen(false)}>{item.title}
                    </Link>
                ))}
            </div>
        )}
    </div>
  )
}

export default MiniNavbar