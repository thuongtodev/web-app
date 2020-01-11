import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

import HomeLayout from '../layouts/HomeLayout'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <HomeLayout>
      {/* <div>Home Page</div> */}
      <Slider />
    </HomeLayout>
  )
}

export default Home
