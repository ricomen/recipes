import { FC } from 'react'
import { Recipe } from '../types/Recipe';
import { useRecipeList } from '../hooks/useRecipeList';
import { Link } from "react-router-dom";

type IRecipeItemProps = {
  recipe: Recipe;

};

const RecipesItem: FC<IRecipeItemProps> = ({ recipe }) => {
  const { name, caloriesPerServing, image, id } = recipe;
  const { addToBookmarks, removeFromBookmarks, bookmarks } = useRecipeList();
  const isBookmarked = bookmarks.includes(id);

  return (
  
    <div className="flex shadow-lg my-3 p-5">
      <figure>
        <img src={image} alt={name} width="150" height="auto" />
      </figure>
      <div className="px-4">
        <h3 className="font-bold">{name}</h3>
        <p>Калорий на порцию: {caloriesPerServing}</p>
      </div>
      <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to={`/recipe/${id}`}>Открыть</Link>

      {!isBookmarked && <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => addToBookmarks(id)}>В закладки</button>}
      
      {isBookmarked && <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => removeFromBookmarks(id)}>Убрать из закладок</button>}
    </div>
  );
};

export default RecipesItem;
