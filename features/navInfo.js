import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  origin:null,
  destination:null,
  travelTimeInformation:null,
}

const nav = createSlice({
  name: 'themraves',
  initialState,
  reducer:{
    setOrigin:(state,action)=>{
        state.origin=action.payload;    }
  },
    setDestination:(state,action)=>{
        state.Destination=action.payload;    
  },
    setTravelTimeInformation:(state,action)=>{
        state.TravelTimeInformation=action.payload;    
  },

  
})


export const { setOrigin,setDestination,setTravelTimeInformation } = keyboardStatus.actions

export const selectOrigin=(state)=>state.nav.origin;
export const selectDestination=(state)=>state.nav.destination;
export const selectTravelTimeInformation=(state)=>state.nav.travelTimeInformation;


export default themes.reducer