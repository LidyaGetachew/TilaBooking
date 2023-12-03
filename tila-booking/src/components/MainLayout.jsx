import React from 'react'
import Header from './Tour/Header'
import Footer from './Footer'
import {Outlet} from "react-router-dom"
const MainLayout = () => {
  return (
    <>
    <Header />
     <Outlet />
    <Footer />
    </>
  )
}

export default MainLayout