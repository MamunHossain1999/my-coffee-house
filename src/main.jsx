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
import CoffeeCard from './components/CoffeeCard';


const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader: ()=> fetch('../categories.json'),
        children: [
         {
          path: '/',
          element: <CoffeeCard></CoffeeCard>,
          loader: ()=> fetch('../coffees.json')
         },
         {
          path: '/category/:category',
          element: <CoffeeCard></CoffeeCard>,
          loader: ()=> fetch('../coffees.json')
         }
        ]
      },
      {
        path:'/coffees',
        element: <Coffees></Coffees>,
        loader: ()=> fetch('../coffees.json')
      },
      {
        path:'/dashBoard',
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
