import React from 'react'
import '../hero/hero.css'
import Card from './Card'
import ourProduct1 from '../../assets/Images/multivitamin our products.png'
import ourProduct2 from '../../assets/Images/vitamin c our products.png'
import ourProduct3 from '../../assets/Images/multivitamin our products 2.png'
import ourProduct4 from '../../assets/Images/apple cider our products.png'
import background from '../../assets/Images/bg of multivitamin.png'


const OurProduct = () => {
  return (
    <div className='mt-10 md:mt-28 flex flex-col items-center Jost-reg px-1'>
    <h1 className='text-[30px] md:text-[40px] text-center font-medium'>Our Product Are</h1>
    <div className='grid grid-cols-1 md:grid-cols-4 gap-3 p-9'>
      <Card src={ourProduct1} name={"MULTI-VITAMIN (3 MONTH SUPPLY)"}/>
      <Card src={ourProduct2} name={"VITAMIN C: IMMUNITY SUPPORT"} background={background} paddingL={"65px"} paddingR={"65px"} paddingTop={'20px'}/>

      <Card src={ourProduct3} name={"MULTI-VITAMIN (3 MONTH SUPPLY)"} background={background} paddingL={"20px"} paddingR={"20px"} paddingTop={'20px'}/>

      <Card src={ourProduct4} name={"APPLE CIDER VINEGAR (3 MONTH SUPPLY)"}/>
    </div>

  </div>
  )
}

export default OurProduct
