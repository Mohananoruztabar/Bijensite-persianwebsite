import CatItems from '@/component/CatItems'
import Container from '@/component/Container'
import Link from 'next/link'
import React from 'react'
import dataApi from '@/dataBase/db.json'

async function GetCategory(props) {

    const { slug } = await props.params

    // const result = await fetch(`http://localhost:8000/products?category=${slug}`)
    // const data = await result.json()

    const data = dataApi.products?.find(item => item.category == slug) || null

    if (!data) {
      return <div>دسته‌ای پیدا نشد</div>
    }

    
    const lastItem = data.submenus?.at(-1) 
    const submenus = data.submenus?.slice(0, -1) || []
    

  return (
    <div>
        <div className='w-full bg-cover h-[200px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] shadow-xl' style={{backgroundImage : 'url("/2بنر-سایت-1-e1732708139441.jpg")'}}></div>
        <Container>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-10 mt-10'>
          {submenus.map((sub , i) => (
            <Link key={i} href={`/store/product/${sub.id}`}>
              <CatItems {...sub} />
            </Link>
          ))}
        </div>
        <div className="mt-15 text-xl text-gray-600 leading-relaxed">
          <p>{lastItem.parag1}</p>
          <p className='mt-2'>{lastItem.parag2}</p>
        </div>
        </Container>
    </div>
  )
}

export default GetCategory