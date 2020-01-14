import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

import HomeLayout from '../layouts/HomeLayout'
import Slider from '../components/Slider'
import FooterHome from '../components/FooterHome'
import LastestNewsBlock from '../components/LastestNewsBlock'
import BusinessAndTech from '../components/BusinessAndTech'
import ConferencesEvents from '../components/ConferencesEvents'
import InterviewsAndFeatures from '../components/InterviewsAndFeatures'

const Home = () => {
  return (
    <HomeLayout>
      <Slider />
      <LastestNewsBlock />
      <BusinessAndTech />
      <InterviewsAndFeatures />
      <ConferencesEvents />
      <FooterHome />
    </HomeLayout>
  )
}

export default Home
