import MapView from "react-native-maps"
import { MapScreen } from "../components/map"
import { Modal, Pressable, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import useReverseGeolocation from "../features/reverseGeolocation";
import { Button, Icon } from "react-native-elements";
import { setOrigin } from "../features/navInfo";
import { useDispatch, useSelector } from "react-redux";

export default SetLocationMap=(props)=>{
    
    // props
    // setLocation
    // return coords with name
    const origin=useSelector((state)=>state.nav.origin)
    const gangtokCoords = {
        latitude: 27.338936,
        longitude: 88.606506,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      };
    const [pickupLocation, setPickupLocation] = useState();
    const [locationName, setlocationName] = useState('');
    const nav=useNavigation()
    const dispatch=useDispatch()
    const act=()=>{
        dispatch(setOrigin({
            name:locationName,
            coords:pickupLocation,
        }))
        
    }    
    return(
    <View
    style={{
        display:'flex',
        flex:1,
    }}>
    <MapView
    
    style={{
        flex:1
    }}
    initialRegion={gangtokCoords}
    onRegionChangeComplete={async (region) =>
        {setPickupLocation({
            latitude: region.latitude,
          longitude: region.longitude,
        })
        setlocationName(await useReverseGeolocation({
          latitude: region.latitude,
          longitude: region.longitude,
        }))
      }}
    >
      
    </MapView>
    
    
    
    <View
    style={{
    position:'absolute',
    top: '50%',  /* position the top  edge of the element at the middle of the parent */
    left: '50%', /* position the left edge of the element at the middle of the parent */
    marginTop: -30,
    marginLeft: -50,
    width: 100,
    height: 100,
    }}>
        <Icon
        name='map-pin'
        color={'black'}
        type='font-awesome-5'
        size={30}
        />
    </View>
    
    <View
    style={{
        position:'absolute',
        bottom:10,
        paddingHorizontal:20,
        // height:50,
        width:'100%',
    }}>

        <Pressable
        onPress={act()}
        style={{
            // padding:10,
            // width:200,
            borderRadius:10,
            height:50,
            backgroundColor:'yellow',
            
        }}>
        <Text
        
        style={{
            paddingVertical:10,
            textAlign:'center',
            fontSize:20,    
            letterSpacing:1,
            fontWeight:'600'
            }}>DONE
            {origin}</Text>
        </Pressable>
    </View>
   
    
    </View>

    )
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        position:'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  });