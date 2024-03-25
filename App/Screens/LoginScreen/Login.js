import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';
WebBrowser.maybeCompleteAuthSession();


const Login = () => {
    useWarmUpBrowser();
    // sác thực gg
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
     
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);
  return (
    <View style={{alignItems:'center'}}>
      <Image source={require('../../../assets/images/trinh.jpg')}
        style={styles.loginImg}
      />
      <View style={styles.subCOntainer}>
        <Text style={{fontSize:18, color:'white', textAlign:'center'}}>
            Xin chào 
            <Text style={{fontWeight:'bold'}}> Đây là App Booking được tạo ra Khi tôi Đang Học React Native</Text>
        </Text>
        <Text style={{fontSize:15, color:'white', textAlign:'center', marginTop:20}}>
            "Bên em là bình yên, là nơi anh muốn về. Nơi có tiếng cười ấm áp, xua tan đi muộn phiền."
        </Text>
        <TouchableOpacity style = {styles.button}
            onPress={onPress}
        >
            <Text style={{textAlign:'center', fontSize:17, color:'black'}}>
                Next
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    loginImg:{
        width:200,
        height:380,
        marginTop:70,
        borderWidth:4,
        borderColor:'#000',
        borderRadius:15,
        marginTop:10
    },
    subCOntainer:{
        width:'100%',
        height:'70%',
        backgroundColor:'pink', 
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding: 10
    },
    button:{
        padding:15,
        backgroundColor:'white',
        borderRadius:99,
        marginTop:40
    }
})