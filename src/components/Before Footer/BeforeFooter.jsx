import '../hero/hero.css'
import React from 'react'
import good1 from '../../assets/Images/good1.png'
import good2 from '../../assets/Images/good2.png'
import good3 from '../../assets/Images/good3.png'
import good4 from '../../assets/Images/good4.png'
import good5 from '../../assets/Images/good5.png'
import good6 from '../../assets/Images/good6.png'

const BeforeFooter = () => {
  return (
    <div>
      <h1 className='text-[40px] font-medium text-center pt-16 pb-10'>#GOOD4ME</h1>
      <div className='grid grid-cols-1  sm:grid-cols-6 md:gap-2 mx-2 '>
        <div className='flex items-center justify-center'><img className='sm:h-[10rem] md:h-[15rem] w-72 p-2' src={good1} alt="" /></div>
        <div className='flex items-center justify-center'><img className='sm:h-[10rem] md:h-[15rem] w-72 p-2' src={good2} alt="" /></div>
        <div className='flex items-center justify-center'><img className='sm:h-[10rem] md:h-[15rem] w-72 p-2' src={good3} alt="" /></div>
        <div className='flex items-center justify-center'><img className='sm:h-[10rem] md:h-[15rem] w-72 p-2' src={good4} alt="" /></div>
        <div className='flex items-center justify-center'><img className='sm:h-[10rem] md:h-[15rem] w-72 p-2' src={good5} alt="" /></div>
        <div className='flex items-center justify-center'><img className='sm:h-[10rem] md:h-[15rem] w-72 p-2' src={good6} alt="" /></div>
      </div>
    </div>
  )
}

export default BeforeFooter
