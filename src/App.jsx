import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Cities from "./pages/Cities/Cities";
import Home from "./pages/Home";
import CityDetails from "./pages/CityDetail/CityDetail"
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {path:'/', element: <MainLayout />, children:[
    {path:'/', element: <Home/>},
    {path:'/cities', element: <Cities />},
    {path:'/cities/:id', element: <CityDetails/>}
  ]},
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
