import { View, Text, Image,StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { SignedOut, useAuth, useUser } from '@clerk/clerk-expo';
import BookingScreen from '../BookingScreen/BookingScreen';
import { useNavigation } from '@react-navigation/native';
import Login from '../LoginScreen/Login';


export default function ProfileScreen() {
  const{user}=useUser();
  const navigation=useNavigation();

  const handleScreenChange = (page) => {
    navigation.navigate(page);
  };
  

  const profileMenu=[
    {
      id:1,
      name:'Home',
      icon:'home',
      page:'home'

    },
    {
      id:2,
      name:'My Booking',
      icon:'bookmark',
      page:'booking'


    },
    {
      id:3,
      name:'Email',
      icon:'mail',

    },
    {
      id:4,
      name:'Logout',
      icon:'log-out',
      page:'LogOut'
    }
  ]
  return (
    <View>
      <View style={{padding:20,paddingTop:30, backgroundColor:'pink'}}>
        <Text style={{fontSize:25,fontFamily:'sona-bold'}}>Profile</Text>
        <View style={styles.container}>
          <Image source={{uri:user.imageUrl}}
            style={{width:90,height:90, borderRadius:99}}/>
          <Text style={{fontSize:23,fontFamily:'sona-regu',color:'white'}}>{user.fullName}</Text>
          <Text style={{fontSize:18,fontFamily:'sona-regu',color:'white'}}>{user?.primaryEmailAddress.emailAddress}</Text>
        </View>
      </View>
      <View style={{paddingTop:10}}>
        <FlatList
          data={profileMenu}
          renderItem={({item,index})=>(
            <TouchableOpacity style={styles.subContainer}
            onPress={() => handleScreenChange(item.page)}
            >
              <Ionicons name={item.icon} size={34} color="black" />
              <Text style={{fontFamily:'sona-regu', fontSize:18}}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:20,
  },
  subContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:5, 
    marginBottom:10,
    paddingHorizontal:30}
})
