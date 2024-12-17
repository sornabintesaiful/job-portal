import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/register/Register";
import SignIn from "../pages/register/SignIn";


const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout />,
    errorElement: <h2> route not found</h2>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      }
    ]
  }
]) 
 

export default router;