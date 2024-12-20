import React from 'react'
import weDonate1 from '../../assets/Images/we donate one.png'
import weDonate2 from '../../assets/Images/we donate 2.png'
import weDonate3 from '../../assets/Images/we donate 3.png'
import Card from './Card.jsx'

const LatestNews = () => {
  return (
<div className='mt-10 md:mt-28 flex flex-col items-center Jost-reg px-1'>
    <h1 className='text-[30px] md:text-[40px] text-center font-medium uppercase'>Latest News</h1>

    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 p-4 md:p-20'>
        <Card src={weDonate1}/>
        <Card src={weDonate2}/>
        <Card src={weDonate3}/>

    </div>

  </div>
  )
}

export default LatestNews
