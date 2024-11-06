import React from 'react'

import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Service from '../pages/Service'
import {Login} from '../pages/Login'
import Doctor from '../pages/Doctor/Doctor'
import DoctorDetails from '../pages/Doctor/DoctorDetails'
import Signup from '../pages/Signup'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import MyAccount from '../Dashboard/userAccount/MyAccount.jsx'
import Dashboard from '../Dashboard/doctorAccount/Dasboard.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      
    },
        {
          path: "/doctor",
          element: <Doctor/>,
        
      },
      {
        path: "/service",
        element: <Service/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path:"/doctor/:doctorId",
        element:<DoctorDetails />
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<Signup/>
      },
      {
        path:"/user/profile/me",
        element:<ProtectedRoute allowedRoles={["patient"]}><MyAccount /></ProtectedRoute>
      },
      {
        path:"/doctor/profile/me",
        element:<ProtectedRoute allowedRoles={["Doctor"]}><Dashboard /></ProtectedRoute>
      },
      

  ]);
  return (<>
    
     <RouterProvider router={router}/>
  
    </>
  )
}

export default Routes