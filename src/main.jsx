import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Main from "./Components/Main/Main";
import ErrorPage from "./Components/Error/ErrorPage";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import AuthProvider from "./Provider/AuthProvider";
import Checkout from "./Components/Checkout/Checkout";
import AddService from "./Components/Car_Services/AddService";
import ServiceDetails from "./Components/Car_Services/ServiceDetails";
import MyOrders from "./Components/Orders/MyOrders";
import PrivateRoute from "./Components/Routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/SignUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/AddService",
        element: <AddService></AddService>,
      },
      {
        path: "/Services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "/Checkout/:id",
        element: <Checkout></Checkout>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "/MyOrders",
        element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
