import { View, Text, Image, StyleSheet, ScrollView, Modal, Linking, ToastAndroid, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import BusinessPhoto from './BusinessPhoto';
import BookingModal from './BookingModal';
import GlobalApi from '../../Utils/GlobalApi';


export default function ItemBookingDetail() {
  const param=useRoute().params;
    const [business,setBusiness]=useState(param.business);
    const [booking,setBooking]=useState(param.booking);
    const [showModal, setShowModal]=useState(false);
    const navigation=useNavigation();
    
    const getDeleBooking = () => {
      Alert.alert(
        "Xác nhận xóa đặt chỗ",
        "Bạn có chắc chắn muốn xóa đặt chỗ này?",
        [
          {
            text: "Hủy",
            onPress: () => console.log("Hủy xóa đặt chỗ"),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => {
              GlobalApi.DeleteBooking(booking.id).then(resp => {
                console.log(resp);
                navigation.goBack();
              }).catch(error => {
                console.error("Error deleting booking:", error);
              });
            },
          },
        ]
      );
    };

    
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
       
        <View style={styles.subContainer}>
          <Text style={{fontFamily:'sona-regu',color:'red',fontSize:18
          }}>{business?.contactPeson}</Text>
          
          
        </View>
        <Text style={{fontSize:17, fontFamily:'sona-regu', color:'blue'
        }}>
        <Ionicons name="location" size={20} color="black" />{business?.address}</Text>

        {/* Thanh */}
        <View style={{borderWidth:0.4,borderColor:'red', marginTop:5,
        marginBottom:10}}></View>

        <Text style={{fontFamily:'sona-regu',color:'black',fontSize:15
          }}>trạng thái: {booking?.bookingStatus}</Text>

        <Text style={{fontFamily:'sona-regu',color:'black',fontSize:15
          }}>Ngày BooKing: {booking?.date}</Text>
        <Text style={{fontFamily:'sona-regu',color:'black',fontSize:15
          }}>Time BooKing: {booking?.time}</Text>



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
      onPress={()=>setShowModal(true)}>
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
        onPress={()=>getDeleBooking()}
        >
        <Text style={{
          textAlign:'center',
          fontFamily:'sona-regu',
          fontSize:15,
          color:'red'
        }}>Hủy</Text>
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
