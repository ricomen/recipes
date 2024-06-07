import {
    Link,
    Outlet
  } from "react-router-dom";
  
const Root = () => {
  return (
    <>
      <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/recipes">Ricepes</Link>
      <Outlet />
    </>
  );
};

export default Root;