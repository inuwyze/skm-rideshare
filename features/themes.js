import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bgColor:'#FFFAE1',
  accent1:'#8E7242',
  accent2:'#293C31',
  accent3:'#CFA763',
}

const themes = createSlice({
  name: 'themes',
  initialState,
  
})



export default themes.reducer