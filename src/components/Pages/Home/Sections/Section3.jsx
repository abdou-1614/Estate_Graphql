import React from 'react'
import Button from '../../../button/Button'
import Carousel from '../../../Carousel/Carousel'
import {SwiperSlide} from 'swiper/react'
import Card from '../../../Card/Card'

const Section3 = () => {
  return (
    <section className='mt-32 overflow-x-hidden px-2 md:px-4'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-default text-[1.3rem] font-bold'>Buy House</h1>
        <Button text={"See More"} path={"/buy"}/>
      </div>
      <div className='p-2 cursor-pointer'>
        <Carousel>
        <SwiperSlide>
          <Card/>
        </SwiperSlide> 
        <SwiperSlide>
          <Card/>
        </SwiperSlide> 
        <SwiperSlide>
          <Card/>
        </SwiperSlide>
        <SwiperSlide>
          <Card/>
        </SwiperSlide>
        <SwiperSlide>
          <Card/>
        </SwiperSlide>
        </Carousel>
      </div>
    </section>
  )
}

export default Section3