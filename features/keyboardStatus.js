import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  keyboardStatus:false,
}

const keyboardStatus = createSlice({
  name: 'keyboardStatus',
  initialState,
  reducers:{
    keyboardStatusToggle(state,action){
      state.keyboardStatus=!state.keyboardStatus
    },
  }
  
})


export const { keyboardStatusToggle } = keyboardStatus.actions
export default keyboardStatus.reducer