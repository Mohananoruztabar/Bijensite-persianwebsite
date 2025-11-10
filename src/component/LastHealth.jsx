"use client"
import React, { useState } from 'react'
import Link from 'next/link'

function LastHealth({healthy}) {

    const [data , setData] = useState(false)

    const ShowItem = data ? healthy : healthy.slice(0,4)
  return (
    <div>
    <div className="rounded-2xl shadow-2xl bg-white mx-5 h-auto sm:mx-5">
      <h4 className="text-xl lg:text-2xl text-gray-700 m-4">سبک سالم غذایی </h4>
      <span className="border-b border-trans block mt-4 mx-3"></span>

      <section className="mt-5">
        {ShowItem.map((item) => (
          <Link key={item.id} href={`/healthyLifestyle/${item.id}`}>
            <div className="flex justify-between hover:bg-gray-100 rounded-xl p-2">
              <h4 className="text-gray-700 text-sm lg:text-md m-2 w-[70%]">{item.name}</h4>
              <figure className="m-2">
                <img
                  className="w-[100px] rounded-xl"
                  src={item.img}
                  alt={item.name}
                />
              </figure>
            </div>
          </Link>
        ))}
      </section>

      <div className="flex justify-center my-10 ">
        <button
          onClick={() => setData(!data)}
          className="bg-BijanRed text-white px-3 py-1 lg:px-8 lg:py-2 rounded-xl"
        >
          {data ? "بستن" : "بیشتر بخوانید"}
        </button>
      </div>
    </div>
    </div>
  )
}

export default LastHealth