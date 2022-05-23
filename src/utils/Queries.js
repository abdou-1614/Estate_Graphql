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
const ID_CARD = gql`
  query GET_ID_CARD($id: ID) {
    houses(filters: { id: { eq: $id } }) {
      data {
        id
        attributes {
          categories {
            data {
              attributes {
                Category
              }
            }
          }
          Neighboorhood
          Preview_image {
            data {
              attributes {
                url
              }
            }
          }
          location {
            data {
              attributes {
                City
              }
            }
          }
          Rooms
          Bedroom
          Bathrooms
          Price
          Street
          Price
          Rent
          Description
          Short_Address
        }
      }
    }
  }
`;

export {BUY_CARDS, RENT_CARDS, ID_CARD}