"use client"
import React from 'react'
import Container from './Container'
import ReactPaginate from 'react-paginate'
import { useRouter, useSearchParams } from 'next/navigation'

function Paginate({pageCount}) {

    const searchparams = useSearchParams()
    const router = useRouter()

    const handlePageClick = (e) =>{
      const selet = e.selected + 1
        
      const current = new URLSearchParams(searchparams.toString())
      current.set("page" , selet.toString())
      current.set("per-page" , "4")

      router.push(`/news?${current.toString()}`)
        
    }
  return (
    <div>
      <Container>
        <ReactPaginate
               
         onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          containerClassName="flex gap-2 p-2 rounded-lg justify-center mt-15 gap-5 cursor-pointer "
          pageClassName="border rounded-xl px-5 py-2 border-trans hover:bg-red-100 hover:text-white shadow-2xl"
          activeClassName="bg-redd text-white"
          nextLabel={null}     
          previousLabel={null}
          disabledClassName="opacity-50"
        /> 
      </Container>
    </div>
  )
}

export default Paginate