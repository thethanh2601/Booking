import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Heading({text,isViewALL=false}) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {text}
      </Text>
      {isViewALL&& <Text style={styles.Text}>View ALL</Text> }
      

    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    heading:{
        fontSize:20,
        fontFamily:'itim',
        marginBottom:10
    },
    Text:{
      fontFamily:'itim',
      color:'pink'
  },
})