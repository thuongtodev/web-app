import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Header from '../components/Header'
import Meta from '../components/Meta'
import Footer from '../components/Footer/Footer'

const HomeLayout = ({ children, title }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  })

  return (
    <div>
      <Meta title={title} />
      <Header />
      {/* <div style={{ height: isMobile ? 70 : 48 }}></div> */}
      <div style={{ paddingTop: '3rem' }}>{children}</div>
      <Footer />
    </div>
  )
}

export default HomeLayout
