import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

import HomeLayout from '../layouts/HomeLayout'
import Slider from '../components/Slider'
import FooterHome from '../components/FooterHome'

const Home = () => {
  return (
    <HomeLayout>
      <Slider />
      <div>Home Page</div>
      <div style={{ height: 200 }}></div>
      <FooterHome />
    </HomeLayout>
  )
}

export default Home
