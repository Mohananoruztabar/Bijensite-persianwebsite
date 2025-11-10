import React from 'react'

function ItemElementor(props) {
  return (
    <div>
        <div className=''>
            <figure className='overflow-hidden'>
                <img className='object-cover hover:scale-105 duration-500 ease-in-out h-[250px] w-full bg-cover bg-center' src={props.img} alt="" />
            </figure>
            <h3 className='text-2xl mt-4 text-gray-700'>{props.name}</h3>
        </div>
    </div>
  )
}

export default ItemElementor