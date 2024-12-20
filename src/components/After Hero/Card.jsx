import React from 'react'
import '../hero/hero.css'
import good2 from '../../assets/Images/good2.png';

const Card = (props) => {
  return (
    <div className=''>
      <div className=''><div className='overflow-hidden'><img src={props.src} alt="" className='hover:scale-105 transition duration-300 ease-in-out'/></div><h1 className='text-center font-medium pt-1'>{props.name}</h1></div>
      
    </div>
  )
}

export default Card
