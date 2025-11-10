import Container from '@/component/Container'
import React from 'react'
import Link from 'next/link'
import NewsItems from '@/component/NewsItems'
import Paginate from '@/component/Paginate'
import LatestNews from '@/component/LatestNews'
import LastCook from '@/component/LastCook'
import dataApi from '@/dataBase/db.json'

async function News(props) {

    const allNews = dataApi.news || []
    const cook = dataApi.cooking || []

    const page = (await props.searchParams).page ?? "1"
    const per_page = (await props.searchParams).perpage ?? "4"

    const startIndex = (parseInt(page) - 1) * parseInt(per_page)
    const endIndex = startIndex + parseInt(per_page)
    const paginatedNews = allNews.slice(startIndex, endIndex)
    const pageCount = Math.ceil(allNews.length / parseInt(per_page))

    // const result = await fetch(`http://localhost:8000/news?_page=${page}&_per_page=${per_page}`)
    // const data = await result.json()

    
    // const allNewsRes = await fetch("http://localhost:8000/news")
    // const allNews = await allNewsRes.json()

    // const respon = await fetch('http://localhost:8000/cooking')
    // const cook = await respon.json()


  return (
    <div>
        <div className='bg-cover bg-center shadow-xl h-[280px] relative' style={{backgroundColor: '#C9161D'}}>
            <span className='bg-black/55 rounded-md px-4 py-2 absolute bottom-1/3 right-1/12 text-4xl text-white'> مجله اینترنتی بیژن</span>
            <div className='bg-black/55 rounded-md px-4 py-2 absolute bottom-4 right-1/12  text-white'>
                <Link className='hover:text-redd' href="/"><i className="ri-arrow-right-circle-line"></i>  Home</Link>
                <Link href='/news' className='mr-2 hover:text-redd'> اخبار <i className="ri-arrow-right-circle-line"></i></Link>
                <span className='mr-2'>اخبار بیژن</span>
            </div>
        </div>
        <Container>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-15'>
               <div className='grid col-span-2'>
                   <section className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {paginatedNews.map((news) => {
                            return(
                                <Link key={news.id} href={`/news/${news.id}`}>
                                    <NewsItems {...news} />
                                </Link>
                            )
                        })}
                        
                    </section>
                    <Paginate pageCount={pageCount} />
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

export default News