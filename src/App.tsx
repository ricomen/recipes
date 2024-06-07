import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RecipesPage from "./pages/RecipesPage"
import RecipePage from "./pages/RecipePage"
import Root from "./pages/Root"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/recipes" element={<RecipesPage />}></Route>
        <Route path="/recipe/:id" element={<RecipePage />}> </Route>
      </Route>
    )
  );
  return (
    <div className="container mx-auto px-4">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
