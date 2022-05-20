import React from 'react'
import {Link} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import {AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
import './Footer.scss'
const Footer = () => {
    return (
        <footer>
          <ul className="brand">
            <li>
              <span>Real</span>
            </li>
            <li>
              <span>Our Location</span>
            </li>
            <li>
              <span>Call us: +123 456 789</span>
            </li>
            <li>
              <div className="socials">
                <Link to="/">
                  <AiOutlineInstagram className='icon' />
                </Link>
                <Link to="/">
                  <AiOutlineFacebook className='icon'  />
                </Link>
                <Link to="/">
                  <AiOutlineTwitter className='icon' />
                </Link>
              </div>
            </li>
          </ul>
    
          <ul className="services">
            <li>
              <span>Services</span>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li>
              <Link to="/">Our Team</Link>
            </li>
          </ul>
    
          <ul className="support">
            <li>
              <span>Support</span>
            </li>
            <li>
              <Link to="/">FAQ's</Link>
            </li>
            <li>
              <Link to="/">Support Center</Link>
            </li>
            <li>
              <Link to="/">Help Center</Link>
            </li>
          </ul>
    
          <ul className="subscribe">
            <li>
              <span>Subscribe</span>
            </li>
            <li>
              <p>Subscribe to get the latest new and promo from us</p>
            </li>
            <li>
              <div className="subscribe_input">
                <input type="text" placeholder="Email Andress" />
                <button>
                  <BsArrowRight />
                </button>
              </div>
            </li>
          </ul>
        </footer>
      );
}

export default Footer