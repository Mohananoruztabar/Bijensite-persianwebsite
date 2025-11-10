import Container from '@/component/Container'
import LastCook from '@/component/LastCook'
import LatestNews from '@/component/LatestNews'
import React from 'react'
import dataApi from '@/dataBase/db.json'

async function InfoElement(props) {

    const {info} = await props.params

    // const result = await fetch(`http://localhost:8000/elementor/${info}`)
    // const data = await result.json()

    // const para = await fetch('http://localhost:8000/news')
    // const news = await para.json()

    // const respon = await fetch('http://localhost:8000/cooking')
    // const cook = await respon.json()
    const cook = dataApi.cooking || []
    const news = dataApi.news || []
    const data = dataApi.elementor?.find(item => item.id == info) || []

  return (
    <div>
        <Container>
            <section className='grid grid-cols-1 md:grid-cols-3 mt-20 gap-5'>
                <div className='grid col-span-2 shadow-xl rounded-3xl p-8'>
                    <figure className='w-full'>
                        <img className='rounded-3xl object-cover' src={data.img} alt="" />
                    </figure>
                    <h3 className='text-2xl lg:text-3xl text-gray-700 mt-8 font-bold'>{data.name}</h3>
                    <p className='text-sm lg:text-xl mt-10 mb-15 leading-relaxed'>{data.description}</p>
                </div>
                <div className='grid col-span-1 h-auto items-start'>
                    <div className=''>
                        <LatestNews news={news} />
                    </div>
                    <div>
                        <LastCook cook={cook} />
                    </div>
                </div>
            </section>
        </Container>
    </div>
  )
}

export default InfoElement