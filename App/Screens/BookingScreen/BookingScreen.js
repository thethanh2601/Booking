import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import { useUser } from '@clerk/clerk-expo'
import ItemBookingScreen from '../BusinessListByCategoryScreen/ItemBookingScreen';

export default function BookingScreen() {

  const{user}=useUser();
  const [bookingList,setBookingList]=useState([])
  const [loading, setLoading]=useState(false);

  useEffect(()=>{
    user&&getUserBookings();
  },[user])
  const getUserBookings=()=>{
    setLoading(true);
    GlobalApi.getUserBookings(user.primaryEmailAddress.emailAddress).then(resp=>{
      console.log(resp)
      setBookingList(resp.bookings);
      setLoading(false)
    })
  }

  return (
    <View style={{padding:10}}>
      <Text style={{fontFamily:'sona-bold',marginBottom:5,marginTop:-5, fontSize:20}}>My Booking</Text>
    <View>
      <FlatList
        data={bookingList}
        onRefresh={()=>getUserBookings()}
        refreshing={loading}
        renderItem={({item,index})=>(
          <ItemBookingScreen
            business={item?.bussinessList}  
            booking={item}
          />

        )}
      /> 
    </View>

    </View>
  )
}