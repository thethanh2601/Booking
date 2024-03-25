import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomScreen/HomeScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import { FontAwesome } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation';
const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:'pink'
      }}>
        <Tab.Screen name='home' component={HomeNavigation}
          options={{tabBarLabel:({color})=>(
            <Text style={{color:color, fontSize:12, marginTop:-7}}>Home</Text>
          ),
          tabBarIcon:({color, sze})=>(
            <FontAwesome name="home" size={24} color={color} />
          )
          }}
        />
        <Tab.Screen name='booking' component={BookingScreen}
            options={{tabBarLabel:({color})=>(
            <Text style={{color:color, fontSize:12, marginTop:-7}}>Home</Text>
          ),
          tabBarIcon:({color, sze})=>(
            <FontAwesome name="bookmark" size={24} color={color}  />
          )
          }}
        />
        <Tab.Screen name='profile' component={ProfileScreen}
          options={{tabBarLabel:({color})=>(
            <Text style={{color:color, fontSize:12, marginTop:-7}}>Home</Text>
          ),
          tabBarIcon:({color, sze})=>(
            <FontAwesome name="user-circle" size={24} color={color}  />
            )
          }}
        />
    </Tab.Navigator>
  )
}