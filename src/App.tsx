import { useEffect, useState, FC } from 'react'
import './App.css'

type Recipe = {
  id: number,
  name: String,
  ingredients: string[],
  instructions: string[],
  prepTimeMinutes: number,
  cookTimeMinutes: number,
  servings: number,
  difficulty: string,
  cuisine: string,
  caloriesPerServing: number,
  tags: string[],
  userId: number,
  image: string,
  rating: number,
  reviewCount: number,
  mealType: string[]
}

type Recipes = {
  limit: number,
  recipes: Recipe[],
  skip: number,
  total: number
}

const INIT_STATE: Recipes = {
  limit: 0,
  recipes: [],
  skip: 0,
  total: 0
}

type IRecipesItemProps = {
  recipe: Recipe
};

const RecipesItem: FC<IRecipesItemProps> = ({recipe}) => {
  const { 
    name,
    caloriesPerServing,
    image
  } = recipe;
  return (
    <div className='flex shadow-lg my-3 p-5'>
      <figure>
        <img src={image} alt={name.toString()} width="150" height="auto"/>
      </figure>
      <div className='px-4'>
        <h3 className='font-bold'>{name}</h3>
        <p>Калорий на порцию: {caloriesPerServing.toString()}</p>
      </div>
    </div>
  )
}

function App() {
  const [recipes, setRecipes] = useState(INIT_STATE);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const getRecipes = async () => {
    setIsLoading(true)
    setIsError(false)
    try {
      const response = await fetch('https://dummyjson.com/recipes').then(async res => {
        await new Promise(resolve => setTimeout(resolve, 5000))
        return res
      })
      const result = await response.json();
      setRecipes(result);
      setIsLoading(false)
      
    } catch (error) {
      setIsError(true)
      setIsLoading(false)
    }
  }

  const searchRecipe = async (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const inputValue = formData.get('searchRecipe')

    try {
      const response = await fetch(`https://dummyjson.com/recipes/search?q=${inputValue}`)
      const result = await response.json();
      setRecipes(result);
      setIsLoading(false)
      
    } catch (error) {
      setIsError(true)
      setIsLoading(false)
    }

  }

  useEffect(()=> {
    getRecipes()
  }, [])

  return (
    <div className='container mx-auto px-4'>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <form onSubmit={searchRecipe} >
        <input type="text" name='searchRecipe' className='border-solid border-2' />
      </form>

      {isError && <div>Error
        <button onClick={getRecipes}>reload</button>
        </div>
      }

      {
        isLoading && <div>Loading</div>
      }
      
      {
        recipes.recipes.map((recipe) => <RecipesItem key={recipe.id.toString()} recipe={recipe} /> )
      }
    </div>
  )
}

export default App
