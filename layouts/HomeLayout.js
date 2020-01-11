import React from 'react'
import Header from '../components/Header'
import Meta from '../components/Meta'
import Footer from '../components/Footer/Footer'

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Meta />
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default HomeLayout
