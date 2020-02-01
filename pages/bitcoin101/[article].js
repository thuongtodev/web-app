import HomeLayout from '../../layouts/HomeLayout'
import Bitcoin101ArticleComponent from '../../components/Bitcoin101Article'
import LastestNewsBlock from '../../components/LastestNewsBlock'
import NewLetterBlock from '../../components/NewLetterBlock'

const pageTitle = 'Bitcoin for beginers'

const Bitcoin101Article = () => {
  return (
    <HomeLayout>
      <Bitcoin101ArticleComponent pageTitle={pageTitle} />
      <LastestNewsBlock limit={4} isShowAds={false} />
      <NewLetterBlock />
    </HomeLayout>
  )
}

export default Bitcoin101Article
