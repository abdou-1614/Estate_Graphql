import Navbar from '../../Navbar/Navbar'
import {useParams} from 'react-router-dom'
import {useQuery} from '@apollo/client'
import {ID_CARD} from '../../../utils/Queries'
import Card from '../../Card/Card'
const Property = () => {
    let params = useParams()
    const {data: Search, loading, error} = useQuery(ID_CARD, {
        variables: {
            id: params.propertyId
        }
    })
    const queryHandeler = () => {
        if(loading) {
            return <h1>loading</h1>
        }
        if(error) {
            <h1>Error Fetch Data</h1>
        }
        if(Search) {
            if(Search.houses.data.length) {
                let house = Search.houses.data[0]
                return (
                <div className='flx flex-col justify-center items-center mt-[90px] px-6 py-4'>
                    <Card
                        info={{
                            id: params.propertyId,
                            category: "Buy",
                            imageSource: `http://localhost:1337${house.attributes.Preview_image.data.attributes.url}`,
                            city: `${house.attributes.location.data.attributes.City}`,
                            neighbourhood: `${house.attributes.Neighbourhood}`,
                            street: `${house.attributes.Street}`,
                            rooms: `${house.attributes.Rooms}`,
                            bedrooms: `${house.attributes.Bedroom}`,
                            bathrooms: `${house.attributes.Bathrooms}`,
                            shortAndress: `${house.attributes.Short_Address}`,
                            price: `${house.attributes.Price}`,
                            rent: `${house.attributes.Rent}`
                        }}
                        showInfo={{
                            price: house.attributes.Price ? 1 : 0,
                            rent: house.attributes.Rent ? 1 : 0
                        }}
                    />
                    <div className='my-10 text-[#333] text-[1.2rem] font-bold'>
                        <span className='text-center'>Description : </span>
                        <p className='text-center'>{house.attributes.Description}</p>
                    </div>
                </div>
                )
            }
            return <h1>Property Not Found</h1>
        }
    }
  return (
      <main className='flex  flex-col min-h-[100vh]'>
          <Navbar/>
          <div className=' flex flex-1 justify-center items-center'>{queryHandeler()}</div>
      </main>
  )
}

export default Property