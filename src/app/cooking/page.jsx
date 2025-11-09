"use client"
import React, { useEffect, useState } from 'react'
import Container from '@/component/Container'
import CookingItems from '@/component/CookingItems'
import Link from 'next/link'
import LatestNews from '@/component/LatestNews'
import LastCook from '@/component/LastCook'
import dataApi from '@/dataBase/db.json'

function Cooking() {
    // const [cook , setCook] = useState([])
    // const [news , setNews] = useState([])

    // useEffect(()=>{
        
    //     fetch('http://localhost:8000/cooking')
    //     .then((res)=> {
    //         if(res.ok) return res.json()
    //         throw new Error ('please check again')
    //     })
    //     .then((data) => setCook(data))
    //     .catch((err) => console.log(err))
    // } , [])

    // useEffect(()=>{

    //     fetch('http://localhost:8000/news')
    //     .then((res) => {
    //         if(res.ok) return res.json()
    //            throw new Error ('please check again')  
    //     })
    //     .then((data) => setNews(data))
    //     .catch((err) => console.log(err))
    // } , [])
    
    const news = dataApi.news || []
    const cook = dataApi.cooking || []
  return (
    <div>
        <div className='bg-cover bg-center shadow-xl h-[280px] relative' style={{backgroundColor: '#C9161D'}}>
            <span className='bg-black/55 rounded-md px-4 py-2 absolute bottom-1/3 right-1/12 text-4xl text-white'> مجله اینترنتی بیژن</span>
            <div className='bg-black/55 rounded-md px-4 py-2 absolute bottom-4 right-1/12  text-white'>
                <Link className='hover:text-redd' href="/"><i className="ri-arrow-right-circle-line"></i>  Home</Link>
                <span className='mr-2'>آشپزی</span>
            </div>
        </div>
        <Container>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-15'>
                <div className='lg:col-span-2'>
                    <section className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-10 md:mx-0'>
                        {cook.map((item , i)=> {
                            return (
                                <Link key={i} href={`/cooking/${item.id}`}>
                                    <CookingItems {...item} />
                                </Link>
                            )
                        })}
                    </section>
                </div>
                <div className='space-y-6'>
                    <div>
                        <LatestNews news={news} />
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

export default Cooking