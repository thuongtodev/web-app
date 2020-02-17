import React from 'react'
import { useRouter } from 'next/router'
import HomeLayout from '../../layouts/HomeLayout'
import FooterHome from '../../components/FooterHome'
import LastestNewsBlock from '../../components/LastestNewsBlock'
import BusinessAndTech from '../../components/BusinessAndTech'
import ConferencesEvents from '../../components/ConferencesEvents'
import NewsByCategory from '../../components/NewsByCategory'
import StickySocial from '../../components/StickySocial'

const News = () => {
  const router = useRouter()
  const query = router.query
  if (query.category) {
    const title = `Blockchain ${query.category} news`
    return (
      <HomeLayout title={title}>
        <NewsByCategory />
        <StickySocial />
      </HomeLayout>
    )
  }

  return (
    <HomeLayout title="Cryptocurrency News | CoinGeek">
      <LastestNewsBlock />
      <BusinessAndTech />
      <ConferencesEvents />
      <FooterHome />
      <StickySocial />
    </HomeLayout>
  )
}

export default News
