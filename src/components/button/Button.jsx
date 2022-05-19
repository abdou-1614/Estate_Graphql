import React from 'react'
import {Link} from "react-router-dom"
import {BsArrowRight} from 'react-icons/bs'
const Button = ({path, text}) => {
  return (
    <div className='flex items-center z-20 gap-1.5 transition-all delay-300 ease-in-out cursor-pointer 
    text-[hsl(228,80%,73%)] text-[1rem] font-[600] 
    before:absolute before:content-["*"] before:-z-10 before:top-0 before:right-0 before:-translate-x-[6px] before:bg-white1 before:w-[35px] before:h-[35px] before:opacity-30 '>
        <Link to={`${path}`}>
            {text}
        </Link>
        <BsArrowRight className='text-default text-[1.1rem] transition-all delay-300 ease-in-out hover:bg-[rgba(207,207,207)] hover:rounded-full hover:translate-x-[3px]' />
    </div>
  )
}

export default Button