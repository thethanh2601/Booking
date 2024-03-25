import { View, Text, Image,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function BusinessListItem({business,booking}) {
  const navigation=useNavigation();
  return (
    <TouchableOpacity style={styles.container}
    onPress={()=>navigation.push('business-detail',
    {
      business:business
    })
    }>
      <Image source={{uri:business?.images[0]?.url}}
        style={styles.image}
      />
      <View style={styles.subContainer}>
        <Text style={{fontFamily:'itim', color:'black', fontSize:15}}>{business?.contactPeson}</Text>
        <Text style={{fontFamily:'sona-bold', color:'black', fontSize:19}}>{business?.name}</Text>

      {!booking?.id?<Text  style={{fontFamily:'itim', color:'black', fontSize:15}}>
      <FontAwesome6 name="location-dot" size={15} color="red"/>{business?.address}</Text>
      :
      <Text style={[{
        padding:2,borderRadius:5,fontSize:14,
        alignSelf:'flex-start'},
        booking?.bookingStatus=='Completed'?
        {backgroundColor:'#FFFF99',color:'green'}:
        booking.bookingStatus=='InProgress'?
        {backgroundColor:'#4F4F4F', color:'white'}:
        {color:'black',backgroundColor:'pink'}]}>{booking?.bookingStatus}</Text>}
        {booking?.id?
        <Text style={{fontFamily:'sona-regu',color:'red',fontSize:16}}>
        <AntDesign name="calendar" size={24} color="black" /> {booking.date} at {booking.time}</Text>:null}

      </View>
    </TouchableOpacity>
  )
}const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:'white',
        borderRadius:15,
        marginBottom:15,
        display:'flex',
        flexDirection:'row',
        gap:10

    },
    subContainer:{
      display:'flex',
      gap:2
    },
    image:{
        width:100,
        height:120,
        borderRadius:15
    }
})