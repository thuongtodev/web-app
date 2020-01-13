import React from 'react'
import Header from '../components/Header'
import Meta from '../components/Meta'

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Meta />
      <Header />
      {children}
    </div>
  )
}

export default HomeLayout
