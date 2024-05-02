import { ReactElement, useEffect, useState, FC } from 'react'
import './App.css'

type Recipe = {
  id: Number,
  name: String,
  ingredients: Array<string>,
  instructions: Array<string>,
  prepTimeMinutes: Number,
  cookTimeMinutes: Number,
  servings: Number,
  difficulty: String,
  cuisine: String,
  caloriesPerServing: Number,
  tags: Array<string>,
  userId: number,
  image: string,
  rating: number,
  reviewCount: number,
  mealType: Array<string>
}

type Recipes = {
  limit: number,
  recipes: Array<Recipe>,
  skip: number,
  total: number
}

const INIT_STATE = {
  limit: 0,
  recipes: [],
  skip: 0,
  total: 0
}

type IRecipesItemProps = {
  recipe: Recipe
};

const RecipesItem: FC<IRecipesItemProps> = ({recipe: recipe}) => {
  const { 
    name,
    caloriesPerServing,
    image
  } = recipe;
  return (
    <div>
      <figure>
        <img src={image} alt={name.toString()} width="150" height="auto"/>
      </figure>
      <h3>{name}</h3>
      <p>Калорий на порцию: {caloriesPerServing.toString()}</p>
    </div>
  )
}

function App() {
  const [recipes, setRecipes] = useState<Recipes>(INIT_STATE);

  const getRecipes = async () => {
    const response = await fetch('https://dummyjson.com/recipes').then((res) => {
      return res.json();
    })
    setRecipes(response);
  }
  useEffect(()=> {
    getRecipes()
  }, [])

  return (
    <div>
      {
        recipes.recipes.map((recipe) => <RecipesItem key={recipe.id.toString()} recipe={recipe} /> )
      }
    </div>
  )
}

export default App
