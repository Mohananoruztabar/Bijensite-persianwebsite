import Container from '@/component/Container'
import React from 'react'
import Link from 'next/link'
import LatestNews from '@/component/LatestNews'
import FoodStoreItem from '@/component/FoodStoreItem'
import LastCook from '@/component/LastCook'
import dataApi from '@/dataBase/db.json'

async function FoodStore() {

    // const result = await fetch('http://localhost:8000/foodstore')
    // const foodStore = await result.json()

    // const respon = await fetch('http://localhost:8000/news')
    // const alldata = await respon.json()

    // const para = await fetch('http://localhost:8000/cooking')
    // const cook = await para.json()

    const cook = dataApi.cooking || []
    const alldata = dataApi.news || []
    const foodStore = dataApi.foodstore || []
  return (
    <div>
        <div className='bg-cover bg-center shadow-xl h-[280px] relative' style={{backgroundColor: '#C9161D'}}>
            <span className='bg-black/55 rounded-md px-4 py-2 absolute bottom-1/3 right-1/12 text-4xl text-white'> مجله اینترنتی بیژن</span>
            <div className='bg-black/55 rounded-md px-4 py-2 absolute bottom-4 right-1/12  text-white'>
                <Link className='hover:text-redd' href="/"><i className="ri-arrow-right-circle-line"></i>  Home</Link>
                <span className='mr-2'>داستان موادغذایی</span>
            </div>
        </div>
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-15'>
                <div className='grid col-span-2'>
                    <section className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {foodStore.map((food , i)=> {
                            return (
                                <Link key={i} href={`/foodStore/${food.id}`}>
                                    <FoodStoreItem {...food} />
                                </Link>
                            )
                        })}
                    </section>
                </div>
                <div>
                    <div>
                       <LatestNews news={alldata} />
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

export default FoodStore