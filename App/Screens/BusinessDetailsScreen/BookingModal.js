import { View, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import CalendarPicker from "react-native-calendar-picker";
import Heading from '../../Components/Heading';
import { TextInput } from 'react-native-gesture-handler';
import GlobalApi from '../../Utils/GlobalApi';
import { useUser } from '@clerk/clerk-expo';


export default function BookingModal({businessId,hideModal}) {
const [timeList,setTimeList]=useState();
const [selectedTime, setSelectedTime]=useState();
const [selectedDate, setSelectedDate]=useState();
const [note, setNote] = useState();
const {user}=useUser();
    useEffect(()=>{
        getTime();
    },[])
    const getTime =()=>{
        const timeList=[];
        for(let i=8;i<12;i++){
            timeList.push({
                time:i+':00 AM'
            })
            timeList.push({
                time:i+':30 AM'
            })
        }
        for(let i=1;i<7;i++){
            timeList.push({
                time:i+':00 PM'
            })
            timeList.push({
                time:i+':30 PM'
            })
        }
        setTimeList(timeList)
    }

    // tạo Booking
    const createNewBooking=()=>{
        if(!selectedTime || !selectedDate)
        {
            ToastAndroid.show('vui lòng chọn Ngày và Thời gian', ToastAndroid.LONG)
            return;
        }
        const data={
            userName:user?.fullName,
            userEmail:user?.primaryEmailAddress.emailAddress,
            time:selectedTime,
            date:selectedDate,
            businessId:businessId
        }
        GlobalApi.createBooking(data).then(resp=>{
            console.log("resp", resp);
            ToastAndroid.show('Booking thành công', ToastAndroid.LONG)
            hideModal();
        })
    }


  return (
    <ScrollView>
    <KeyboardAvoidingView style={{padding:10}}>
        <View style={{padding:10}}>
        <TouchableOpacity style={{display:'flex', flexDirection:'row',gap:10,
                alignItems:'center', marginBottom:10}}
                onPress={()=>hideModal()}
            >
                <Ionicons name="arrow-back" size={30} color="black" />
                <Text style={{fontSize:20, fontFamily:'itim'}}>
                BooKing</Text>
            </TouchableOpacity>

            {/* Date Calender */}
            <Heading text={'Chọn Lịch'}/>
            <View style={styles.canlenderContainer}>
            <CalendarPicker 
                onDateChange={setSelectedDate}
                width={300}
                minDate={Date.now()}
                todayBackgroundColor={'white'}
                todayTextStyle={{color:'red'}}
                selectedDayColor={'#CCFFFF'}
                selectedDayTextColor={'#103667'}

            /> 
            </View>

            <View style={{marginTop:20}}>
                <Heading text={'chọn thời gian'}/>
                <FlatList
                    data={timeList}
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item,index})=>(
                        <TouchableOpacity  style={{marginRight:10}}
                        onPress={()=>setSelectedTime(item.time)}
                        >
                            <Text style={[selectedTime==item.time?
                            styles.selectedTime:styles.unSelectedTime]}>{item.time}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            {/* Ghi chú */}
            <View style={{paddingTop:8}}>
                <Heading text={'Note'}/>
                <TextInput placeholder='Note'
                numberOfLines={4} multiline={true}
                style={styles.noteTextArea}
                    onChange={(text)=>setNote(text)}
                />
            </View>

            {/* Nút  */}
            <TouchableOpacity style={{marginTop:20}} 
                onPress={()=>createNewBooking()}
            >
                <Text style={styles.confirmBtn}>Confin & Book</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    canlenderContainer:{
        backgroundColor:'pink',
        padding:-20,
        borderRadius:15
    },
    selectedTime:{
        padding:5,
        borderWidth:1.2,
        borderColor:'black',
        borderRadius:99,
        paddingHorizontal:18,
        color:'black',
        backgroundColor:'pink'

    },
    unSelectedTime:{
        padding:5,
        borderWidth:1.2,
        borderColor:'pink',
        borderRadius:99,
        paddingHorizontal:18,
        color:'red'

    },
    noteTextArea:{
        borderWidth:1,
        borderRadius:15,
        textAlignVertical:'top',
        padding:20,
        fontSize:15,
        fontFamily:'sona-regu',
        borderColor:'red'
    },
    confirmBtn:{
        textAlign:'center',
        fontFamily:'sona-regu',
        fontSize:17,
        backgroundColor:'#ee82ee',
        color:'white',
        padding:13,
        borderRadius:99, 
        elevation:1
    }
    
})