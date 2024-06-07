// const searchRecipe = async (evt: any) => {
//   evt.preventDefault();
//   const formData = new FormData(evt.target);
//   const inputValue = formData.get("searchRecipe");

//   try {
//     const response = await fetch(
//       `https://dummyjson.com/recipes/search?q=${inputValue}`
//     );
//     const result = await response.json();
//     // setRecipes(result);
//     setIsLoading(false);
//   } catch (error) {
//     setIsError(true);
//     setIsLoading(false);
//   }
// };
// export default RecipeSearch = () => {
//   return (
//     <>
//       {/* {bookmarks} */}
//       <form onSubmit={searchRecipe}>
//         <input
//           type="text"
//           name="searchRecipe"
//           className="border-solid border-2"
//         />
//       </form>
//     </>
//   );
// };
