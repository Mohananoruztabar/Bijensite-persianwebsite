import Container from '@/component/Container'
import NewsProduct from '@/component/NewsProduct'
import React from 'react'
import LastCook from '@/component/LastCook'
import LatestNews from '@/component/LatestNews'
import dataApi from '@/dataBase/db.json'

async function GetItems(props) {

    const {info} = await props.params
    

    // const result = await fetch(`http://localhost:8000/news/${info}`)
    // const data = await result.json()

    // const para = await fetch('http://localhost:8000/news')
    // const news = await para.json()

    // const respon = await fetch('http://localhost:8000/cooking')
    // const cook = await respon.json()

    const cook = dataApi.cooking || []
    const news = dataApi.news || []
    const data = dataApi.news?.find(item => item.id == info) || null
    
  return (
    <div>
        <Container>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <section className='grid col-span-2 '>
                    <NewsProduct {...data} />
                </section>
                <div className='grid col-span-1 h-auto items-start mt-8'>
                    <div className=''>
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

export default GetItems