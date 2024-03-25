import { request, gql } from 'graphql-request'

const MASTER_URL="https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cltzwl1dg014h08w44pe37lhx/master";

const getSlider=async()=>{
    const query = gql`
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
      
  `
  const result= await request(MASTER_URL, query);
  return result;
}

const getCategories=async()=>{
  const query = gql`
  query GetCategory {
    categories {
      id
      name
      icon {
        url
      }
    }
  }
    
`
const result= await request(MASTER_URL, query);
return result;
}

const getBusinessList=async()=>{
  const query = gql`
  query GetBusinesslist {
    bussinessLists {
      id
      name
      email
      contactPeson
      category {
        name
      }
      address
      about
      images {
        url
      }
    }
  }  
    
`
const result= await request(MASTER_URL, query);
return result;
}

const getBusinesslistByCategory=async(category)=>{
  const query = gql`
  query GetBusinesslist {
    bussinessLists(where: {category: {name: "`+category+`"}}) {
      id
      name
      email
      contactPeson
      category {
        name
      }
      address
      about
      images {
        url
      }
    }
  }
`
const result= await request(MASTER_URL, query);
return result;
}

const createBooking=async(data)=>{
  const mutationQuery = gql`
  mutation creataBooking {
    createBooking(
      data: {bookingStatus: Booked,
        bussinessList: 
          {connect: {id: "`+data.businessId+`"}}, 
        date: "`+data.date+`", 
        time: "`+data.time+`", 
        userEmail: "`+data.userEmail+`", 
        userName: "`+data.userName+`"}
    ) {
      id
    }
    publishManyBookings(to: PUBLISHED) {
      count
    }
  }
  
`
const result= await request(MASTER_URL, mutationQuery);
return result;
}


const getUserBookings =async(userEmail)=>{
  const query = gql`
    query GetUserBookings {
      bookings(orderBy: updatedAt_DESC,
         where: {userEmail: "`+userEmail+`"}) {
        time
        userEmail
        userName
        bookingStatus
        date
        id
        bussinessList {
          id
          images {
            url
          }
          name
          address
          contactPeson
          email
          about
        }
      }
    }
  `
  const result= await request(MASTER_URL, query);
  return result;
}



export default{
    getSlider,
    getCategories,
    getBusinessList,
    getBusinesslistByCategory,
    createBooking,
    getUserBookings

}


