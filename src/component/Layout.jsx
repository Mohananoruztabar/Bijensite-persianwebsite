"use client"
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { usePathname } from 'next/navigation'
import MiniNavbar from './MiniNavbar'

function Layout({children}) {

  const miniNavbarPages = [
    '/elementor/',
    '/news/',
    '/news',
    '/healthyLifestyle' ,
    '/healthyLifestyle/' ,
    '/foodStore',
    '/foodStore/',
    '/cooking' ,
    '/cooking/' ,
    '/video' ,
    '/magzin' ,
    '/blog' , 
  ]

  const pathname = usePathname()
  const showNavbar = miniNavbarPages.some(page => pathname.startsWith(page))
  return (
    <div>
        {showNavbar ? <MiniNavbar /> : <Navbar />}
        {children}
        <Footer />
    </div>
  )
}

export default Layout