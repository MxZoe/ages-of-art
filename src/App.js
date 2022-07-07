
// App.js
import React from 'react'
import { useSelector } from 'react-redux'  
import { recipesSelector } from './slices/recipes'	

function App(){
  const { recipes, loading, hasErrors } = useSelector(recipesSelector)	
  console.log('Recipes: ', recipes);
  return (
      <section>
        <h1>Recipes</h1>
      </section>
  )
} 


export default App