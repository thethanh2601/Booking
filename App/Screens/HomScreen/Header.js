import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useUser } from '@clerk/clerk-expo'

export default function Header() {
  const {user, isLoading} = useUser();
  return  user&&(
    <View style={styles.container}>
    {/* Thông tin cá nhân */}
      <View style={styles.proflieMainContainer}>
        <View style={styles.profileContainer}>
          <Image source={{uri:user?.imageUrl}}
            style={styles.userImage}/>
          <View>
            <Text style={{color:'white', fontFamily:'sona-regu'}}>Xin chào,</Text>
            <Text style={{color:'white', fontSize:20,fontFamily:'sona-bold'}}>
            {user?.fullName}</Text>
          </View>
        </View>
        <FontAwesome name="bookmark-o" size={24} color="white" />
      </View>
      {/* thanh tim kiếm */}
      <View style={styles.seachBarContainer}>
        <TextInput placeholder='Search' 
          style={styles.TextInput}
        />
        <FontAwesome name="search" 
        style={styles.searchBar}size={24} color="black" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:"4%",
    backgroundColor:'pink',
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
  },
  proflieMainContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  profileContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:10
  },
  userImage:{
    width: 45,
    height:45,
    borderRadius:20
  },
  searchBar:{
    backgroundColor:'white',
    borderRadius:8,
    padding:5
  },
  seachBarContainer:{
    marginTop:10,
    display:'flex',
    flexDirection:'row',
    gap:10,
    marginBottom:5
  },
  TextInput:{
    padding:7,
    paddingHorizontal:16,
    backgroundColor:'white',
    borderRadius:8,
    width:'85%',
    fontFamily:'sona-regu'
  }
})