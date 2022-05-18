import React, {useState} from 'react'
import './Section.scss'
import{Link} from 'react-router-dom'
import {FaMapMarkerAlt} from 'react-icons/fa'
import Home1 from '../../../../assets/home1.jpg'
import Navbar from '../../../Navbar/Navbar'
// import building1 from '../../../../assets/building1.jpg'
const Section1 = () => {
    const [price, setPrice] = useState("<100k");
    const [location, setLocation] = useState("");
  
    return (
      <section className='section_1 px-5'>
        {/* NAVBAR */}
        <div className='Navbar'>
          <Navbar />
        </div>
  
        {/* BACKGROUND IMAGES */}
        <div className='img1'></div>
  
        {/* SECTION 1 CONTENT */}
        <div className=" pt-[120px] section_1_content">
          {/* SLOGAN */}
          <div className="slogan">
            <h1>Ease Way to Find Your Dream House</h1>
            <p>
              Search and find your dream house at affordable prices , but with the
              best quality. Only available in Real
            </p>
  
            {/* SearchBox */}
            <div className="search_container">
              {/* LOCATION */}
              <div className="location_container">
                <span>Location</span>
                <FaMapMarkerAlt className='absolute translate-y-[2.3rem] text-default text-[17px]'/>
                <input
                  type="text"
                  placeholder="Enter a Location"
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              {/* Price Range */}
              <div className='price_container'>
                <span>Price Range</span>
                <select
                  name="Price"
                  id="price"
                  onChange={(e) => setPrice(e.target.value)}
                >
                  <option value="<100k">{`<100k`}</option>
                  <option value="100k-200k">100k-200k</option>
                  <option value="200k-500k">200k-500k</option>
                  <option value=">500k">{`>500k`}</option>
                </select>
              </div>
  
              {/* Search Button */}
              <button className="btn_search">
                <Link to="search">Search</Link>
              </button>
            </div>
          </div>
  
          {/* Building Image */}
          <div className="slogan_image">
            <img src={Home1} alt="building" />
          </div>
        </div>
      </section>
    );
  };
  
  export default Section1;