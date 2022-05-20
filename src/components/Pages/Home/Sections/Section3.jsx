import React from 'react'
import Button from '../../../button/Button'
import Carousel from '../../../Carousel/Carousel'
import {SwiperSlide} from 'swiper/react'
import Card from '../../../Card/Card'

const Section3 = () => {
  return (
    <section className='mt-32 overflow-x-hidden px-4 md:px-6'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-default text-[1.3rem] font-bold'>Buy House</h1>
        <Button text={"See More"} path={"/buy"}/>
      </div>
      <div className='p-5 cursor-pointer'>
        <Carousel>
        <SwiperSlide>
          <Card/>
        </SwiperSlide>
        </Carousel>
      </div>
    </section>
  )
}

export default Section3