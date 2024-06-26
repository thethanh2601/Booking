import { View, Text, Image,StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native'
import React, { useCallback, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { SignedOut, useAuth, useUser } from '@clerk/clerk-expo';
import BookingScreen from '../BookingScreen/BookingScreen';
import { useNavigation } from '@react-navigation/native';
import Login from '../LoginScreen/Login';


export default function ProfileScreen() {
  const{user}=useUser();
  const navigation=useNavigation();

  const navigateToHome = () => {
    navigation.navigate('Home');
  };
  const navigateToBooKing = () => {
    navigation.navigate('booking');
  };

  const onMessBtn=()=>{
    Linking.openURL('mailto:'+user?.primaryEmailAddress.emailAddress+
    "?subject=Xin chào, bạn muốn gặp tôi có vc gì?&body=Xin chào");
  }
  
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
      <View style={{margin:10,marginTop:20}}>
        <TouchableOpacity style={styles.subContainer}
        onPress={()=>navigateToHome()}>
          <Ionicons name="home" size={34} color="black" />
          <Text style={styles.ButtonText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.subContainer}
        onPress={()=>navigateToBooKing()}>
          <Ionicons name="bookmark" size={34} color="black" />
          <Text style={styles.ButtonText}>BooKing</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.subContainer}
        onPress={()=>onMessBtn()}>
          <Ionicons name="mail" size={34} color="black" />
          <Text style={styles.ButtonText}>Mail</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.subContainer}
        onPress={()=>onMessBtn()}>
          <Ionicons name="log-out" size={34} color="black" />
          <Text style={styles.ButtonText}>Log Out</Text>
        </TouchableOpacity>
        
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
    gap:10, 
    marginBottom:10,
    paddingHorizontal:30
  },
  ButtonText:{
    fontFamily:'itim',
    fontSize:28
  }
})
