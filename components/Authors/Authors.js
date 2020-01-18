import React from 'react'
import { authors } from './mockData'
import styles from './styles.scss'
import FullWidthHeader from '../FullWidthHeader'
import AuthorProfile from '../AuthorProfile'

const Authors = props => {
  const { pageTitle } = props

  return (
    <div className={styles.authorsWrapper}>
      <FullWidthHeader title={pageTitle} />
      <div className="container">
        <div className="row align-items-start justify-content-between mt-2 mt-md-5">
          <div className="col-12 col-md-8">
            <h1 className="text-uppercase fontweight600 font1_0 mb-3">
              CoinGeek’s Editorial Team: News Writers,
              <br /> Reporters, and Contributors
            </h1>
          </div>
        </div>
        <div className="row align-items-start justify-content-center my-3 my-md-3">
          {authors.map(item => {
            return (
              <div
                key={item.id}
                className="col-6 col-md-3 authors-list mb-3 mb-md-5"
              >
                <div className="row align-items-start justify-content-center">
                  <div className="col-12 col-md-9">
                    <AuthorProfile author={item} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Authors
