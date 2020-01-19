import HomeLayout from '../layouts/HomeLayout'
import LastestNewsBlock from '../components/LastestNewsBlock'
import TermsOfUseComponent from '../components/TermsOfUse'
import NewLetterBlock from '../components/NewLetterBlock'

const pageTitle = 'Terms of use'

const TermsOfUse = () => {
  return (
    <HomeLayout title="Terms of Use">
      <TermsOfUseComponent pageTitle={pageTitle} />
      <LastestNewsBlock limit={4} isShowAds={false} />
      <NewLetterBlock />
    </HomeLayout>
  )
}

export default TermsOfUse
