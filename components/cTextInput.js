import React,{ forwardRef, useEffect, useState } from 'react';

import { TextInput, StyleSheet, Pressable } from 'react-native';
import store from '../store';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomTextInput = forwardRef((props,ref) => {
    
    const [isFocused, setIsFocused] = useState(false);
    
    return (
    <View
    style={styles.container}>
      <View
      style={{flex:1}}>
    <Icon
    
    name='dot-single'
    color={props.dotColor}
    type='entypo'
    size={isFocused?40:30}/>
    </View>
    <TextInput
    placeholderTextColor='lightgrey'
    keyboardType="visible-password"
    underlineColorAndroid="transparent"
    ref={ref} 
      style={[styles.input, isFocused && styles.inputFocused]}
      onFocus={() => {props.setOnpickup();setIsFocused(true)}}
      onBlur={() => setIsFocused(false)}

      {...props}
    />
    <View
    style={{flex:1}}>
      {props.value && 
      <Pressable
    
      onPress={props.clearInput}>
      <Icon
      
      name='cross'
      type='entypo'
      
      
      size={22}/>
      </Pressable>}
    
    </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },  
  input: {
    // borderWidth:1,chrp
    flex:5,
    backgroundColor: 'white',
    opacity:50,
    // borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 16,
    fontSize: 14,
    fontWeight:'500',
    
    color: store.getState().themes.accent2,
    
    height:45,
    // elevation:15,
    borderColor:store.getState().themes.accent2+'95',

  },
  inputFocused: {
    // borderColor: store.getState().themes.accent1+'90',
    // fontSize:16,
    fontWeight:'500',
    
  },
});

export default CustomTextInput;
