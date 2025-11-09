import React from 'react'
import Container from './Container'

function CookProducts(props) {
  return (
    <div className='mt-6 md:mt-10'>
        <Container>
            <div className='shadow-2xl rounded-2xl bg-white p-4 md:p-6 lg:p-8'>
                <figure className='mb-4 md:mb-6'>
                    <img className='rounded-2xl w-full' src={props.img} alt="" />
                </figure>
                <h4 className='text-gray-700 font-bold text-xl md:text-2xl lg:text-3xl mt-4 md:mt-6 leading-relaxed whitespace-pre-line'>{props.name}</h4>
                <p className='mt-5 text-gray-700 text-sm leading-relaxed whitespace-pre-line'>{props.description1}</p>
                <p className='mt-5 text-gray-700 text-sm leading-relaxed whitespace-pre-line'>{props.description2}</p>
                {
                    props.description3 && (
                        <>
                            <p className='mt-5 text-gray-700 text-sm leading-relaxed whitespace-pre-line'>{props.description3}</p>
                            <p className='mt-5 text-gray-700 text-sm leading-relaxed whitespace-pre-line'>{props.description4}</p>
                            <p className='mt-5 text-gray-700 text-sm leading-relaxed'>{props.description5}</p>
                        </>
                    )
                }
            </div>
        </Container>
    </div>
  )
}

export default CookProducts