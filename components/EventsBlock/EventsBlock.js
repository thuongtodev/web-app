import React from 'react'

import styles from './styles.scss'
import { mockData } from './mockData'

const EventsBlock = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className="row align-items-start justify-content-center">
          <div className="col">
            <main>
              <header className="mb-3">
                <h1 className={styles.title}>LASTEST NEWS</h1>
                <div className="row align-items-start justify-content-center">
                  {mockData.map(item => (
                    <div className="col-6 col-md-4 col-lg-4 mb-3">
                      <article
                        className="post-239620 event type-event status-publish has-post-thumbnail hentry event_countries-africa"
                        id="post-239620"
                      >
                        <header className="events-header">
                          <a
                            href={item.linkUrl}
                            className="my-3 position-relative text-decoration-none font-weight-bold"
                          >
                            <h3 className={styles.eventTitle}>{item.title}</h3>
                          </a>
                        </header>
                        <div className="events-meta my-2">
                          <div className="events-info font0_65 text-uppercase font-weight-light position-relative">
                            <div className={styles.eventInfoDate}>
                              {item.eventsDate}
                            </div>
                            <div className={styles.eventInfoLocation}>
                              {item.eventLocation}
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </header>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsBlock
