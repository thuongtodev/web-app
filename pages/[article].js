import HomeLayout from '../layouts/HomeLayout'
import ArticlePage from '../components/ArticlePage'
import NewLetterBlock from '../components/NewLetterBlock'

const Article = () => {
  return (
    <HomeLayout>
      <ArticlePage />
      <NewLetterBlock />
    </HomeLayout>
  )
}

export default Article
