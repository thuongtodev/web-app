import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Header from '../components/Header'
import Meta from '../components/Meta'
import Footer from '../components/Footer/Footer'

const HomeLayout = ({ children, title = 'CoinGeek' }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  })
  const style = {
    paddingTop: isMobile ? '5rem' : '3rem',
  }

  return (
    <div>
      <Meta title={title} />
      <Header />
      {/* <div style={{ height: isMobile ? 70 : 0 }}></div> */}
      <div style={style}>{children}</div>
      <Footer />
    </div>
  )
}

export default HomeLayout
