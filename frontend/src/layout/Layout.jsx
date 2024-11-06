import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'
import Routes from '../routes/Routes';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>

  )
}

export default Layout
