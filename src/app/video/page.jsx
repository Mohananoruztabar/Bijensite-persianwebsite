import Container from '@/component/Container'
import React from 'react'
import LastCook from '@/component/LastCook'
import LatestNews from '@/component/LatestNews'
import Link from 'next/link'
import dataApi from '@/dataBase/db.json'

function Video() {

  // const respon = await fetch('http://localhost:8000/news')
  // const allNews = await respon.json()

  // const result = await fetch('http://localhost:8000/cooking')
  // const cook = await result.json()

  const allNews = dataApi.news || []
  const cook = dataApi.cooking || []
  return (
    <div>
      <div className='bg-cover bg-center shadow-xl h-[280px] relative' style={{backgroundColor: '#C9161D'}}>
        <span className='bg-black/55 rounded-md px-4 py-2 absolute bottom-1/3 right-1/12 text-4xl text-white'> مجله اینترنتی بیژن</span>
        <div className='bg-black/55 rounded-md px-4 py-2 absolute bottom-4 right-1/12  text-white'>
          <Link className='hover:text-redd' href="/"><i className="ri-arrow-right-circle-line"></i>  Home</Link>
          <span className='mr-2'>ویدیو</span>
        </div>
      </div>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-15'>
          <div className='grid col-span-2'>
            <h3 className='text-xl mb-10 md:mb-0 py-4 text-center md:text-2xl text-gray-700'>به نظر می‌رسد ما نمی‌توانم آنچه که دنبالش هستید پیدا کنیم.</h3>
          </div>
          <div>
            <div>
              <LatestNews news={allNews} />
            </div>
            <div>
              <LastCook cook={cook} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Video