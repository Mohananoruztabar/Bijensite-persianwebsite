import React from 'react'
import Link from 'next/link'
import MagzinItems from '@/component/MagzinItems'
import Container from '@/component/Container'

function Magzin() {
  return (
    <div>
        <div className='bg-cover bg-center shadow-xl h-[280px] relative' style={{backgroundColor: '#C9161D'}}>
            <span className='bg-black/55 rounded-md px-4 py-2 absolute bottom-1/3 right-1/12 text-4xl text-white'> مجله بیژن</span>
            <div className='bg-black/55 rounded-md px-4 py-2 absolute bottom-4 right-1/12  text-white'>
              <Link className='hover:text-redd' href="/"><i className="ri-arrow-right-circle-line"></i>  Home</Link>
              <span className='mr-2'>مجله بیژن</span>
            </div>
        </div>
       <Container>
            <div>
              <MagzinItems />
            </div>   
       </Container>
    </div>
  )
}

export default Magzin