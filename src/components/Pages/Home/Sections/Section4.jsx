import React from 'react'
import Home3 from '../../../../assets/popular5.jpg'
const Section4 = () => {
  return (
    <section className="mt-20 overflow-hidden px-4 md:px-6
    after:content-['*'] -z-10 after:absolute after:top-0 after:left-0  after:w-[100vw] after:h-[400px] ">
      {/* SECTION TITLE */}
      <div className="relative mb-8 pl-[10vw] pt-[3rem] md:pt-[6rem] ">
        <h1 className='text-default w-full sm:w-[80%] md:w-full
        text-[2rem] md:text-[2.5rem] font-bold'>Help People To Getting Their Dream House For More Than 17 Years</h1>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-section4 md:pl-[10vw] relative ">
        {/* IMAGE CONTAINER */}
        <div className="image_container">
          <img className='h-[580px] md:w-[500] lg:h-[400px] lg:w-[800px] object-cover rounded-md' src={Home3} alt="Home3" />
        </div>
        {/* INFO */}
        <div className="info rounded-md">
          <p className='text-default text-[0.9rem] mb-8 md:mb-4 font-bold'>
            Search and find your dream house at affordable prices, but with the
            best quality. Only available in Real!
          </p>

          <div className="flex justify-center item-center sm:justify-between 
          flex-col text-center gap-8">
            {/* ROW1 */}
            <div className="flex flex-col gap-8 mb-4">
              {/* FACT1 */}
              <div className="fact">
                <h2 className='text-second text-[1.3rem] font-bold'>10.234</h2>
                <h3 className='text-default text-[0.8rem] font-[800] whitespace-nowrap '>Completed Houses</h3>
              </div>
              {/* FACT2 */}
              <div>
                <h2 className='text-second text-[1.3rem] font-bold'>11.234</h2>
                <h3 className='text-default text-[0.8rem] font-[800] whitespace-nowrap '>Rented Houses </h3>
              </div>
            </div>

            {/* ROW2 */}
            <div className="flex flex-col gap-8">
              {/* FACT1 */}
              <div>
                <h2 className='text-second text-[1.3rem] font-bold'>2.157</h2>
                <h3 className='text-default text-[0.8rem] font-[800] whitespace-nowrap '>Sold Houses</h3>
              </div>

              {/* FACT2 */}
              <div>
                <h2 className='text-second text-[1.3rem] font-bold'>12.157</h2>
                <h3 className='text-default text-[0.8rem] font-[800] whitespace-nowrap '>Happy Client</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section4