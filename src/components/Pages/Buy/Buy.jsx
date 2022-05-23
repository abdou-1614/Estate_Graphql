import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Card from '../../Card/Card'
import {useQuery} from '@apollo/client'
import {BUY_CARDS} from '../../../utils/Queries'
const Buy = () => {
    const {data: HouseList, loading, error } = useQuery(BUY_CARDS)
  return (
    <main>
        <Navbar/>
        <div className='py-[90px] px-10'>
            <h1 className='font-bold text-default my-10 text-[2rem]'>House For Sale</h1>
            <div>
                {loading || error ? 
                (<h1 className=' text-default text-[2rem] text-center font-bold' >Loading...</h1>)
                : (
                    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
                        {HouseList && HouseList.houses.data.map((items, i) => (
                            <Card
                            info={{
                                id: items.id,
                                category: "Buy",
                                imageSource: `http://localhost:1337${items.attributes.Preview_image.data.attributes.url}`,
                                city: `${items.attributes.location.data.attributes.City}`,
                                neighbourhood: `${items.attributes.Neighbourhood}`,
                                street: `${items.attributes.Street}`,
                                rooms: `${items.attributes.Rooms}`,
                                bedrooms: `${items.attributes.Bedroom}`,
                                bathrooms: `${items.attributes.Bathrooms}`,
                                shortAndress: `${items.attributes.Short_Address}`,
                                price: `${items.attributes.Price}`,
                            }}
                            />
                        ) )}
                    </div>
                )
            }
            </div>
        </div>
    </main>
  )
}

export default Buy