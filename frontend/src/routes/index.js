import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgotPassowrd from "../pages/ForgotPassowrd";
import SignUp from "../pages/SignUp";
import AdminPanel from "../pages/AdminPanel";
import { AllUser } from "../pages/AllUser";
import { AllProduct } from "../pages/AllProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forget-password",
        element: <ForgotPassowrd />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },{
        path:"admin-panel",
        element:<AdminPanel/>,
        children:[
          {
            path:"all-users",
            element:<AllUser/>
          },{
            path:"all-products",
            element:<AllProduct/>
          }
        ]
      }
    ],
  },
]);

export default router;
