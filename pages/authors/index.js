import HomeLayout from '../../layouts/HomeLayout'
import Authors from '../../components/Authors'
import NewLetterBlock from '../../components/NewLetterBlock'

const pageTitle =
  'Coingeek is your trusted source for all of the latest cryptocurrency news.'

const AboutUs = () => {
  return (
    <HomeLayout>
      <Authors pageTitle={pageTitle} />
      <NewLetterBlock />
    </HomeLayout>
  )
}

export default AboutUs
