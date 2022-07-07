import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  hasErrors: false,
  recipes: [],
}

// A slice for recipes with our 3 reducers
const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    getRecipes: state => {
      state.loading = true
    },
    getRecipesSuccess: (state, { payload }) => {
      state.recipes = payload
      state.loading = false
      state.hasErrors = false
    },
    getRecipesFailure: state => {
      state.loading = false
      state.hasErrors = true
    },
  },
})
export const recipesSelector = (state)=> state.recipes;
// The reducer
export default recipesSlice.reducer