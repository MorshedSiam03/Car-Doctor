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
import Services from "./Components/Car_Services/Services";
import AddProducts from "./Components/Products/AddProducts";
import AddMember from "./Components/Team/AddMember";
import AddReview from "./Components/Testimonial/AddReview";
import PopularProducts from "./Components/Products/PopularProducts";
import DarkModeToggle from "./Components/DarkMode/DarkModeToggle";

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
        path: "/Services",
        element: <Services></Services>,
      },
      {
        path: "/Services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://car-doctor-server-eosin-sigma.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/Checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://car-doctor-server-eosin-sigma.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/MyOrders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "/AddProducts",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/Products",
        element: <PopularProducts></PopularProducts>,
      },
      {
        path: "/AddMember",
        element: <AddMember></AddMember>,
      },
      {
        path: "/AddReview",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DarkModeToggle>
        <RouterProvider router={router} />
      </DarkModeToggle>
    </AuthProvider>
  </React.StrictMode>
);
