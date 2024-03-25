import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import GlobalApi from '../../Utils/GlobalApi';
import BusinessListItem from './BusinessListItem';
import PageHeading from '../../Components/PageHeading';


export default function BusinessListByCategoryScreen() {
    const param=useRoute().params;
    const navigation=useNavigation();

    const [bussinessLists,setBussinessLists]=useState([]);

    useEffect(()=>{
        param&&getBusinesslistByCategory()
    },[param])

    const getBusinesslistByCategory=()=>{
        GlobalApi.getBusinesslistByCategory(param.categories)
        .then(resp=>{
            console.log(resp.bussinessLists)
            setBussinessLists(resp.bussinessLists)
        })
    }
  return (
    <View style={{padding:10}}>
       <TouchableOpacity style={{display:'flex', flexDirection:'row',gap:10,
            alignItems:'center'}}
            onPress={()=>navigation.goBack()}
        >
            <Ionicons name="arrow-back" size={30} color="black" />
            <Text style={{fontSize:20, fontFamily:'itim'}}>
            {param.categories}</Text>
        </TouchableOpacity>
        {bussinessLists?.length>0?
        <FlatList
            data={bussinessLists}
            renderItem={({item,index})=>(
               <BusinessListItem business={item}/>
            )}
        />:
        <Text style={{
            fontFamily:'sona-bold', color:'black',fontSize:20,textAlign:'center',marginTop:'20%'
        }}>K0 có dữ liệu</Text>}



    </View>
  )
}