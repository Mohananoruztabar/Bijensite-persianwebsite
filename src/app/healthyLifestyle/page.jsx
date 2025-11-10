import Container from '@/component/Container'
import React from 'react'
import Link from 'next/link'
import HealthyItems from '@/component/HealthyItems'
import LastHealth from '@/component/LastHealth'
import LastCook from '@/component/LastCook'
import dataApi from '@/dataBase/db.json'

function HealthyLifestyle() {

  // const result = await fetch('http://localhost:8000/healthy')
  // const data = await result.json()

  // const respon = await fetch('http://localhost:8000/cooking')
  // const cook = await respon.json()

  const cook = dataApi.cooking || []
  const data = dataApi.healthy || []
  return (
    <div>
      <div className='bg-cover bg-center shadow-xl h-[280px] relative' style={{backgroundColor: '#C9161D'}}>
        <span className='bg-black/55 rounded-md px-4 py-2 absolute bottom-1/3 right-1/12 text-4xl text-white'> مجله اینترنتی بیژن</span>
        <div className='bg-black/55 rounded-md px-4 py-2 absolute bottom-4 right-1/12  text-white'>
          <Link className='hover:text-redd' href="/"><i className="ri-arrow-right-circle-line"></i>  Home</Link>
          <span className='mr-2'>سبک زندگی سالم</span>
        </div>
      </div>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-10'>
          <div className='grid col-span-2'>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {data.map((item) => {
                return(
                  <Link key={item.id} href={`/healthyLifestyle/${item.id}`}>
                    <HealthyItems {...item} />
                  </Link>
                )
              })}
            </section>
          </div>
          <div>
            <div>
              <LastHealth healthy={data} />
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

export default HealthyLifestyle