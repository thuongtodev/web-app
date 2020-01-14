import React from 'react'
import FullWidthHeader from '../FullWidthHeader'
import styles from './styles.scss'
import { FaArrowRight } from 'react-icons/fa'

const AboutUs = props => {
  const { pageTitle } = props

  return (
    <article className={styles.aboutUsWrapper}>
      <FullWidthHeader title={pageTitle} />
      <div class="wrapper">
        <div class="container page-container">
          <div class="row align-items-start justify-content-between mb-5">
            <div class={`col-9 col-md-9 ${styles.content}`}>
              <p>
                In 2017, the Calvin Ayre Media group acquired and relaunched
                CoinGeek.com as a cryptocurrency news site with a focus on the
                technology of Bitcoin, now reborn as Bitcoin SV (BSV).
              </p>
              <p>
                We want to provide fair coverage of the entire cryptocurrency
                industry and highlight people and companies doing their part to
                live up to the true vision of the Satoshi Nakamoto whitepaper.
              </p>
              <p>
                If you wish to share your thoughts, ideas and opinions please
                contact our Editor-in-Chief Bill Beatty (
                <a href="mailto:bill@ayremedia.com">bill@ayremedia.com</a>) to
                submit your pitches.
              </p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
            </div>
            <div class="col-8 col-md-2">
              <aside class={styles.sidebarContainer}>
                <div class="pt-2">
                  <div class="row align-items-start justify-content-start">
                    <div class="col-auto">
                      <h5 class="text-uppercase font0_75 my-2">ABOUT US</h5>{' '}
                      <a
                        class="text-uppercase font0_8 font-weight-light sidebarLinks ml-2 position-relative text-decoration-none"
                        href="https://coingeek.com/about-us/"
                      >
                        <FaArrowRight color="00d2ff" size="18" />
                        LEARN MORE
                      </a>
                    </div>
                  </div>
                  <div class="row align-items-start justify-content-start">
                    <div class="col-auto">
                      <h5 class="text-uppercase font0_75 my-2">OUR WRITERS</h5>{' '}
                      <a
                        class="text-uppercase font0_8 font-weight-light sidebarLinks ml-2 position-relative text-decoration-none"
                        href="https://coingeek.com/authors/"
                      >
                        <FaArrowRight color="00d2ff" size="18" />
                        LEARN MORE
                      </a>
                    </div>
                  </div>
                  <div class="row align-items-start justify-content-start">
                    <div class="col-auto">
                      <h5 class="text-uppercase font0_75 my-2">CONTACT US</h5>{' '}
                      <a
                        class="text-uppercase font0_8 font-weight-light sidebarLinks ml-2 position-relative text-decoration-none"
                        href="https://coingeek.com/contact-us/"
                      >
                        <FaArrowRight color="00d2ff" size="18" />
                        GET IN TOUCH
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default AboutUs
