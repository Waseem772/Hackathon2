import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import Layout from '../component/layout'
// import { LogIn } from '../pages/LogIn'
import { ResponsiveAppBar } from '../src/component/Navbar2'
// import { LogIn } from '../src/pages/LogIn'
import { Login } from '../src/pagese/Login'
import { Signup } from '../src/pagese/Signup'
// import { Navbar2 } from '../component/Navbar2'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route>

      <Route path="" element={<ResponsiveAppBar />} />
      <Route path="Login" element={<Login />} />
      <Route path="Signup" element={<Signup />} />



    </Route >
  )
)


export const Router_app = () => {
  return (
    <RouterProvider router={router} />
  )
}
