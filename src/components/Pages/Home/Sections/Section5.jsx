import React from 'react'
import Home5 from '../../../../assets/value.jpg'
import Home6 from '../../../../assets/popular3.jpg'
import Button from '../../../button/Button'
const Section5 = () => {
  return (
    <section className=" mt-10 relative flex justify-end overflow-hidden px-4 md:px-6">
      <div className="absolute bg-white1 h-max p-8 section5 w-[50vw] md:top-[5rem] md:left-8 rounded-md shadow-md">
        <h1 className='text-[1.8rem] text-default font-bold mb-4 md:text-[2.2rem] text-center md:text-left '>Your Best Partner To find New House</h1>
        <Button text="Get Started" path="search" />
      </div>
      <div className="relative -z-20 mr-[1.5rem] flex items-end ">
        <img src={Home5} alt="building" className='w-[350px] lg:w-[500px] h-[400px] object-cover rounded-md' />
      </div>
      <div lassName="relative -z-20 flex items-end ">
        <img src={Home6} alt="building" className='w-[40vw] h-[400px] object-cover rounded-md' />
      </div>
    </section>
  )
}

export default Section5