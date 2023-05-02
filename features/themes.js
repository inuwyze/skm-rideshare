import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bgColor:'#FFFAE1',
  bgColorTr:'#FFFAE181',
  accent1:'#8E7242',
  accent1Tr:'#8E724221',
  accent2:'#293C31',
  accent3:'#CFA763',
}

const themes = createSlice({
  name: 'themes',
  initialState,
  
})



export default themes.reducer