import CatProduct from '@/component/CatProduct'
import Container from '@/component/Container'
import Link from 'next/link'
import React from 'react'
import dataApi from '@/dataBase/db.json'

function Store() {

    // const result = await fetch("http://localhost:8000/products")
    // const data = await result.json()

    const data = dataApi.products || []
  return (
    <div className='mt-15'>
        <Container>
            <h3 className='text-redd text-3xl mt-10 font-bold'>محصولات بیژن</h3>
            <span className='w-full mt-8 block bg-gray-600 span1'></span>
            <section className='grid grid-cols-2  lg:grid-cols-3 gap-5 mt-5'>
                {data.map((item)=>{
                    return (
                        <Link key={item.id} href={`/store/cat/${item.category}`}>
                           <CatProduct  {...item} />
                        </Link>
                    )
                })}
            </section>
        </Container>
    </div>
  )
}

export default Store