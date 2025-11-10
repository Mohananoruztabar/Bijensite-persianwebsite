import React from 'react'
import Container from './Container'

function NewsProduct(props) {
  return (
    <div className='mt-10'>
        <Container>
            <div className='shadow-2xl rounded-2xl bg-white p-4'>
                <figure className='ml-10'>
                    <img className='rounded-2xl w-full object-cover' src={props.img} alt="" />
                </figure>
                <h4 className='text-gray-700 text-xl lg:text-2xl mt-10'>{props.name}</h4>
                <p className='mt-5 text-sm md:text-md text-gray-700'>{props.description1}</p>
                <p className='mt-5 text-sm md:text-md text-gray-700'>{props.description2}</p>
                {
                    props.description3 && (
                        <>
                            <p className='mt-5 text-sm md:text-md text-gray-700'>{props.description3}</p>
                            <p className='mt-5 text-sm md:text-md text-gray-700'>{props.description4}</p>
                        </>
                    )
                }
            </div>
        </Container>
    </div>
  )
}

export default NewsProduct