import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading';
import { useNavigation } from '@react-navigation/native';

export default function Categories() {
    const [categories, setCategories]=useState([]);
    const navigation=useNavigation()
    useEffect(()=>{
        getCategories();
    },[])
    const getCategories=()=>{
        GlobalApi.getCategories().then(resp=>{
            // console.log('jd',resp.categories);
            setCategories(resp?.categories);
        })
    }
  return (
    <View style={{marginTop:5, height:'22%'}}>
      <Heading text={'Categories'} isViewALL={true}/>
      <FlatList
        data={categories}
        numColumns={4}
        renderItem={({item,index})=>index<=3&&(
            <TouchableOpacity style={styles.container}
            onPress={()=>navigation.push('business-list',{
                categories:item.name
            })}
            >
                <View style={styles.iconContainer}>
                    <Image source={{uri:item?.icon?.url}}
                        style={{width:50, height:50, borderWidth:1, borderRadius:80}}
                    />
                    <Text style={{fontFamily:'itim', marginTop:5}}>{item?.name}</Text>
                </View>
            </TouchableOpacity>
        )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:-8
    },
    iconContainer:{
        padding:5,
        borderRadius:99
    }
})