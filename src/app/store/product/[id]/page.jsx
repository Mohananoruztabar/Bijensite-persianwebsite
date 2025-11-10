import Container from '@/component/Container'
import ProductItems from '@/component/ProductItems'
import Link from 'next/link'
import React from 'react'
import dataApi from '@/dataBase/db.json'

async function GetProduct(props) {

    const { id } = await props.params 

    // const result = await fetch("http://localhost:8000/products")
    // const allCategories = await result.json()
    const allCategories = dataApi.products || []

    let product = null
    let currentCategory = null
    for (const category of allCategories) {
        product = category.submenus?.find(sub => sub.id == id)
        if (product){
            currentCategory = category
            break
        }
        
    }
    if (!product) {
        return (
            <Container>
                <div className='text-center py-20'>
                    <h2 className='text-2xl text-gray-600'>محصول یافت نشد</h2>
                </div>
            </Container>
        )
    }
    
    
    const featuredProductsn = currentCategory ? currentCategory.submenus.filter(sub => sub.id != id).slice(0, 4) : []
    
  return (
    <div>
        
        <Container>
            <ProductItems {...product} />
            <div className='mt-10 shadow-2xl rounded-2xl '>
                <h3 className='text-2xl text-gray-700 pt-2 px-10 '>محصولات مرتبط</h3>
                <span className='border-b border-trans block mt-4 mx-5'></span>
                <div className='grid grid-cols-2 md:grid-cols-4 '>
                    {featuredProductsn.map((item , i) => {
                       return(
                            <Link key={i} href={`/store/product/${item.id}`}>
                                <div className='mt-10 hover:bg-trans m-3 rounded-md' key={item.id}>
                                    <figure className='mx-4'>
                                       <img className='hover:bg-trans' src={item.img} alt="" />
                                    </figure>
                                    <h4 className='text-center text-gray-700 text-xl'>{item.name}</h4>
                                </div> 
                            </Link>
                         )
                    })}
                </div>
            </div>
        </Container>
    
    </div>
  )
}

export default GetProduct