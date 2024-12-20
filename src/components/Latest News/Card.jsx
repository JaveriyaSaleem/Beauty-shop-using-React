import React from 'react'
import '../hero/hero.css'

const Card = (props) => {
  return (
      <div className='flex flex-col gap-2'><div className='overflow-hidden'><img src={props.src} alt="" className='hover:scale-105 transition duration-300 ease-in-out'/></div>
      <div className='flex flex-col items-center gap-2'>
      <p className='text-[14px] text-[#F8783E]'>August 26, 2020</p>
      <h1 className='text-[20px] font-medium text-center'>WE DONATE ONE WEEKS SUPPLY</h1>
      <p className='text-[13px] text-[#9DA0B9] text-center'>We care about New Zealand children, and we want to support our community by providing our children in need with necessary vitamins to improve....</p>
      <button className='px-4 py-2 bg-[#F6623E] text-white text-[14px]'>READ MORE</button>
      </div>
      </div>
      
  )
}

export default Card;
