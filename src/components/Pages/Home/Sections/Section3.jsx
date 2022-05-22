import React from 'react'
import Button from '../../../button/Button'
import Carousel from '../../../Carousel/Carousel'
import {SwiperSlide} from 'swiper/react'
import Card from '../../../Card/Card'
import {useQuery, gql} from '@apollo/client'

const GET_CARD = gql`
    query Get_House {
      houses(
      filters: { categories: { Category: { contains: "Rent" } } }
      pagination: { limit: 6 }
    ) {
      data {
        attributes {
          location {
            data {
              attributes {
                City
              }
            }
          }
          Preview_image {
            data {
              attributes {
                url
              }
            }
          }
          categories {
            data {
              attributes {
                Category
              }
            }
          }
          Neighboorhood
          Street
          Rooms
          Bedroom
          Bathrooms
          Short_Address
          Price
        }
      }
    }
  }
  `
const Section3 = () => {
  const {data, loading, error} = useQuery(GET_CARD)
  return (
    <section className='mt-32 overflow-x-hidden px-2 md:px-4'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-default text-[1.3rem] font-bold'>Buy House</h1>
        <Button text={"See More"} path={"/buy"}/>
      </div>
      <div className='p-2 cursor-pointer'>
        <Carousel>
          {loading || error ? 
          (<><SwiperSlide><Card/></SwiperSlide></>) 
          : (
            <>
            {data.houses.data.map((items, index) => (
              <SwiperSlide key={index}>
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
              </SwiperSlide>
            ))}
            </>
          )}
        </Carousel>
      </div>
    </section>
  )
}

export default Section3