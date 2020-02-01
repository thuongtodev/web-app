import React, { useEffect, useState } from 'react'
import _get from 'lodash/get'
import Router from 'next/router'
import FullWidthHeader from '../FullWidthHeader'
import RightSidebar from '../RightSidebar/RightSidebar'
import { getBitcoin101Article } from './mockData'
import { parseHtmlString } from '../../utils/functions'

const formatRelatedArticles = relatedArticles => {
  let formattedArr = []

  formattedArr = relatedArticles.map(item => ({
    subTitle: item.title,
    url: `bitcoin101/${item.slug}`,
  }))

  return formattedArr
}

const Bitcoin101Article = props => {
  const { pageTitle } = props
  const [article, setArticle] = useState(null)
  useEffect(() => {
    const slug = _get(Router, 'router.query.article', '')
    const article = getBitcoin101Article(slug)

    if (!article) {
      Router.replace('/404')
    }

    setArticle(article)
  }, [Router])

  if (!article) return null
  const { image, content, relatedArticles, title } = article

  return (
    <article>
      <FullWidthHeader title={title} bgImage={image} />
      <div className="wrapper">
        <div className="container">
          <div className="row align-items-start justify-content-center mb-5">
            <div className="col-10 col-md-9 longContent">
              {parseHtmlString(content)}
            </div>
            <div className="col-9 col-md-3">
              <RightSidebar
                title={pageTitle}
                sidebarItems={formatRelatedArticles(relatedArticles)}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Bitcoin101Article
