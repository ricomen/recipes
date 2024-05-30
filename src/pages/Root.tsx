import {
    Link,
    Outlet
  } from "react-router-dom";
  
const Root = () => {
  return (
    <>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/recipes">Ricepes</Link>
          </li>
          {/* <li className="nav__item">
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/recipe">Recipe</Link>
          </li> */}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Root;