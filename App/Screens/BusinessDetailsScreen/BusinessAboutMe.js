import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from '../../Components/Heading';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function BusinessAboutMe({business}) {
    const [isRead,setIsRead]=useState(false);

  return (
    <View>
        <Heading text={'About Me'}/>
        <Text style={{fontFamily:'sona-regu',lineHeight:18,fontSize:15}} 
            numberOfLines={isRead?20:5}>{business?.about}</Text>
        <TouchableOpacity onPress={()=>setIsRead(!isRead)}>
            <Text style={{color:'red',fontSize:16,fontFamily:'sona-regu'}}>{isRead?'Read Less':'read More'}</Text>
        </TouchableOpacity>
    </View>
  )
}