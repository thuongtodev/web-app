import React from 'react'
import { interviewNews, podCast, videos } from './mockInterviewsAndFeatures'
import BlockHeader from '../BlockHeader'
import Article from '../Article'
import styles from './styles.scss'

const InterviewsAndFeatures = props => {
  return (
    <div className={styles.interviewsandFeaturesWrapper}>
      <div className="container">
        <div className="row align-items-start justify-content-between">
          {/* interviews */}
          {interviewNews.length > 0 && (
            <div className="col-12 col-md-4">
              <BlockHeader
                title="Interviews"
                subTitle="All interviews articles"
                url="https://coingeek.com/news/category/interviews/"
              />
              <div className="row align-items-start justify-content-center">
                {interviewNews.map((item, index) => {
                  const { id } = item
                  return (
                    <div key={id} className="col-12">
                      <Article {...item} isVerticalImage />
                    </div>
                  )
                })}
              </div>
            </div>
          )}
          {/* podcasts */}
          <div className="col-12 col-md-4">
            <BlockHeader
              title="Coingeek Podcasts"
              subTitle="All Coingeek Podcasts"
              url="https://coingeek.com/news/tag/coingeek-podcast/"
            />
            <div className="row align-items-start justify-content-center">
              <div className="col-12">
                <div className="cgRadius my-3">
                  <a
                    href={podCast.url}
                    className="cgRadius d-block overflow-hidden"
                  >
                    <img className="lazyload-loaded" src={podCast.image} />
                  </a>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-3">
                <img
                  className="lazyload-loaded"
                  src="https://coingeek.com/wp-content/themes/cg_understrap/assets/images/en_CG_Conversations_black.png"
                  alt="CoinGeek Coinversations"
                />
              </div>
              <div className="col-9 pl-0">
                <a
                  href={podCast.url}
                  className="font-weight-bold text-decoration-none"
                >
                  {podCast.title}
                </a>
              </div>
            </div>
          </div>
          {/* videos */}
          <div className="col-12 col-md-4">
            <BlockHeader
              title="Featured Video"
              subTitle="All Video"
              url="https://coingeek.com/videos/"
            />
            <div className="row align-items-start justify-content-center">
              <div className="col-12">
                <div className="cgRadius my-3 overflow-hidden">
                  <div
                    className={`container-lazyload preview-lazyload ${styles.videoContainer} embed-responsive embed-responsive-16by9`}
                  >
                    <iframe
                      className="embed-responsive-item "
                      src={videos.videoUrl}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <noscript>
                      Video can't be loaded because JavaScript is disabled:{' '}
                      <a href={videos.videoUrl}>
                        {`${videos.title} (${videos.videoUrl})`}
                      </a>
                    </noscript>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-12">
                <div className="cgRadius">
                  <div className={styles.videoTitle}>
                    <a href={videos.url} className="text-decoration-none">
                      Jimmy Nguyen talks Bitcoin SV and how it’s changing the
                      commerce world
                    </a>
                  </div>
                  <p className="font0_8 my-1">
                    Jimmy Nguyen traveled recently to Colombia in order to
                    spread the word on Bitcoin SV (BSV) and how Bitcoin is
                    changing commerce.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InterviewsAndFeatures
