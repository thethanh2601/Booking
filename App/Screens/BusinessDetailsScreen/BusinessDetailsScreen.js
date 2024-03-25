import { View, Text, Image, StyleSheet, ScrollView, Modal, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Heading from '../../Components/Heading';
import BusinessPhoto from './BusinessPhoto';
import BusinessAboutMe from './BusinessAboutMe';
import BookingModal from './BookingModal';

export default function BusinessDetailsScreen () {
    const param=useRoute().params;
    const [business,setBusiness]=useState(param.business);
    const [showModal, setShowModal]=useState(false)
    const navigation=useNavigation();
    useEffect(()=>{
        
    },[])

    const onMessBtn=()=>{
      Linking.openURL('mailto:'+business?.email+"?subject=Xin chào, bạn muốn gập tôi có vc gì?&body=Xin chào");
    }


  return business&&(
    <View>
    <ScrollView style={{height:'90%'}}>
      <View style={styles.backBtnContainer}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />  
        </TouchableOpacity>
      </View>
      <Image source={{uri:business?.images[0]?.url}}
        style={{width:'100%',height:150}}
      />
      <View style={styles.infoContainer}>
        <Text style={{fontFamily:'sona-bold', fontSize:20}}
        >{business?.name}</Text>
        <View style={styles.subContainer}>
          <Text style={{fontFamily:'sona-regu',color:'red',fontSize:18
          }}>{business?.contactPeson}</Text>
          <Text style={{color:'black', backgroundColor:'pink', 
            padding:5, borderRadius:8, fontSize:11
          }}>{business?.category.name}</Text>
        </View>
        <Text style={{fontSize:17, fontFamily:'sona-regu', color:'blue'
        }}>
        <Ionicons name="location" size={20} color="black" />{business?.address}</Text>

        {/* Thanh */}
        <View style={{borderWidth:0.4,borderColor:'red', marginTop:5,
        marginBottom:10}}></View>

        {/* giới thiệu */}
        <BusinessAboutMe business={business}/>

          {/* Thanh */}
          <View style={{borderWidth:0.4,borderColor:'red', marginTop:10,
        marginBottom:10}}></View>

        <BusinessPhoto business={business}/>

      </View>

    </ScrollView>

    <View style={{
      display:"flex", flexDirection:'row',
      margin:8, gap:8}}>
      <View style={{ flex:1 }}>
      <TouchableOpacity style={styles.messbtn}
      onPress={()=>onMessBtn()}>
        <Text style={{
          textAlign:'center',
          fontFamily:'sona-regu',
          fontSize:15,
          color:'red'
        }}>Mess</Text>
      </TouchableOpacity>
      </View>

      <View style={{ flex:1 }}>
      <TouchableOpacity style={styles.booking}
      onPress={()=>setShowModal(true)}>
        <Text style={{
          textAlign:'center',
          fontFamily:'sona-regu',
          fontSize:15,
          color:'red'
        }}>booking</Text>
      </TouchableOpacity>
      </View>
    </View>

    {/* BooKing */}
    <Modal animationType='slide'
    visible={showModal}
    >
    <BookingModal 
    businessId={business.id}
    hideModal={()=>setShowModal(false)}/>

    </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  backBtnContainer:{
    position:'absolute',
    zIndex:10,
    padding:10
  },
  infoContainer:{
    padding:20,
    display:'flex',
    gap:10
  },
  subContainer:{
    displayL:'flex',
    flexDirection:'row',
    gap:5,
    alignItems:'center'
  },
  messbtn:{
    padding:12,
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'red',
    borderRadius:99,
    textAlign:'center',
  },
  booking:{
    padding:12,
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'black',
    borderRadius:99,
    textAlign:'center',
  }
})
