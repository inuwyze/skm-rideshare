import React from 'react';
import {View} from 'react-native';
import CustomTextInput from "../components/cTextInput";
import useDebounce from '../util/debounce';
import { forwardRef } from 'react';
import { useEffect } from 'react';
const LocationSearch = forwardRef((props,ref) => {
    const deBouncedsearchTxt=useDebounce(props.value,400)
    const handleSearch = async (txt) => {
        
        console.log(txt)
        try {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${txt}&components=country:IN&location=27.3314,88.6138&radius=1000&key=AIzaSyA_yoHJ6hSP8JZozCY71JeJE2Q_KAladyE`
          );
          const data = await response.json();
          const { predictions } = data;
          console.log(predictions)
    
      
          props.setSearchResults(predictions);
        } catch (error) {
          console.log('Autocomplete Error:', error);
          // Handle the error
        }
      };
    useEffect(()=>{
        props.setSearchResults([])
        if(deBouncedsearchTxt)
        handleSearch(deBouncedsearchTxt)
    },[deBouncedsearchTxt])
    return (
        <View>
            <CustomTextInput
                ref={ref}
                {...props}
                />
        </View>
    );
})



export default LocationSearch;
