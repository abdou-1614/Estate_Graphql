import React, {useState} from 'react'
import {BsArrowRight} from 'react-icons/bs'
import {FcHome} from 'react-icons/fc'
import {NavLink, Link} from 'react-router-dom'
import {FaBars, Fatimes} from 'react-icons/fa'
import {GiExitDoor} from 'react-icons/gi'
import useClick from '../../CustomHook/Click'
const Navbar = () => {
    const MenuLink = ({url, path}) => {
        return (
            <li className='pb-3 md:pb-0 text-[20px] md:text-xl text-default font-[500] md:font-semibold transform transition delay-150 ease-out  hover:text-second focus:text-second'>
            <NavLink
            to={`${url}`}
            className=""
            >
                {`${path}`}
            </NavLink>
        </li>
        )
    }
    const [toggel, setToggel] = useState(false)
    const domNode = useClick(() => {
        setToggel(false)
    })
    return (
        <nav className='flex justify-between items-center fixed top-0 left-1/2 bg-white1 -translate-x-1/2 backdrop-blur-lg py-2 px-10 max-w-[1440px] w-full z-50 shadow-primary '>
            <div>
                <Link to="/" className='flex items-center justify-center gap-1'><p className='font-bold text-[40px] text-default top-1'>Real</p> <FcHome className='text-[40px]'/></Link>
            </div>
            <article className='hidden md:block static bg-trasparent scale-100 '>
                <ul className='flex items-center gap-9 md:gap-11 font-semibold md:text-xl text-default' ref={domNode}>
                <MenuLink url="" path="Home" />
                <MenuLink url="buy" path="Buy" />
                <MenuLink url="rent" path="Rent" />
                <MenuLink url="search" path="Search" />
                <MenuLink url="about" path="About" />
                </ul>
            </article>
            {toggel && (
                <ul className='md:hidden absolute active right-8 left-8 top-[calc(100%+40px)] text-center bg-white1 rounded-md shadow-md p-8'>
                <MenuLink url="" path="Home"/>
                <MenuLink url="buy" path="Buy" />
                <MenuLink url="rent" path="Rent" />
                <MenuLink url="search" path="Search" />
                <MenuLink url="about" path="About" />
                </ul>
            )}
            <Link to='/auth' className='hidden md:block'>
                <span className='font-semibold flex items-center gap-1 text-[20px]'>Login <GiExitDoor className='text-[28px] text-default'/></span>
            </Link>
            <button className='md:hidden' onClick={() => setToggel(!toggel)} ><span>{toggel ? <FaBars className='translate-x-px text-2xl font-[900] right-1'/> : <FaBars className='translate-x-px text-2xl font-[900] right-1'/>}</span></button>
        </nav>
  )
}

export default Navbar