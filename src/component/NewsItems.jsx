import React from 'react'

function NewsItems(props) {
  return (
    <div className='shadow-2xl rounded-xl w-full h-full md:w-[380px] md:h-[450px] '>
        <figure>
            <img className='rounded-md w-full' src={props.img} alt="" />
        </figure>
        <div className='m-4 md:m-5 flex-1 flex flex-col'>
            <h3 className='text-2xl text-gray-700'>{props.name}</h3>
            <p className='mt-4 text-gray-700 line-clamp-3 '>{props.title}</p>
        </div>
    </div>
  )
}

export default NewsItems