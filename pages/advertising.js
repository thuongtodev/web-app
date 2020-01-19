import HomeLayout from '../layouts/HomeLayout'
import LastestNewsBlock from '../components/LastestNewsBlock'
import AdvertisingComponent from '../components/Advertising'
import NewLetterBlock from '../components/NewLetterBlock'

const pageTitle =
  'Your home for valuable advertising and sponsorships opportunities for Bitcoin and Cryptocurrency enthusiasts.'

const Advertising = () => {
  return (
    <HomeLayout title="Advertisting">
      <AdvertisingComponent pageTitle={pageTitle} />
      <LastestNewsBlock limit={4} isShowAds={false} />
      <NewLetterBlock />
    </HomeLayout>
  )
}

export default Advertising
