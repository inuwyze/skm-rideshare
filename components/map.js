import React, { useRef } from 'react';
import { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export const MapScreen = () => {
  const mapRef = useRef(null);
  const [pickupLocation, setPickupLocation] = useState(
    {latitude: 27.3389,
    longitude: 88.6065,}
  );
  const [dropLocation, setDropLocation] = useState(null);

  const gangtokCoords = {
    latitude: 27.3389,
    longitude: 88.6065,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  };

  

  return (
    <MapView
      ref={mapRef}
      style={styles.map}
      initialRegion={gangtokCoords}
      onRegionChange={(region) =>
        setPickupLocation({
          latitude: region.latitude,
          longitude: region.longitude,
        })
      }
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


