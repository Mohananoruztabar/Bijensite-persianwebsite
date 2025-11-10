import React from 'react'

function CatProduct(props) {
  return (
    <div className=''>
        <figure>
            <img src={props.img} alt="" />
        </figure>
        <h4 className='text-center text-xl md:text-2xl text-gray-600'>{props.name}</h4>
    </div>
  )
}

export default CatProduct