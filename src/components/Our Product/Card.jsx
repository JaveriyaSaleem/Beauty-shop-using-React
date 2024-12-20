import React from 'react'
import '../hero/hero.css'

const Card = (props) => {
  return (
      <div className='flex flex-col gap-2'><div className='h-[18rem]' style={{backgroundImage: `url(${props.background})`,paddingLeft:`${props.paddingL}`,paddingRight:`${props.paddingR}`,paddingTop: `${props.paddingTop}`}}><img src={props.src} alt="" /></div>
      <div className='flex flex-col items-center'><h1 className='text-center font-medium pt-1 text-[12px]'>{props.name}</h1>
      <p className='text-[12px] flex gap-2'><span className='text-[#F8783E]'>$39.95 NZD</span><span className='text-[#bab8b8] line-through'>$199.75 NZD</span></p></div>
      </div>
      
  )
}

export default Card
