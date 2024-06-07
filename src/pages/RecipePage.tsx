import { useEffect, FC } from "react";
import { useParams } from "react-router-dom";
import { useRecipe } from "../hooks/useRecipe";


const RecipesPage: FC = () => {
    const { id } = useParams();
    const {fetch, recipe} = useRecipe()
    console.log(id)


    useEffect(() => {
      fetch(id)
    }, [])
    return (
    <>
      <img src={recipe.image} width="200" height="auto" alt={recipe.name} />
      <div>Количество калорий {recipe.caloriesPerServing}</div>
      <div>Сложность {recipe.difficulty}</div>
      <div>Ингридиенты: {recipe.ingredients?.join()}</div>
      <div>Количество калорий {recipe.caloriesPerServing}</div>
    </>
  );
};

export default RecipesPage;
