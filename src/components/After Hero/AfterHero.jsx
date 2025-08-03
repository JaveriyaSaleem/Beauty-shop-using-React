import React from 'react'
import '../hero/hero.css'
import Card from './Card.jsx'
import good2 from '../../assets/Images/good2.png';
import fullRange from '../../assets/Images/full range.png';
import Vitamin from '../../assets/Images/vitamin c group.png';
import Iron from '../../assets/Images/iron.png';
const AfterHero = () => {
  return (
    <div className='mt-10 md:mt-60 flex flex-col items-center Jost-reg px-1'>
      <h1 className='text-[30px] md:text-[40px] text-center'>GOOD4ME DEAL</h1>
      <p className='text-[14px] sm:text-[16px] md:text-[18px] text-center px-3 py-4'>Pick your beauty products today. 50% OFF on the most popular GOOD4ME. Order all classy products today!</p>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-3 sm:p-9'>
        <Card src={good2} name={"MULTI-VITAMIN: EVERYDAY WELLNESS"}/>
        <Card src={fullRange} name={"FULL RANGE VALUE PACK (SAVE 33%)"}/>
        <Card src={Vitamin} name={"VITAMIN C: IMMUNITY SUPPORT"}/>
        <Card src={Iron} name={"IRON: ENERGY SUPPORT"}/>
      </div>

    </div>
  )
}

export default AfterHero
