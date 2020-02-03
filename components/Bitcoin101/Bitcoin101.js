import React from 'react'
import { bitcoin101 } from './mockData'
import { parseHtmlString } from '../../utils/functions'
import Article from '../Article'

const Bitcoin101 = props => {
  const { pageTitle } = props
  const { description, data } = bitcoin101
  return (
    <article>
      <header className="page-header overflow-hidden">
        <div className="pt-3 pt-md-5">
          <div className="container">
            <div className="row align-items-start justify-content-between mt-5 mt-md-5 page_archive-title">
              <div className="col-12">
                <h1 className="text-dark text-uppercase font-weight-bold font1_75 my-3 text-center">
                  {pageTitle}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="wrapper">
        <div className="container page-container">
          <div className="row align-items-start justify-content-center">
            <div className="col-10 col-md-9 longContent">
              {parseHtmlString(description)}
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="container">
          <div className="row align-items-start justify-content-center mb-5">
            {data.map(item => {
              return (
                <div key={item.id} className="col-6 col-md-4 col-lg-4 mb-3">
                  <Article
                    {...item}
                    url={`bitcoin101/${item.slug}`}
                    dynamicPath="/bitcoin101/[article]"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </article>
  )
}

export default Bitcoin101
