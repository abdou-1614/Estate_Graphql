import React from 'react'
import Navbar from '../../Navbar/Navbar'
import { RENT_CARDS } from '../../../utils/Queries'
import Card from '../../Card/Card'
import {useQuery} from '@apollo/client'
const Rent = () => {
    const {data: RentHouse, loading, error} = useQuery(RENT_CARDS)
  return (
    <main>
        <Navbar/>
        <div className='py-[90px] px-10'>
            <h1 className='text-[2rem] text-default my-10 font-bold'>Rent House</h1>
            <div>
                {loading || error ? 
                (<h1 className='font-bold text-[2rem] text-center text-default'>Loading...</h1>) 
                : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {RentHouse && RentHouse.houses.data.map((items, index) => (
                            <Card
                            key={index}
                            info={{
                                id: items.id,
                                category: "Rent",
                                imageSource: `http://localhost:1337${items.attributes.Preview_image.data.attributes.url}`,
                                city: `${items.attributes.location.data.attributes.City}`,
                                neighbourhood: `${items.attributes.Neighbourhood}`,
                                street: `${items.attributes.Street}`,
                                rooms: `${items.attributes.Rooms}`,
                                bedrooms: `${items.attributes.Bedroom}`,
                                bathrooms: `${items.attributes.Bathrooms}`,
                                shortAndress: `${items.attributes.Short_Address}`,
                                rent: `${items.attributes.Rent}`
                            }}
                            showInfo={{
                                price: false,
                                rent: true
                            }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    </main>
  )
}

export default Rent