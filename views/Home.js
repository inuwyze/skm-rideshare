import React,{useState, useEffect} from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text,TextInput, View, Dimensions,Keyboard,Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';
import { useSelector,useDispatch } from 'react-redux';
import { keyboardStatusToggle } from '../features/keyboardStatus';
import store from '../store';
import {BookingPage} from './BookingPage'
import { DrawerButton } from '../components/drawerButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomModal from '../components/cModal';
import { MapScreen } from '../components/map';
import { TravelInput } from '../components/travelInput';
import { PickupInput } from '../components/pickupInput';
import { Icon } from 'react-native-elements';
import useGeolocation from '../features/useGeolocation';
// import useReverseGeolocation from '../features/reverseGeolocation';


export const Home=({navigation})=>{
  const dispatch=useDispatch()
  const Tab=createStackNavigator()
  const keyboardStatus=useSelector((state)=>state.keyboardStatus.keyboardStatus)
  const a=useSelector((state)=>state.themes.bgColor)
  const origin=useSelector((state)=>state.nav.origin)
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height+70 ;
  
  const [text, onChangeText] = React.useState('')
  const currentLocation = useGeolocation()
 
  console.log(currentLocation)
  
  
  useEffect(()=>{(async()=>{
    // console.log('oola',await useReverseGeolocation({"latitude": 27.3342, "longitude": 88.6120}))
  })()},[])

  useEffect( () => {
    // console.log(await useReverseGeolocation({"latitude": 27.3389, "longitude": 88.6065}))
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      
     dispatch(keyboardStatusToggle())
    
    });
  const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
     dispatch(keyboardStatusToggle())
  
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);


  
  return(
   
    <View
    style={
      {
        display:'flex',
        flex: 1,
        
      }
    }>
      {
        currentLocation?
        <MapScreen currentLocation={currentLocation}/>:<View/>
      }
        
      <PickupInput />
    </View>


  )
  
}

const H=({navigation})=>{
  return (
    <SafeAreaView
    style={{
      borderWidth:1,
    }}>
      <DrawerButton/>
      <TouchableOpacity
      onPress={()=>navigation.navigate('D')}>
        <Text>
          Press
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  input:{
    width:300,
    paddingVertical:10,
    paddingHorizontal:30,
    borderRadius:12,
    
    backgroundColor:store.getState().themes.bgColor,
    borderWidth:4,
    borderColor:store.getState().themes.accent1Tr,


    color:store.getState().themes.accent1,
    fontSize:18,
    fontWeight:'bold',
  },
  TextInput2:{
   marginTop:10,
   display:'none',
  }
})