import {gql} from '@apollo/client'

const BUY_CARDS = gql`
    query GET_BUY_CARD {
        houses(filters: {categories: {Category: {contains: "Buy"}}}
        ) {
            data {
        id
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

export {BUY_CARDS}