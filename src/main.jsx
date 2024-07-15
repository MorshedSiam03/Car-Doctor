import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Main from './Components/Main/Main';
import ErrorPage from './Components/Error/ErrorPage';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:
  [
    {
      path:"/",
      element:<Home></Home>
    },
    {
      path:"/Login",
      element: <Login></Login>
    },
    {
      path:"/SignUp",
      element: <SignUp></SignUp>
    },
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
