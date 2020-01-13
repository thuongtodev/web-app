import React from 'react'
import styles from './styles.scss'

const ConferencesEvents = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className="row align-items-start justify-content-between my-3">
          <div className="col-12 col-md-8 mb-3">
            <div className="home-conference__container cg__radius overflow-hidden shadow p-2 bg-white">
              <div className="row align-items-center justify-content-between m-0 mt-2">
                <div className="col-12">
                  <div className="cgconference_img my-2">
                    <a href="" title="COINGEEK – LONDON">
                      <img
                        src="https://cdn.shortpixel.ai/client/q_lossless,ret_img/https://coingeek.com/wp-content/uploads/2018/05/london-block-exchange-lists-bitcoin-cash-ethereum-classic-platform.jpg"
                        alt="London Block Exchange lists Bitcoin Cash, Ethereum Classic on their platform"
                        className={styles.image}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-12">
                  <h3 className={styles.h3Orange}>COINGEEK – LONDON</h3>
                </div>
                <div className="col-12">
                  <div className={styles.dateTimeBold}>February 2020</div>
                </div>
                <div className="col-12">
                  <div className="cg-button__wrapper mx-auto text-center my-3">
                    <a
                      href="https://coingeekconference.com"
                      className={styles.buttonConferences}
                    >
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="home-events__container cg__radius overflow-hidden shadow p-2 bg-white">
              <div className="row align-items-center justify-content-between m-0 mt-2">
                <div className="col title">
                  <h2 className={styles.titleSection}>Where we’ll be next</h2>
                </div>

                <div className="col-auto title">
                  <a
                    href="https://coingeek.com/event/"
                    className="text-uppercase font0_7 text-right text-decoration-none text-dark"
                  >
                    All events
                  </a>
                </div>

                <div className="col-12">
                  <hr className={styles.hr} />
                </div>
              </div>
              <div className="row align-items-start justify-content-between m-0 mt-3">
                <div className="col-12 mb-3">
                  <article
                    className="post-239620 event type-event status-publish has-post-thumbnail hentry event_countries-africa"
                    id="post-239620"
                  >
                    <header className="events-header">
                      <a
                        href="https://coingeek.com/events/blockchain-africa-conference/"
                        className="my-3 position-relative text-decoration-none font-weight-bold"
                      >
                        <h3 className={styles.h3Blue}>
                          Blockchain Africa Conference
                        </h3>
                      </a>
                    </header>
                    <div className="events-meta my-2">
                      <div className="events-info font0_65 text-uppercase font-weight-light position-relative">
                        <div className={styles.eventsInfoDate}>
                          March 11-12, 2020
                        </div>
                        <div className={styles.eventsInfoLocation}>
                          Johannesburg, South Africa
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-12 mb-3">
                  <article
                    className="post-2968 event type-event status-publish has-post-thumbnail hentry"
                    id="post-2968"
                  >
                    <header className="events-header">
                      <a
                        href="https://coingeek.com/events/token2049/"
                        className="my-3 position-relative text-decoration-none font-weight-bold"
                      >
                        <h3 className={styles.h3Blue}>TOKEN2049</h3>
                      </a>
                    </header>
                    <div className="events-meta my-2">
                      <div className="events-info font0_65 text-uppercase font-weight-light position-relative">
                        <div className={styles.eventsInfoDate}>
                          March 17-18, 2020
                        </div>
                        <div className={styles.eventsInfoLocation}>
                          Kerry Hotel, Kowloon, Hong Kong
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-12 mb-3">
                  <article
                    className="post-173378 event type-event status-publish has-post-thumbnail hentry event_countries-netherlands"
                    id="post-173378"
                  >
                    <header className="events-header">
                      <a
                        href="https://coingeek.com/events/blockchain-expo-europe/"
                        className="my-3 position-relative text-decoration-none font-weight-bold"
                      >
                        <h3 className={styles.h3Blue}>
                          Blockchain Expo Europe
                        </h3>
                      </a>
                    </header>
                    <div className="events-meta my-2">
                      <div className="events-info font0_65 text-uppercase font-weight-light position-relative">
                        <div className={styles.eventsInfoDate}>
                          July 1-2, 2020
                        </div>
                        <div className={styles.eventsInfoLocation}>
                          Amsterdam, The Netherlands
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConferencesEvents
