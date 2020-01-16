import React from 'react'
import PropTypes from 'prop-types'
import lastestNews, { mockAds } from './mockLastNews'
import BlockHeader from '../BlockHeader'
import Article from '../Article'
import styles from './styles.scss'

const LastestNewsBlock = props => {
  const { limit, isShowAds } = props

  return (
    <div className={styles.lastNewsWrapper}>
      <div className="container">
        {isShowAds && (
          <div className="row align-items-start justify-content-between">
            <div className="col-12 col-md-8">
              <BlockHeader title="Lastest Bitcoin News" />
              <div className="row align-items-start justify-content-between">
                {lastestNews.map((item, index) => {
                  if (index >= limit) return null
                  const { id } = item
                  return (
                    <div key={id} className="col-6 col-md-6 col-lg-6 mb-3">
                      <Article {...item} />
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="home-banner__container overflow-hidden position-relative">
                <a
                  href={mockAds.url}
                  target="_blank"
                  className="cgRadius d-block overflow-hidden"
                >
                  <img
                    className="img-fluid lazyload-loaded"
                    src={mockAds.image}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        )}
        {!isShowAds && (
          <>
            <BlockHeader title="Lastest Bitcoin News" />
            <div className="row align-items-start justify-content-between">
              {lastestNews.map((item, index) => {
                if (index >= limit) return null
                const { id } = item
                return (
                  <div key={id} className="col-6 col-md-4 col-lg-3 mb-3">
                    <Article {...item} />
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

LastestNewsBlock.propTypes = {
  limit: PropTypes.number,
  isShowAds: PropTypes.bool,
}

LastestNewsBlock.defaultProps = {
  limit: 2,
  isShowAds: true,
}

export default LastestNewsBlock
