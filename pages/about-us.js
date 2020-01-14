import HomeLayout from '../layouts/HomeLayout'
import AboutUsComponent from '../components/AboutUs'
import LastestNewsBlock from '../components/LastestNewsBlock'

const pageTitle =
  'CoinGeek is your trusted source for all of the latest cryptocurrency news.'

const AboutUs = () => {
  return (
    <HomeLayout>
      <AboutUsComponent pageTitle={pageTitle} />
      <LastestNewsBlock />
    </HomeLayout>
  )
}

export default AboutUs
