import React from 'react'

import HomeLayout from '../../layouts/HomeLayout'
import FooterHome from '../../components/FooterHome'
import LastestNewsBlock from '../../components/LastestNewsBlock'
import BusinessAndTech from '../../components/BusinessAndTech'
import ConferencesEvents from '../../components/ConferencesEvents'

const News = () => {
  return (
    <HomeLayout>
      <LastestNewsBlock />
      <BusinessAndTech />
      <ConferencesEvents />
      <FooterHome />
    </HomeLayout>
  )
}

export default News
