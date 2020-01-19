import _isEmpty from 'lodash/isEmpty'
import _get from 'lodash/get'
import Router from 'next/router'
import AuthorProfile from '../AuthorProfile'
import GridNews from '../GridNews'
import { getAuthor } from './mockData'
import styles from './styles.scss'
import { useEffect, useState } from 'react'

const AuthorPage = props => {
  const [author, setAuthor] = useState(null)
  useEffect(() => {
    const slug = _get(Router, 'router.query.author', '')
    const author = getAuthor(slug)
    if (!author) {
      Router.replace('/404')
    }
    setAuthor(author)
  }, [Router])

  if (!author) return null
  const { articles, name } = author

  return (
    <div className={styles.authorPage}>
      <AuthorProfile author={author} isDetail />
      <div className="container pt-3">
        <GridNews
          title={`Ariticles by ${name}:`}
          news={articles}
          justifyContent="center"
        />
      </div>
    </div>
  )
}

export default AuthorPage
