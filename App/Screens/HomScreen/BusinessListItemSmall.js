import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { useNavigation } from '@react-navigation/native'

export default function BusinessListItemSmall({business}) {
  const navigation=useNavigation()
  return (
    <TouchableOpacity style={styles.container}
    
    onPress={()=>navigation.push('business-detail',{
      business:business
    })}
    >
      <Image source={{uri:business?.images[0]?.url}}
         style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={{fontSize:17, fontFamily:'itim'}}>{business?.name}</Text>
        <Text style={{fontSize:13, fontFamily:'itim'}}>{business?.contactPeson}</Text>
        <Text style={{
          fontSize:10,
          fontFamily:'sona-regu',
          color:'pink',
          backgroundColor:'black',
          borderRadius:3,
          alignSelf:'flex-start',
          paddingHorizontal:7
        }}>{business?.category.name}</Text>

      </View>
      

    </TouchableOpacity>
  )
}const styles = StyleSheet.create({
  infoContainer:{
    padding:7,
    display:'flex',
    gap:3
  },
  container:{
    padding:10,
    backgroundColor:'white',
    borderRadius:10
  },
  image:{
    width:160,
    height:100,
    borderRadius:5
  }
})