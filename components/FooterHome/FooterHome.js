import React from 'react'
import classNames from 'classnames'
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaWeibo,
  FaWeixin,
} from 'react-icons/fa'
import NewLetterForm from '../NewLetterForm'
import cgLogoNews from '../../assets/cgLogoNews.svg'
import styles from './styles.scss'
import Link from 'next/link'
import CgLink from '../CgLink'

const FooterHome = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className="row align-items-start justify-content-between my-3">
          <div className="col-12 col-md-12 col-lg-4 mb-4">
            <div className="footer__home--logo">
              <div className={styles.cgnews}>
                <a href="https://coingeek.com/">
                  <img className={styles.image} src={cgLogoNews} alt="" />
                </a>
              </div>
            </div>
            <div className={styles.description}>
              The #1 media for all things BSV (Bitcoin Satoshi Vision), the only
              major public blockchain that maintains the original vision for
              Bitcoin as fast, frictionless, electronic cash. EN
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mx-lg-0 px-lg-0 ">
            <div className="footer__list--menu">
              <div className="textwidget">
                <div className="row align-items-start justify-content-between">
                  <div className="col-auto">
                    <h3 className={styles.h3}>News</h3>
                    <ul className="nav flex-column font0_7 text-uppercase homefooter_nav text-decoration-none">
                      <li className="nav-item">
                        <CgLink
                          title="Business"
                          className={styles.a}
                          href="/news"
                          query={{ category: 'business' }}
                        />
                      </li>
                      <li className="nav-item">
                        <CgLink
                          title="Editorial"
                          className={styles.a}
                          href="/news"
                          query={{ category: 'editorial' }}
                        />
                      </li>
                      <li className="nav-item">
                        <CgLink
                          title="Technology"
                          className={styles.a}
                          href="/news"
                          query={{ category: 'tech' }}
                        />
                      </li>
                      <li className="nav-item">
                        <CgLink
                          title="Press Releases"
                          className={styles.a}
                          href="/news"
                          query={{ category: 'press-releases' }}
                        />
                      </li>
                      <li className="nav-item">
                        <CgLink
                          title="Interviews"
                          className={styles.a}
                          href="/news"
                          query={{ category: 'interviews' }}
                        />
                      </li>
                      <li className="nav-item">
                        <CgLink
                          title="Videos"
                          className={styles.a}
                          href="/videos"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="col-auto">
                    <h3 className={styles.h3}>Events</h3>
                    <ul className="nav flex-column font0_7 text-uppercase homefooter_nav">
                      <li className="nav-item">
                        <Link href="/events">
                          <a className={styles.a}>All events</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h3 className={styles.h3}>Bitcoin Guide</h3>
                    <ul className="nav flex-column font0_7 text-uppercase homefooter_nav">
                      <li className="nav-item">
                        <a
                          className={styles.a}
                          href="https://bitcoinsv.io/services/"
                        >
                          Exchanges &amp; wallets
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="footer__social">
              <h3 className={classNames(styles.h3, styles.textRight)}>
                Follow us
              </h3>
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <a
                    href="https://www.facebook.com/realcoingeek/"
                    target="_blank"
                    className={styles.icon}
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://twitter.com/realcoingeek"
                    target="_blank"
                    className={styles.icon}
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.youtube.com/channel/UC95_Nqes9m5arhoT1lt1SFg"
                    target="_blank"
                    className={styles.icon}
                  >
                    <FaYoutube />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.instagram.com/coingeek_official/"
                    target="_blank"
                    className={styles.icon}
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.linkedin.com/company/coingeek/"
                    target="_blank"
                    className={styles.icon}
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.weibo.com/CoinGeek"
                    target="_blank"
                    className={styles.icon}
                  >
                    <FaWeibo />
                  </a>
                </li>
                <li className="nav-item con-tooltip top">
                  <a
                    href="https://coingeek.com/wp-content/uploads/2019/08/qrcode_for_gh_906aba1be2b7_258.jpg"
                    target="_blank"
                    className={styles.icon}
                  >
                    <FaWeixin />
                  </a>
                  {/* <div className="tooltip" style={{ left: '-100%' }}>
                    <img
                      src="https://cdn.shortpixel.ai/client/q_lossless,ret_img/https://coingeek.com/wp-content/uploads/2019/08/qrcode_for_gh_906aba1be2b7_258.jpg"
                      className=" img-fluid lazyload-loaded"
                    />
                  </div> */}
                </li>
              </ul>
            </div>

            <div className="footer__newsletters">
              <NewLetterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterHome
