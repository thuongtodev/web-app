import HomeLayout from '../layouts/HomeLayout'
import AboutUsComponent from '../components/AboutUs'
import LastestNewsBlock from '../components/LastestNewsBlock'
import NewLetterBlock from '../components/NewLetterBlock'

const pageTitle =
  'CoinGeek is your trusted source for all of the latest cryptocurrency news.'

const AboutUs = () => {
  return (
    <HomeLayout title="About CoinGeek">
      <AboutUsComponent pageTitle={pageTitle} />
      <LastestNewsBlock limit={4} isShowAds={false} />
      <NewLetterBlock />
    </HomeLayout>
  )
}

export default AboutUs
