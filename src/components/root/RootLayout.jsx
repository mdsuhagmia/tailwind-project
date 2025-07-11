import React from 'react'
import Footer from '../Footer'
import Menu from '../Menu'
import SubFooter from '../SubFooter'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
     <Menu/>
     <Outlet/>
     <SubFooter/>
     <Footer/>
    </>
  )
}

export default RootLayout