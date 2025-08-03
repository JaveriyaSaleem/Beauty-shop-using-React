import '../hero/hero.css'
import React from 'react'
import good1 from '../../assets/Images/good1.png'
import good2 from '../../assets/Images/good2.png'
import good3 from '../../assets/Images/good3.png'
import good4 from '../../assets/Images/good4.png'
import good5 from '../../assets/Images/good5.png'
import good6 from '../../assets/Images/good6.png'
import '../../index.css'

const BeforeFooter = () => {
  const brandImages = [good1, good2, good3, good4, good5,good6];
  return (
     <div className="relative overflow-hidden py-5 px-10">
      <div className="flex gap-2 h-[100px] sm:h-[230px] animate-marquee w-max">
        {brandImages.concat(brandImages).map((img, index) => (
          <img key={index} src={img} alt={`brand-${index}`} className=" object-contain" />
        ))}
      </div>
    </div>
    
  )
}

export default BeforeFooter
