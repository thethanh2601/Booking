import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomScreen/HomeScreen';
import BusinessListByCategoryScreen from '../Screens/BusinessListByCategoryScreen/BusinessListByCategoryScreen';
import BusinessDetailsScreen from '../Screens/BusinessDetailsScreen/BusinessDetailsScreen';
import ItemBookingDetail from '../Screens/BusinessDetailsScreen/ItemBookingDetail';
import SeachSreen from '../Screens/HomScreen/SeachSreen';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="business-list" 
      component={BusinessListByCategoryScreen} />
      <Stack.Screen name="business-detail" component={BusinessDetailsScreen}/> 
      <Stack.Screen name="item-detail" component={ItemBookingDetail}/> 
      {/* <Stack.Screen name="seach" component={SeachSreen}/>  */}


    </Stack.Navigator>
  )
}
