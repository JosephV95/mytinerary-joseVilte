import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Cities from "./pages/Cities";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {path:'/', element: <MainLayout />, children:[
    {path:'/', element: <Home/>},
    {path:'/cities', element: <Cities />}
  ]},
])

function App() {
  return (
    <>
      {/* <MainLayout>
        <Home />
      </MainLayout> */}
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
