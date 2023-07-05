
import { View, Text } from "react-native"
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { Pressable } from "react-native";


export const TestTracks=()=>{
    const [location, setLocation] = useState(null);
    const [track, setTrack] = useState(false);

    // const sendCoordinatesToApi = async (latitude, longitude) => {
    //     const apiUrl = 'https://example.com/api/endpoint'; // replace with your API endpoint
    //     try {
    //       console.log('tracking',latitude,longitude)
    //     } catch (error) {
    //       console.log('Errori:', error);
    //     }
    //   };2
    
    useEffect(() => {
     // Connect to the socket when the component mounts
    try {
      const scket=new WebSocket('ws://192.168.29.152:3000')   
      scket.onopen=(e)=>{
        console.log('socket open')
        scket.send(JSON.stringify({
            action:'setUserId',
            userId:'8837093148',
            
        }))
    }
    console.log('olaaa')
     
  } catch (error) {
    console.error('errorrorr',error)
  }
    // Clean up the socket connection when the component unmounts
    return () => {
      
    };

    }, []);


    
      

    return(
        <View
        style={{
            display:'flex',
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        }}>
             {location && (
            <Text>
                Latitude: {location.latitude}, Longitude: {location.longitude}
            </Text>
            
            )}
            <Pressable
            style={{
                backgroundColor:track?'green':'red',
                padding:10,
                
                borderRadius:10
                
            }}
            onPress={()=>sendLocation()}
            >
                <Text
                style={{color:'white',fontWeight:'700'}}>
                    Track button
                </Text>
            </Pressable>
        </View>
    )
    
}