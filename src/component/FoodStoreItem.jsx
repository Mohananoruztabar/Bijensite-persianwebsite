import React from 'react'

function FoodStoreItem(props) {
  return (
    <div>
      <div className='shadow-2xl rounded-2xl w-full lg:w-[380px] h-[450px] '>
        <figure>
            <img className='rounded-xl h-[250px] w-full' src={props.img} alt="" />
        </figure>
        <div className='m-5'>
          <h3 className='text-xl font-bold lg:text-2xl text-gray-700'>{props.name}</h3>
          <p className='text-sm md:text-xl mt-4 text-gray-700 line-clamp-3 '>{props.title}</p>
        </div>
      </div>
    </div>
  )
}

export default FoodStoreItem