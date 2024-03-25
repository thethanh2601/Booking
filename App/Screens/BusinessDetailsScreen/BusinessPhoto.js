import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Heading from '../../Components/Heading'

export default function BusinessPhoto({business}) {
  return (
    <View>
      <Heading text={'Photo'}/>
      <FlatList
        data={business.images}
        numColumns={2}
        renderItem={({item})=>(
            <Image source={{uri:item.url}}
                style={{width:'50%',flex:1,height:200, margin:5}}
            />
        )}
      />
    </View>
  )
}