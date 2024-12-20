import React from 'react'

const Footer = () => {
  return (
    <section className='bg-[#FFF8F6] p-10 mt-10 grid md:grid-cols-3 gap-20 grid-cols-1'>
        <div className='flex flex-col items-center gap-2'>
            <h1 className='fontroman text-[20px] font-medium'>GOOD4ME.</h1>
            <p className='text-[16px] Jost-reg text-[#5e5f66] font-light text-center'>Good health is important, so all of our products have been carefully designed to bring out the best in you.</p>
        </div>
        <div className='flex flex-col Jost-reg gap-2 items-center'>
            <h1 className='text-[20px] font-medium'>Keep In Touch</h1>
            <p className='text-center text-[#5e5f66] font-light text-[16px]'>Subscribe to receive new product updates, be the first to know about sales, and more.</p>
            <form action="" className='md:w-80 flex outline-none border-b-black border-t-transparent border-x-transparent  border-2'>
                <input type="email" placeholder='Enter Your Email' className='md:w-80 font-medium text-[16px] bg-transparent text-[#9FA8B3] outline-none '/>
                <button className='text-[#F7623E] font-medium hover:scale-[1.15] transition duration-150'>Subscribe</button>
                </form>
        </div>
        <div className='flex flex-col Jost-reg gap-2 text-[20px] items-center text-center md:text-start'>
            <h1 className='text-[20px] font-medium'>More Info</h1>
            <ul className='text-[#5e5f66] font-light text-[18px]'>
                <li className='cursor-pointer'>Shipping & Delivery</li>
                <li className='cursor-pointer'>Refund Policy</li>
                <li className='cursor-pointer'>Partner Program</li>
                <li className='cursor-pointer'>Wholesale Portal</li>
                <li className='cursor-pointer'>You Buy, We Donate</li>
                <li className='cursor-pointer'>Privacy Policy</li>
                <li className='cursor-pointer'>Terms & Conditions</li>
            </ul>
            </div>
      
    </section>
  )
}

export default Footer
