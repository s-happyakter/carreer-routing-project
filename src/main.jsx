import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Companent/Root/Root';
import Home from './Companent/Home/Home';
import Footer from './Companent/Footer/Footer';
import Appliedjobs from './Companent/ApliedJobs/Appliedjobs';
import ErrorPage from './Companent/Errorpage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>

      },
      {
        path:'/',
        element:<Footer></Footer>
      },
      {
        path:'/applied',
        element: <Appliedjobs></Appliedjobs>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
