import HomeLayout from '../../layouts/HomeLayout'
import AuthorsComponents from '../../components/Authors'
import NewLetterBlock from '../../components/NewLetterBlock'
import StickySocial from '../../components/StickySocial'

const pageTitle =
  'Coingeek is your trusted source for all of the latest cryptocurrency news.'

const Authors = () => {
  return (
    <HomeLayout title="Editorial Team">
      <AuthorsComponents pageTitle={pageTitle} />
      <NewLetterBlock />
      <StickySocial />
    </HomeLayout>
  )
}

export default Authors
