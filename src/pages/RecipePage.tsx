import { useEffect, FC } from "react";

import { RecipeDetail } from "../types/Recipe";
import { useRecipe } from "../hooks/useRecipe";
import { useParams } from "react-router-dom";

const RecipesPage: FC = () => {
    const { id } = useParams();
    const {fetchRecipe, recipeDetail} = useRecipe()
    console.log(recipeDetail)
    // const {} = recipeDetail;
    useEffect(() => {
      fetchRecipe(id)
    }, [])
    return (
    <>
      <img src={recipeDetail.image} width="200" height="auto" alt={recipeDetail.name} />
      <div>Количество калорий {recipeDetail.caloriesPerServing}</div>
      <div>Сложность {recipeDetail.difficult}</div>
      <div>Ингридиенты: {recipeDetail.ingredients?.join()}</div>
      <div>Количество калорий {recipeDetail.caloriesPerServing}</div>
    </>
  );
};

export default RecipesPage;
