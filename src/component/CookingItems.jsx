import React from 'react'

function CookingItems(props) {
  return (
    <div>
        <div>
           <div className='shadow-2xl rounded-2xl w-[380px] h-[450px] '>
                <figure>
                  <img className='rounded-xl h-[250px] w-full' src={props.img} alt="" />
                </figure>
                <div className='m-5'>
                   <h3 className='text-2xl text-gray-700'>{props.name}</h3>
                   <p className='mt-4 text-gray-700 line-clamp-3 '>{props.title}</p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default CookingItems