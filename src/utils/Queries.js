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
const RENT_CARDS = gql`
    query GET_RENT_CARD {
        houses(filters: {categories: {Category: {contains: "Rent"}}}
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
          Rent
                }
            }
        }
    }
`

export {BUY_CARDS, RENT_CARDS}