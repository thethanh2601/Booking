import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import { useUser } from '@clerk/clerk-expo'
import ItemBookingScreen from '../BusinessListByCategoryScreen/ItemBookingScreen';
import { useNavigation } from '@react-navigation/native';

export default function BookingScreen() {
  const navigation = useNavigation();
  const{user}=useUser();
  const [bookingList,setBookingList]=useState([])
  const [loading, setLoading]=useState(false);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     GlobalApi.getUserBookings(user.primaryEmailAddress.emailAddress).then(resp=>{
  //       setBookingList(resp.bookings); 
  //     })
  //   };
  //   // Gọi API khi component được gắn kết
  //   fetchData();
  //   // Gọi API lại sau mỗi 5 giây
  //   const interval = setInterval(fetchData, 5000);

  //   // Xóa interval khi component bị unmount
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      GlobalApi.getUserBookings(user.primaryEmailAddress.emailAddress).then(resp=>{
        console.log(resp)
        setBookingList(resp.bookings);
      })
    };

// // Gọi API khi component được focus
// const subscription = navigation.addListener('focus', fetchData);
// // Xóa subscription khi component bị unmount
// return () => subscription.remove();

  navigation.addListener('focus', fetchData);

  }, []);
  
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
      <Text style={{fontFamily:'sona-bold',marginBottom:5,marginTop:-5, fontSize:20}}
      onPress={()=>getUserBookings()}>My Booking</Text>
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