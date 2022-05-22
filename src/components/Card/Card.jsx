import React from 'react'
import {BsFillDoorOpenFill} from 'react-icons/bs'
import{IoIosBed} from 'react-icons/io'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {FaBath} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import building3 from '../../../src/assets/building3.jpg'
const Card = ({info, showInfo}) => {
    //CONVERT PRICE FUNC
    const convertPrice = (price) => {
        if (price >= 1000 && price < 999999) return `${price / 1000}k `;
        if (price >= 1000000) return `${price / 1000000}m `;
        return price;
      };
    
      //CONVERT RENT FUNC
      const covnertRent = (rent) => {
        if (rent >= 1000) return `${rent / 1000}k `;
        return rent;
      };
    
      return (
        <div className="flex flex-col w-full p-[1.2rem] border border-solid border-[rgba(207,207,207)] select-none sm:max-w-max">
          {/* IMAGE */}
          <div className="relative mb-4">
            <div className="absolute top-0 left-0 my-6 mx-4 rounded-md py-2 px-[1.8rem] bg-white1 text-default font-[600] border border-solid border-[rgba(255,255,255,0.5)]
            transition-all delay-200 ease-in-out hover:border-white1 hover:bg-default hover:text-white1 ">
              <Link to="/">{info.category}</Link>
            </div>
            <img className='w-[320px] rounded-md h-[250px]
             md:h-[250px] object-cover' src={info.imageSource} alt="building" />
            {/* CITY */}
            <h3 className='text-[hsl(228,68%,62%)] font-semibold mt-1 text-[1.1rem]'>{info.city}</h3>
            <h4 className='text-[hsl(228,68%,62%)] text-[0.9rem] font-[500] flex gap-[3px]'>
              <p className="first-letter:uppercase lowercase mb-1 mt-1">{info.neighbourhood}</p>
              <p className="first-letter:uppercase lowercase mb-1 mt-1">{info.street}</p>
            </h4>
            {/* ROOMS ETC */}
            <div className="mt-6 mb-6 flex items-center justify-between gap-2">
              {/* ROW1 */}
              <div className="flex flex-col gap-4 mt-3">
                {/* ROOMS */}
                <div className="flex gap-1  flex-col">
                  <div className='flex items-center gap-1'>
                  <BsFillDoorOpenFill className='text-default text-[1.1rem]' />
                  <span className='text-[0.9rem] text-default'>{`${info.rooms}`}</span>
                  </div>
                  <h1 className='text-[0.9rem] text-default'>Rooms</h1>
                </div>
                {/* BEDROOMS */}
                <div className="flex gap-1 flex-col">
                  <div className='flex items-center gap-1'>
                  <IoIosBed className='text-default text-[1.1rem]' />
                  <span className='text-[0.9rem] text-default'>{`${info.bedrooms}`}</span>
                  </div>
                  <h1 className='text-[0.9rem] text-default'>Bedrooms</h1>
                </div>
              </div>
              {/* ROW2 */}
              <div className="flex flex-col gap-4 mt-3">
                {/* BATHROOMS */}
                <div className="flex gap-1 flex-col">
                  <div className='flex items-center gap-1'>
                  <FaBath className='text-default text-[1.1rem]' />
                  <span className='text-[0.9rem] text-default'>{`${info.bathrooms}`}</span>
                  </div>
                    <h1 className='text-[0.9rem] text-default'>Bathrooms</h1>
                </div>
                {/* Short Andress (Airport Code) */}
                <div className="flex gap-1 flex-col">
                  <div className='flex items-center gap-1'>
                  <FaMapMarkerAlt className='text-default text-[1.1rem]' />
                  <span className='text-[0.9rem] text-default'>{`${info.shortAndress}`}</span>
                  </div>
                  <h1 className='text-[0.9rem] text-default'>Location</h1>
                </div>
              </div>
            </div>
                <div className='border-b-2 border-[hsl(228,80%,72%)] border-solid mb-3'/>

            <div className="mt-auto flex justify-between items-center">
              {/* PRICES */}
              <div className="prices">
                <h2
                  style={showInfo.price ? {} : { display: "none" }}
                  className='text-[1.5rem] text-second font-bold'
                >{`${convertPrice(info.price)}$`}</h2>
                <h2
                  style={showInfo.rent ? {} : { display: "none" }}
                  className='text-[1.5rem] text-second font-bold'
                >{`${covnertRent(info.rent)}`}</h2>
              </div>
              {/* SEE MORE BUTTON */}
              <div className="text-[0.9rem] bg-default py-2 px-4 text-white1 rounded-md font-semibold transition-all delay-200 ease-in-out border border-solid border-lavandage hover:bg-second  hover:border-default ">
                <Link to={`/property/${info.id}`}>See More</Link>
              </div>
            </div>
          </div>
        </div>
      );
    };

    Card.defaultProps = {
        info: {
          id: undefined,
          imageSource: building3,
          category: "Buy",
          city: "City",
          neighbourhood: "Neighbourhood",
          street: "Street",
          rooms: 9,
          bedrooms: 7,
          bathrooms: 2,
          shortAndress: "DA",
          price: 80000,
          rent: 0,
        },
        showInfo: {
          price: true,
          rent: false,
        },
        secondClass: "undefined",
      };

export default Card