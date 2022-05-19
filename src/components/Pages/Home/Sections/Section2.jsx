import React from 'react'
import Button from '../../../button/Button'
import Home2 from '../../../../assets/popular4.jpg'

const Section2 = () => {
  return (
    <section className="grid grid-cols-section3 mt-[8rem] px-4 md:px-6">
      {/* IMAGE */}
      <div className="section_2-img">
        <img src={Home2} alt="building2" className='object-cover rounded-[20px] h-[850px] w-[400px] shadow-md md:w-full md:h-[700px] ' />
      </div>

      {/* SLOGAN */}
      <div className="section_2_slogan">
        <h1 className='mt-4 mb-2 w-[95%] text-[2rem] md:text-[3rem] md:w-[80%] md:mb-4 text-default font-bold'>
          Whether You're Buying, Selling Or Renting, We Can Help You Move
          Forward
        </h1>
      </div>

      {/* SELECTION */}
      <div className="selection">
        {/* BUY */}
        <div className="flex flex-col">
          <h3 className='mb-2 text-default font-semibold'>Buy a home</h3>
          <p className='text-[hsl(228,68%,62%)] mb-[0.8rem] text-[0.8rem]'>
            Find your place with and immersive photo experience and the most
            listings, including things you won't find anywhere else
          </p>
          <Button text={"Search Houses"} path="buy" />
        </div>

        {/* Rent */}
        <div className="flex flex-col">
          <h3 className='mb-2 text-default font-semibold'>Rent a home</h3>
          <p className='text-[hsl(228,68%,62%)] mb-[0.8rem] text-[0.8rem]'>
            We're creating a seasmless online expirience - from shopping on the
            largest rental network , to applying , to paying rent.
          </p>
          <Button text={"See Your Options"} path="rent" />
        </div>

        {/* Sell */}
        <div className="flex flex-col">
          <h3 className='mb-2 text-default font-semibold'>Sell a home</h3>
          <p className='text-[hsl(228,68%,62%)] mb-[0.8rem] text-[0.8rem]'>
            Wether you get a cash offer throught Real Offers or choose to sell
            traditionally, we can help you navigate a successful sale.
          </p>
          <Button text={"Use Filters"} path="search" />
        </div>
      </div>
    </section>
  )
}

export default Section2