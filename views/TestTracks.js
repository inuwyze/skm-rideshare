
import { View, Text } from "react-native"
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { Pressable } from "react-native";

export const TestTracks=()=>{
    const [location, setLocation] = useState(null);
    const [track, setTrack] = useState(false);

    const sendCoordinatesToApi = async (latitude, longitude) => {
        const apiUrl = 'https://example.com/api/endpoint'; // replace with your API endpoint
        try {
            // console.log('tracking')
            
            console.log('tracking',latitude,longitude)
          // const response = await fetch(apiUrl, {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/json',
          //   },
          //   body: JSON.stringify({ latitude, longitude }),
          // });
    
          // if (response.ok) {
          //   console.log('Coordinates sent to API successfully');
          // } else {
          //   console.log('Failed to send coordinates to API');
          // }
        } catch (error) {
          console.log('Errori:', error);
        }
      };
    const getLocationPermission = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log('Permission denied');
          return;
        }
      };
    
      const startLocationTracking = async () => {
        try{

          await getLocationPermission();
          
          Location.watchPositionAsync(
            {
              accuracy: Location.Accuracy.High,
              timeInterval: 1000, // Update location every 1 second
              distanceInterval: 1, // Update location when the user moves 10 meters
            },
          (location) => {
            sendCoordinatesToApi(location.coords.latitude,location.coords.longitude)
            // console.log()
            
            setLocation(location.coords);
            
          }
          );
        }catch(err){
          console.log('errrrr',err)
        }
    };


    useEffect(() => {
        if(track)
        startLocationTracking();
        return () => {
          // Cleanup function to stop tracking when the component unmounts
          Location.stopLocationUpdatesAsync();
        };
      }, [track]);
      

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
            onPress={()=>setTrack((pv)=>!pv)}
            >
                <Text
                style={{color:'white',fontWeight:'700'}}>
                    Track button
                </Text>
            </Pressable>
        </View>
    )
    
}