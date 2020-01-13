import React from 'react'
import lastestNews from './mockLastNews'
import BlockHeader from '../BlockHeader'
import Article from '../Article'
import styles from './styles.scss'

const LastestNewsBlock = props => {
  return (
    <div className={styles.lastNewsWrapper}>
      <div className="container">
        <div className="row align-items-start justify-content-between">
          <div className="col-12 col-md-8">
            <BlockHeader title="Lastest Bitcoin News" />

            <div className="row align-items-start justify-content-between">
              {lastestNews.map(item => {
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
                href="https://www.youtube.com/watch?v=QaafKXd9uK0&amp;list=PLTpDsXEwfAQpCTRMzdMNHoCh0tW6KL4Xq"
                target="_blank"
                className="cgRadius d-block overflow-hidden"
              >
                <img
                  className="img-fluid lazyload-loaded"
                  src="https://cdn.shortpixel.ai/client/q_lossless,ret_img/https://coingeek.com/wp-content/uploads/2019/11/CG_banner.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LastestNewsBlock
