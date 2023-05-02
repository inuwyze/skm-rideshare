import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { SettingsView } from './views/settings';
import { Home } from './views/Home';

import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Provider, useSelector } from 'react-redux'
import store from './store';
import { createStackNavigator } from '@react-navigation/stack';
import { LocationModal } from './views/LocationModal';
const RootStack=createStackNavigator()
const DrawerNav=createDrawerNavigator()


const ros=[require('./assets/icons/home_active.png'),require('./assets/icons/acc_active.png'),require('./assets/icons/home_inactive.png'),require('./assets/icons/acc_inactive.png')]

export default function AppWrapper(){
  return (
    <Provider store={store}> 
      <App /> 
    </Provider>
  )
}


function DrawerScreen() {
  return (
    <DrawerNav.Navigator 
    screenOptions={{
      headerShown:false
    }}
    >
      
    <DrawerNav.Screen name="Home" component={Home}></DrawerNav.Screen>
    <DrawerNav.Screen name="Settings" component={SettingsView}></DrawerNav.Screen>
      
    
    </DrawerNav.Navigator>
  );
}
const  App=()=> {

  return (
    
    <NavigationContainer
    >
    <RootStack.Navigator >
      <RootStack.Screen
        name="Main"
        component={DrawerScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="LocationModal" 
      options={{ headerShown: false }}
      component={LocationModal} />
    </RootStack.Navigator>
    </NavigationContainer>
  
   
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomNav:{
    position:'absolute',
        
        left:10,
        right:10,
        borderWidth:5,
        backgroundColor:store.getState().themes.bgColor,
        borderTopColor:store.getState().themes.bgColorTr,
        borderColor:store.getState().themes.bgColorTr,
        
        borderRadius:25,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,

        height:60,
        margin:0,
        padding:0,
        elevation:10,
  }
});
