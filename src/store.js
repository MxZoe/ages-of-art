import rootReducer from './slices'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
  })

export default store