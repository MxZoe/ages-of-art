import React, { useEffect } from 'react'	
import { useDispatch, useSelector } from 'react-redux'		
import { fetchRecipes, recipesSelector } from './slices/recipes'

function App(){
  // initialize the redux hook
  const dispatch = useDispatch()		
  //const { recipes, loading, hasErrors } = useSelector(recipesSelector)

  // dispatch our thunk when component first mounts
  useEffect(() => {
    dispatch(fetchRecipes())
  }, [dispatch])

  return (
    <section>
      <h1>Recipes</h1>
    </section>
  )
}

export default App