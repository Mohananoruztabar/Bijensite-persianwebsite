import React from 'react'
import Container from '@/component/Container'
import FoodProducts from '@/component/FoodProducts'
import LastCook from '@/component/LastCook'
import LatestNews from '@/component/LatestNews'
import dataApi from '@/dataBase/db.json'

async function GetFood(props) {

    const {food} = await props.params

    // const result = await fetch(`http://localhost:8000/foodstore/${food}`)
    // const data = await result.json()

    // const para = await fetch('http://localhost:8000/news')
    // const news = await para.json()

    // const respon = await fetch('http://localhost:8000/cooking')
    // const cook = await respon.json()

    const cook = dataApi.cooking || []
    const news = dataApi.news || []
    const data = dataApi.foodstore?.find(item => item.id == food) || []

  return (
    <div>
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <section className='grid col-span-2 '>
                    <FoodProducts {...data} />
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

export default GetFood