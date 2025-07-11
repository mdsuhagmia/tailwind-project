import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './components/root/RootLayout'
import Features from './pages/Features'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

let routerning = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/features' element={<Features/>}></Route>
    <Route path='/features/blog' element={<Blog/>}></Route>
    <Route path='/features/blog/contact' element={<Contact/>}></Route>
  </Route>
))

function App() {

  return (
    <>
      <RouterProvider router={routerning}></RouterProvider>
    </>
  )
}

export default App
