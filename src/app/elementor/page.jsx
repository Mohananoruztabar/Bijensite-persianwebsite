import Container from '@/component/Container'
import ItemElementor from '@/component/itemElementor'
import Link from 'next/link'
import React from 'react'
import dataApi from "@/dataBase/db.json"

function Elementor() {

    // const result = await fetch('http://localhost:8000/elementor')
    // const data = await result.json()

    const data = dataApi.elementor || []


  return (
    <div>
        <Container>
            <button className='bg-red-700 text-xl text-white px-8 py-4 rounded-2xl mt-15 '>  
                <Link href="https://tournido.ir/360/1401/teh/bijan/">نمایشگاه آگروفود 2023</Link>
            </button>
            <section className='mt-15'>
                <figure className='overflow-hidden'>
                    <img className='h-[300px] w-full hover:scale-105 duration-500 ease-in-out object-cover bg-center' src="/1نمایشگاه-آگروفود-scaled.jpg" alt="" />
                </figure>
                <h3 className='text-gray-700 font-bold text-3xl text-center mt-15'>بیژن کانون توجه در اگروفود ۱۴۰۴</h3>
            </section>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-15 gap-4'>
                {data.map((item)=> {
                    return(
                        <Link key={item.id} href={`/elementor/${item.id}`}>
                            <ItemElementor {...item} />
                        </Link>
                    )
                })}
            </div>
        </Container>
    </div>
  )
}

export default Elementor