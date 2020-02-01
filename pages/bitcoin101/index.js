import HomeLayout from '../../layouts/HomeLayout'
import Bitcoin101Component from '../../components/Bitcoin101'
import NewLetterBlock from '../../components/NewLetterBlock'
import LastestNewsBlock from '../../components/LastestNewsBlock'

const pageTitle = 'Bitcoin for beginers'

const Bitcoin101 = () => {
  return (
    <HomeLayout title={pageTitle}>
      <Bitcoin101Component pageTitle={pageTitle} />
      <LastestNewsBlock limit={4} isShowAds={false} />
      <NewLetterBlock />
    </HomeLayout>
  )
}

export default Bitcoin101
