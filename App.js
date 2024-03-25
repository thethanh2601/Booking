import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import TabNavigation from './App/Navigations/TabNavigation';



const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'sona-light': require('./assets/fonts/Sono-Light.ttf'),
    'sona-regu': require('./assets/fonts/Sono-Regular.ttf'),
    'sona-bold': require('./assets/fonts/Sono-SemiBold.ttf'),
    'itim': require('./assets/fonts/Itim-Regular.ttf'),
    
  });
  return (
    <ClerkProvider 
      // tokenCache={tokenCache}
      publishableKey='pk_test_bGl2aW5nLXBlcmNoLTguY2xlcmsuYWNjb3VudHMuZGV2JA'>
      <View style={styles.container}>

      {/* Sign In Component */}
        <SignedIn>
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
        </SignedIn>
      {/* SignOut */}
        <SignedOut>
          <Login/>
        </SignedOut>
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:20
  },
});
