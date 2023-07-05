import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import useThrottle from '../util/useThrottle';
import useReverseGeolocation from '../features/reverseGeolocation';

export const MapScreen = (props) => {
  const mapRef = useRef(null);
  const [pickupLocation, setPickupLocation] = useState(
    {latitude: 27.3389,
    longitude: 88.6065,}
  );
  useEffect(()=>{
    console.log(pickupLocation)
  },[pickupLocation])
  const [dropLocation, setDropLocation] = useState(null);

  const gangtokCoords = {
    latitude: props.currentLocation.latitude,
    longitude: props.currentLocation.longitude,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  };

  

  return (
   <MapView
      ref={mapRef}
      style={styles.map}
      initialRegion={gangtokCoords}
      onRegionChangeComplete={async (region) =>
        {setPickupLocation({
          latitude: region.latitude,
          longitude: region.longitude,
        })
        console.log(await useReverseGeolocation({
          latitude: region.latitude,
          longitude: region.longitude,
        }))
      }}
    >
      {/* {pickupLocation && (
    <Marker coordinate={pickupLocation} pinColor="green" />
  )} 
  {dropLocation && (
    <Marker coordinate={dropLocation} pinColor="red" />
  )} */}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex:1,
  },
});


