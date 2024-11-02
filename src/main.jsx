import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Coffees from './pages/Coffees';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DashBoard from './pages/DashBoard';


const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'coffees',
        element: <Coffees></Coffees>
      },
      {
        path:'dashBoard',
        element: <DashBoard></DashBoard>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
