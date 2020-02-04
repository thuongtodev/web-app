import React from 'react'
import { useRouter } from 'next/router'
import HomeLayout from '../../layouts/HomeLayout'
import FooterHome from '../../components/FooterHome'
import LastestNewsBlock from '../../components/LastestNewsBlock'
import BusinessAndTech from '../../components/BusinessAndTech'
import ConferencesEvents from '../../components/ConferencesEvents'
import NewsByCategory from '../../components/NewsByCategory'

const News = () => {
  const router = useRouter()
  const query = router.query
  if (query.category) {
    return (
      <HomeLayout>
        <NewsByCategory />
      </HomeLayout>
    )
  }

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
