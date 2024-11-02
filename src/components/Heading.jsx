import React from 'react'

export default function Heading({title, subtitle}) {
  return (
    <div>
         <div className='flex flex-col w-full justify-center items-center my-12'>
              {/* reuseable component */}
            <h1 className='text-xl md:text-2xl lg:text-4xl  mb-4'>{title}</h1>
            <p className='text-xs md:text-2xl lg:text-3xl font-thin'>{subtitle}</p>
         </div>
    </div>
  )
}
