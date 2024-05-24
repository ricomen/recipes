import { useEffect, useState } from 'react'
import RecipeItem from './components/RecipeItem';
import './App.css'
import { useRecipe } from './hooks/useRecipe';
import { Recipe } from './types/Recipe';


function App() {
  const {recipes, fetch, isError, isLoading, bookmarks} = useRecipe();

  // const searchRecipe = async (evt: any) => {
  //   evt.preventDefault();
  //   const formData = new FormData(evt.target);
  //   const inputValue = formData.get('searchRecipe')

  //   try {
  //     const response = await fetch(`https://dummyjson.com/recipes/search?q=${inputValue}`)
  //     const result = await response.json();
  //     // setRecipes(result);
  //     setIsLoading(false)
      
  //   } catch (error) {
  //     setIsError(true)
  //     setIsLoading(false)
  //   }

  // }

  useEffect(()=> {
    fetch()
  }, [])

  return (
    <div className='container mx-auto px-4'>
      {bookmarks}
      {/* <form onSubmit={searchRecipe} >
        <input type="text" name='searchRecipe' className='border-solid border-2' />
      </form> */}

      {isError && (
        <div>Error
          <button onClick={() => fetch()}>reload</button>
        </div>
      )}

      {
        isLoading && <div>Loading</div>
      }
      
      {
        recipes.recipes.map((recipe: Recipe) => <RecipeItem key={recipe.id} recipe={recipe} /> )
      }
    </div>
  )
}

export default App
