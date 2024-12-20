import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Cities from "./pages/Cities/Cities";
import Home from "./pages/Home";
import CityDetails from "./pages/CityDetail/CityDetail"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLogin from "./pages/UserLogin/UserLogin";
import UserRegister from "./pages/UserLogin/UserRegister";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import userActions from "./store/actions/authActions";
import ProfileUser from "./pages/ProfileUser/ProfileUser";

import AOS from 'aos';
import 'aos/dist/aos.css';

const router = createBrowserRouter([
  {path:'/', element: <MainLayout />, children:[
    {path:'/', element: <Home/>},
    {path:'/cities', element: <Cities />},
    {path:'/cities/:id', element: <CityDetails/>},
    {path:'/profile/:id', element: <ProfileUser/>},
    {path:'/user/login', element: <UserLogin />},
    {path:'/user/register', element: <UserRegister />}
  ]}
])

function App() {

  // //! Primero se verificara si el usuario ya esta loguado usando el token guardado en el localStorage
  const dispatch = useDispatch();
  useEffect(()=>{
    if(localStorage.getItem('token')){
      dispatch(userActions.user_authenticate())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  } , [] )

  //todo Inicializo libreria AOS para los efectos 
  AOS.init();

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
