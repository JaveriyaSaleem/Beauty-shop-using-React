import React from 'react'
import '../hero/hero.css'
import takeControl1 from '../../assets/Images/take control pic 1from3.png'
import takeControl2 from '../../assets/Images/take control pic 2from3.png'
import takeControl3 from '../../assets/Images/take control pic 3.png'

const YourHealth = () => {
  return (
    <main className='bg-[#FFF8F6] flex md:flex-row flex-col-reverse gap-3'>
        {/* col 1  */}
    <div className='Jost-reg flex flex-col gap-2  md:gap-5 md:mt-12 items-center pb-3'>
      <h1 className='text-[40px] font-medium md:block hidden md:pb-5 text-center'>TAKE CONTROL OF YOUR HEALTH</h1>
      <div className='flex flex-col gap-2 text-[12px] md:text-[15px]  md:pb-5 text-center md:text-left'>
        <p className=''>The Good4Me range has been formulated based on scientific & traditional evidence.</p>
        <p className=''>Our vitamins are here and ready to boost your mood, immunity and overall well-being!</p>
        <p className=''>Made in New Zealand from local and imported ingredients.</p>
      </div>
      <div><button className='border-[1px] border-[#F6623E] text-[12px] md:text-[17px] rounded-lg py-2 px-3 hover:border-none hover:text-white hover:bg-[#F6623E]'>BROWSE OUR RANGE</button></div>
    </div>
    {/* col-2  */}
    <div className=''>
        <div className='block md:hidden py-4 text-center'>
    <h1 className='text-[30px] font-medium'>TAKE CONTROL OF YOUR HEALTH</h1> </div>
    <div className='flex gap-2'>
        <div className='flex flex-col justify-between px-2 overflow-hidden'><img src={takeControl1} alt="" /><img src={takeControl2} alt="" /></div>
        <div><img src={takeControl3} alt="" /></div>
    </div>
    </div>
    </main>
  )
}

export default YourHealth
