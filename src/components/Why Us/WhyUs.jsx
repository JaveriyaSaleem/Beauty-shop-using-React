import React from 'react'
import worldShipping from '../../assets/Images/world shipping.png'
import dayGuarantee from '../../assets/Images/dollar sign.png'
import securedPayment from '../../assets/Images/secured payment.png'

const WhyUs = () => {
  return (
    <div className='flex flex-row md:flex-row items-center justify-center w-100 py-5 sm:py-24 '>
      <div><img src={worldShipping} alt="" /></div>
      <div><img src={dayGuarantee} alt="" /></div>
      <div><img src={securedPayment} alt="" /></div>
    </div>
  )
}

export default WhyUs
