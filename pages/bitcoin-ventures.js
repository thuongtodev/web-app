import HomeLayout from '../layouts/HomeLayout'
import LastestNewsBlock from '../components/LastestNewsBlock'
import BitcoinVenturesComponent from '../components/BitcoinVentures'
import NewLetterBlock from '../components/NewLetterBlock'

const pageTitle = [
  'Bitcoin Ventures',
  'Helping you ignite the future of bitcoin',
]

const BitcoinVentures = () => {
  return (
    <HomeLayout>
      <BitcoinVenturesComponent pageTitle={pageTitle} />
      <LastestNewsBlock limit={4} isShowAds={false} />
      <NewLetterBlock />
    </HomeLayout>
  )
}

export default BitcoinVentures
