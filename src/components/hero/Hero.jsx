import React from 'react'
import editedHero from './editedhero.png';
import './hero.css'

const Hero = () => {
  return (
    <>
      <div className='w-100 relative hero-bg pb-10'>
        <div className='z-10 absolute hidden sm:block'>
        <img src={editedHero} />
        </div>
        <div className='grid grid-col-1 sm:grid-cols-2'>
          {/* 1st col  */}
          <div className=''></div>
          {/* 2nd col  */}
        <div className='z-20 flex flex-col items-center pt-10 gap-3'>
        <h1 className='text-[28px] Jost-reg text-[#F6623E] font-medium text-center'>Good4Me</h1>
        <h1 className='Jost-reg text-[30px] sm:text-[40px] font-medium text-center'>Apple Cider Vinegar</h1>
        <div className='text-center md:w-8/12'><p className='text-[14px] sm:text-[18px] Jost-reg font-normal text-[#21252E]'>Good4Me Apple Cider Vinegar gummies are the newest addition to your morning health and well-being regime.</p></div>
        <button className='hover:scale-105 transition bg-[#F6623E] text-white rounded-lg py-2 px-3 Jost-reg text-[12px] sm:text-[16px]'>SHOP NOW</button>
        </div>
        </div>

      </div>
    </>
  )
}

export default Hero
