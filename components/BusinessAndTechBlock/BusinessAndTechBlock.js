import React from 'react'
import { businessNews, techNews } from './mockBusinessAndTech'
import BlockHeader from '../BlockHeader'
import Article from '../Article'
import styles from './styles.scss'

const BusinessAndTechBlock = props => {
  return (
    <div className={styles.businessAndTechWrapper}>
      <div className="container">
        <div className="row align-items-start justify-content-between">
          {businessNews.length > 0 && (
            <div className="col-12 col-md-6">
              <BlockHeader
                title="Business"
                subTitle="All business articles"
                url="https://coingeek.com/news/category/business/"
              />
              <div className="row align-items-start justify-content-between">
                <div className="col-8 col-md-7">
                  <div className="row align-items-start justify-content-center">
                    <div className="col-12">
                      <Article {...businessNews[0]} />
                    </div>
                  </div>
                </div>
                <div className="col-4 col-md-5 pl-0">
                  <div className="row align-items-start justify-content-center">
                    {businessNews.map((item, index) => {
                      const { id } = item
                      if (index > 0 && index < 3) {
                        return (
                          <div key={id} className="col-12">
                            <Article {...item} isSmall />
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
          {techNews.length > 0 && (
            <div className="col-12 col-md-6">
              <BlockHeader
                title="Tech"
                subTitle="All tech articles"
                url="https://coingeek.com/news/category/tech/"
              />
              <div className="row align-items-start justify-content-between">
                <div className="col-8 col-md-7">
                  <div className="row align-items-start justify-content-center">
                    <div className="col-12">
                      <Article {...techNews[0]} />
                    </div>
                  </div>
                </div>
                <div className="col-4 col-md-5 pl-0">
                  <div className="row align-items-start justify-content-center">
                    {techNews.map((item, index) => {
                      const { id } = item
                      if (index > 0 && index < 3) {
                        return (
                          <div key={id} className="col-12">
                            <Article {...item} isSmall />
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BusinessAndTechBlock
