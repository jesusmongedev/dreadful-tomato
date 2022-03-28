import React from 'react'
import Footer from '../Footer/Index'
import Header from '../Header'
import HomeMainContent from '../HomeMainContent'

const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <HomeMainContent />
      <Footer />
    </div>
  )
}

export default Layout
