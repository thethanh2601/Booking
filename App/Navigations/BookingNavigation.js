import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomScreen/HomeScreen';
import BusinessListByCategoryScreen from '../Screens/BusinessListByCategoryScreen/BusinessListByCategoryScreen';
import BusinessDetailsScreen from '../Screens/BusinessDetailsScreen/BusinessDetailsScreen';
import ItemBookingDetail from '../Screens/BusinessDetailsScreen/ItemBookingDetail';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';

const Stack = createStackNavigator();

export default function BookingNavigation() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
      <Stack.Screen name="Booking" component={BookingScreen} />
      <Stack.Screen name="item-detail" component={ItemBookingDetail}/> 


    </Stack.Navigator>
  )
}
