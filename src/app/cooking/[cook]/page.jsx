"use client"
import React, { useEffect, useState } from 'react'
import Container from '@/component/Container'
import CookProducts from '@/component/CookProducts'
import { useParams } from 'next/navigation'
import LatestNews from '@/component/LatestNews'
import LastCook from '@/component/LastCook'
import dataApi from '@/dataBase/db.json'

function page() {

    const {cook} = useParams()
    // const [data , setData] = useState([])
    // const [allData , setAllData] = useState([])
    // const [product , setProduct] = useState([])

    // useEffect(()=>{

    //     fetch(`http://localhost:8000/cooking/${cook}`)
    //     .then((res) => {
    //         if(res.ok) return res.json()
    //             throw new Error('please check again')
    //     })
    //     .then((respon)=> setData(respon))
    // } , [])

    // useEffect(()=>{

    //     fetch('http://localhost:8000/news')
    //     .then((res) => {
    //         if(res.ok) return res.json()
    //             throw new Error('please check again')
    //     })
    //     .then((result)=> setAllData(result))
    // } , [])

    //  useEffect(()=>{

    //     fetch('http://localhost:8000/cooking')
    //     .then((res) => {
    //         if(res.ok) return res.json()
    //             throw new Error('please check again')
    //     })
    //     .then((respon)=> setProduct(respon))
    // } , [])

    const allData = dataApi.news || []
    const product = dataApi.cooking || []
    const data = dataApi.cooking?.find(item => item.id == cook) || {}

  return (
    <div>
        <Container>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <section className='grid col-span-2 '>
                    <CookProducts {...data} />
                </section>
                <div className='mt-8'>
                    <div>
                        <LatestNews news={allData} />
                    </div>
                    <div>
                        <LastCook cook={product} />
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default page