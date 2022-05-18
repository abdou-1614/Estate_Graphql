import React, {useState} from 'react'
import{Link} from 'react-router-dom'
import {FaMapMarkerAlt} from 'react-icons/fa'
import Home1 from '../../../../assets/home1.jpg'
import Navbar from '../../../Navbar/Navbar'
const Section1 = () => {
    const [location, setLocation] = useState("")
    const [price, setPrice] = useState("<100k")
  return (
    <section className='mt-[120px] px-3'>
        <div>
            <Navbar/>
        </div>
        {/* Background Image */}
        <div></div>
        {/* SECTION CONTENT */}
        <div className='section'>
        {/* BANNER */}
            <div className='banner'>
                <h1>Ease Way to Find Your Dream House</h1>
                <p>
                Search and find your dream house at affordable prices , but with the
                best quality. Only available in Real
                </p>
        {/* SEARCHING */}
                <div className='search'>
        {/* LOCATION */}
                    <FaMapMarkerAlt className='text-default text-[20px]'/>
                    <input
                    type="text"
                    placeholder='Search By Location ...'
                    onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
        {/* PRICE RANGE */}
                <div>
                    <span>Price</span>
                    <select
                    id='price'
                    name='price'
                    onChange={e => setPrice(e.target.value)}
                    >
                    <option value="<100k">{`<100k`}</option>
                    <option value="100k-200k">100k-200k</option>
                    <option value="200k-500k">200k-500k</option>
                    <option value=">500k">{`>500k`}</option>
                    </select>
                </div>
        {/* SEARCH BUTTON */}
                <button>
                    <Link to='search'>
                        Search
                    </Link>
                </button>
            </div>
            {/* BUILD IMAGE */}
            <div>
                <img src={Home1} alt='home'/>
            </div>
        </div>
    </section>
  )
}

export default Section1