import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

export default function PageHeading({title}) {
  return (
    <View>
      <TouchableOpacity style={{display:'flex', flexDirection:'row',gap:10,
            alignItems:'center'}}
            onPress={()=>navigation.goBack()}
        >
            <Ionicons name="arrow-back" size={30} color="black" />
            <Text style={{fontSize:20, fontFamily:'itim'}}>
            {title}</Text>
        </TouchableOpacity>
    </View>
  )
}