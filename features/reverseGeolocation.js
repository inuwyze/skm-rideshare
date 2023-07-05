import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

const useReverseGeolocation = async (coords) => {
    // Location.setGoogleApiKey()
  // const res=await fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng='+coords.latitude+','+coords.longitude+'&key=AIzaSyA_yoHJ6hSP8JZozCY71JeJE2Q_KAladyE') 
  // const data=await res.json()
  // return data.results[0].formatted_address
  return ' 8JQ4+HG9, Sungava, Gangtok, Sikkim 737101, India'
};

export default useReverseGeolocation;
