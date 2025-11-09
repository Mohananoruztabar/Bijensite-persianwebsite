import React from 'react'
import Container from './Container'
import Link from 'next/link'
import dataApi from "@/dataBase/db.json"

function MagzinHeader() {

    const allData = dataApi.foodstore?.slice(0, 3) || [];
    const allNews = dataApi.news?.slice(0, 3) || [];



    // const result = await fetch('http://localhost:8000/foodstore')
    // const data = await result.json()
    // const allData = data.slice(0,3)
//    ...........................................................................
    // const respon = await fetch('http://localhost:8000/news')
    // const news = await respon.json()
    // const allNews = news.slice(0,3)


    return (
        <div className='mt-15'>
            <Container>
                <h4 className='text-center text-xl lg:text-right lg:text-2xl font-bold text-redd mt-10'>مجله اینترنتی بیژن</h4>
                <section className='grid grid-cols-1 sm:grid-cols-2 place-items-center lg:flex lg:flex-wrap gap-4 lg:gap-7 mt-8'>
                    {allData.map((item)=> {
                        return (
                            <Link href={`/foodStore/${item.id}`} key={item.id}>
                                <div className='shadow-xl w-full md:w-[380px] min-h-[450px] hover:shadow-2xl '>
                                    <figure>
                                        <img className='w-full h-[250px] md:h-[220px] lg:h-[250px] object-cover' src={item.img} alt="" />
                                    </figure>
                                    <div className='m-5 px-4'>
                                        <h3 className='text-2xl md:text-xl lg:text-2xl text-gray-700'>{item.name}</h3>
                                        <p className='mt-4 text-md md:text-[15px] lg:text-md text-gray-600 line-clamp-3 '>{item.title}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </section>
                <h4 className='text-center text-xl lg:text-right lg:text-2xl font-bold mt-15 text-redd'>آخرین اخبار و رویدادها</h4>
                <section className='grid grid-cols-1 sm:grid-cols-2 place-items-center pb-10 lg:flex lg:flex-wrap gap-6 lg:gap-7 mt-8 bg-white'>
                    {allNews.map((news)=> {
                        return(
                            <Link href={`/news/${news.id}`} key={news.id}>
                                <div className='shadow-xl w-full md:w-[380px] lg:w-[380px] min-h-[400px] hover:shadow-2xl'>
                                    <figure>
                                       <img className='w-full object-cover' src={news.img} alt="" />
                                    </figure>
                                    <div className='p-6'>
                                        <h3 className='text-2xl text-gray-700'>{news.name}</h3>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </section>
            </Container>
        </div>
    )
}

export default MagzinHeader