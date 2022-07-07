import { combineReducers } from 'redux'

import recipesReducer from './recipes'

function rootReducer() {
  combineReducers({
    recipes: recipesReducer,
  })
} 

export default rootReducer