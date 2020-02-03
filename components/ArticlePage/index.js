import { useEffect, useState } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import _get from 'lodash/get'
import LastestNewsBlock from '../LastestNewsBlock'
import { getNewsDetail } from '../LastestNewsBlock/mockLastNews'
import ArticleMeta from '../ArticleMeta'
import BlockHeader from '../BlockHeader'
import { parseHtmlString } from '../../utils/functions'
import styles from './styles.scss'

const ArticlePage = props => {
  const [article, setArticle] = useState(null)
  useEffect(() => {
    const slug = _get(Router, 'router.query.article', '')
    const article = getNewsDetail(slug)

    if (!article) {
      Router.replace('/404')
    }

    setArticle(article)
  }, [Router])

  if (!article) return null
  const {
    title,
    image,
    author,
    category,
    categoryUrl,
    datetime,
    content,
    tags,
  } = article

  return (
    <div className={styles.articlePage}>
      <div className="text-center mb-2">
        <img className="lazyload-loaded" src={image} alt="" />
      </div>
      <div className="container">
        <div className="row align-items-start justify-content-between">
          <div className="col-12">
            <p className={styles.breadcrumbs}>
              <Link href="/">
                <a>Home</a>
              </Link>
              <span>
                {' » '}
                <Link href={`/news/category/${categoryUrl}`}>
                  <a>{category}</a>
                </Link>
                <span className="breadcrumb_last"> » {title}</span>
              </span>
            </p>
          </div>
          <div className="col-12 col-md-12 col-lg-8">
            <article>
              <header>
                <div className="row align-items-center justify-content-between">
                  <div className="col-12 order-last">
                    <h1 className={`${styles.title} mb-4 py-2`}>{title}</h1>
                  </div>
                  <div className="col-12 order-first">
                    <div className="row align-items-center justify-content-between mb-3">
                      <div className="col">
                        <ArticleMeta
                          datetime={datetime}
                          category={category}
                          isLarge
                        />
                      </div>
                      <div className="col-auto">
                        <Link href={author.url}>
                          <a className={styles.author}>
                            <span className="font-weight-bold">
                              {`${author.name} `}
                            </span>
                            <img
                              className="lazyload-loaded"
                              src={author.image}
                              alt=""
                            />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <div className="longContent">{parseHtmlString(content)}</div>
              <footer>
                <BlockHeader title="Tagged" />
                <div className={styles.tagLinks}>
                  <ul className="mx-0 my-3 p-0">
                    {tags.map(item => (
                      <li key={item.slug}>
                        <Link href={`/news/tag/${item.slug}`}>
                          <a>{item.title}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </footer>
            </article>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <LastestNewsBlock limit={4} isVerticle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticlePage
