import React from 'react'

function MagzinItems() {

    const magzing = [
        { img : "/رو-1112x1536.jpg" , name : "شماره 12"} ,
        { img : "/jeld13-1144x1536.jpg" , name : "شماره 13"} ,
        { img : "/jeld14-1163x1536.jpg" , name : "شماره 14"} ,
        { img : "/bijan-mag-no7.jpg" , name : "شماره 7"} ,
        { img : "/شماره-۵.jpg" , name : "شماره 5"} ,
        { img : "/مجله-مرداد99-1113x1536.jpg" , name : "شماره 3"} ,
    ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-15 '>
        {magzing.map((mag)=> {
            return (
                <div className='relative w-full h-full md:w-[350px] md:h-[460px] group' key={mag.name}>
                    <img className='rounded-2xl w-full h-full md:w-[350px] md:h-[460px] object-cover' src={mag.img} alt="" />
                    <div className='w-full h-full rounded-2xl absolute bg-redd opacity-40 inset-0 bottom-0 left-0 hidden group-hover:flex'></div>
                    <h3 className='absolute bottom-20 left-1/2 z-50 -translate-x-1/2 text-2xl text-white font-bold hidden group-hover:flex'>{mag.name}</h3>
                </div>
            )
        })}
    </div>
  )
}

export default MagzinItems