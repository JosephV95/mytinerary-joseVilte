import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Cities from "./pages/Cities/Cities";
import Home from "./pages/Home";
import CityDetails from "./pages/CityDetail/CityDetail"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLogin from "./pages/UserLogin/UserRegister";
import UserRegister from "./pages/UserLogin/UserRegister";

const router = createBrowserRouter([
  {path:'/', element: <MainLayout />, children:[
    {path:'/', element: <Home/>},
    {path:'/cities', element: <Cities />},
    {path:'/cities/:id', element: <CityDetails/>}
  ]},
  {
    path:'/user/register', element: <UserRegister />
  },
  {
    path:'/user/login', element: <UserLogin />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
