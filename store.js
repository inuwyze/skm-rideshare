import { configureStore } from '@reduxjs/toolkit'
import themes from './features/themes'


const store = configureStore({
    reducer: {
      // Define a top-level state field named `todos`, handled by `todosReducer`
      themes: themes,
      
    }
  })

  

export default store