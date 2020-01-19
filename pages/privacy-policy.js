import HomeLayout from '../layouts/HomeLayout'
import LastestNewsBlock from '../components/LastestNewsBlock'
import PrivacyPolicyComponent from '../components/PrivacyPolicy'
import NewLetterBlock from '../components/NewLetterBlock'

const pageTitle = 'CoinGeek privacy policy'

const PrivacyPolicy = () => {
  return (
    <HomeLayout title="Privacy Policy">
      <PrivacyPolicyComponent pageTitle={pageTitle} />
      <LastestNewsBlock limit={4} isShowAds={false} />
      <NewLetterBlock />
    </HomeLayout>
  )
}

export default PrivacyPolicy
