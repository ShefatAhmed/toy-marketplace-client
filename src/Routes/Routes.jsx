import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../Login/Login";
import SighUp from "../SignUp/SighUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <SighUp></SighUp>
        }
      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);

export default router;