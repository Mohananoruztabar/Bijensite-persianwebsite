import React from 'react'
import Container from './Container'

function FoodProducts(props) {
  return (
    <div className='mt-10'>
        <Container>
            <div className='shadow-2xl rounded-2xl bg-white p-4'>
                <figure className='ml-10'>
                    <img className='rounded-2xl w-full object-cover' src={props.img} alt="" />
                </figure>
                <h4 className='text-gray-700 font-bold text-xl lg:text-2xl mt-10 leading-relaxed whitespace-pre-line'>{props.name}</h4>
                <p className='mt-5 text-gray-700 text-sm md:text-md leading-relaxed whitespace-pre-line'>{props.description1}</p>
                <p className='mt-5 text-gray-700 text-sm md:text-md leading-relaxed whitespace-pre-line'>{props.description2}</p>
                {
                    props.description3 && (
                        <>
                            <p className='mt-5 text-sm md:text-md text-gray-700 leading-relaxed'>{props.description3}</p>
                            <p className='mt-5 text-sm md:text-md text-gray-700 leading-relaxed'>{props.description4}</p>
                            <p className='mt-5 text-sm md:text-md text-gray-700 leading-relaxed'>{props.description5}</p>
                        </>
                    )
                }
            </div>
        </Container>
    </div>
  )
}

export default FoodProducts