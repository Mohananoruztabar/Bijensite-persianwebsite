import React from 'react'

function CatItems({ img, name }) {
  return (
    <div className='flex flex-col justify-center items-center mt-10 '>
      <figure>
        <img className='w-[150px] md:w-[300px] md:h-[300px] object-cover' src={img} alt={name} />
      </figure>
      <h4 className='text-center text-xl md:text-2xl text-gray-600 mt-3'>{name}</h4>
    </div>
    
  )
}

export default CatItems
