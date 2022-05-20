import React from 'react'
import {Swiper} from 'swiper/react'
import {Pagination} from 'swiper'
import 'swiper/scss'
import 'swiper/scss/pagination'
const Carousel = ({ children, slides }) => {
  return (
    <Swiper
    modules={[Pagination]}
    spaceBetween={50}
    slidesPerView={slides}
    pagination={{ clickable: true }}
    className="w-full"
    >
      {children}
      <div className='mt-[70px]' ></div>
    </Swiper>
  )
}

export default Carousel