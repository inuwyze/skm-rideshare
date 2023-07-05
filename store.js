import { configureStore } from '@reduxjs/toolkit'
import themes from './features/themes'
import keyboardStatus from './features/keyboardStatus'
import navInfo from './features/navInfo'

const store = configureStore({
    reducer: {
      // Define a top-level state field named `todos`, handled by `todosReducer`
      themes: themes,
      keyboardStatus: keyboardStatus,
      navInfo:navInfo,
    }
  })

  

export default store