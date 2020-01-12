import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

import HomeLayout from '../layouts/HomeLayout'
import Slider from '../components/Slider'
import FooterHome from '../components/FooterHome'
import LastestNewsBlock from '../components/LastestNewsBlock'
import BusinessAndTechBlock from '../components/BusinessAndTechBlock'

const Home = () => {
  return (
    <HomeLayout>
      <Slider />
      <LastestNewsBlock />
      <BusinessAndTechBlock />
      <FooterHome />
    </HomeLayout>
  )
}

export default Home
