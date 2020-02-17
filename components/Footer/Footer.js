import React from 'react'
import Link from 'next/link'
import styles from './styles.scss'
import logo01 from './assets/logo01.svg'
import logo from './assets/logo.svg'
import logo02 from './assets/logo02.svg'
import logo03 from './assets/logo03.svg'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <footer>
              <div
                style={{ fontSize: '0.625rem', fontWeight: 400 }}
                className="row align-items-center justify-content-center footer-menus text-uppercase text-white"
              >
                <div className="col-12 col-md order-2 order-md-1">
                  <ul
                    style={{ marginTop: 10 }}
                    id="menu-footer-menu-left"
                    className="nav flex-column flex-sm-row justify-content-around text-center"
                  >
                    <Link href="/about-us">
                      <a className="text-white">
                        <li
                          id="menu-item-19810"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19810"
                        >
                          About Us
                        </li>
                      </a>
                    </Link>
                    <a className="text-white" href="https://ayre.org/">
                      <li
                        id="menu-item-19823"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-19823"
                      >
                        About Calvin Ayre
                      </li>
                    </a>
                    <Link href="/authors">
                      <a className="text-white">
                        <li
                          id="menu-item-19811"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19811"
                        >
                          Our Team
                        </li>
                      </a>
                    </Link>
                    <Link href="/advertising">
                      <a className="text-white">
                        <li
                          id="menu-item-19812"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19812"
                        >
                          Advertising
                        </li>
                      </a>
                    </Link>
                  </ul>
                </div>
                <div className="col-12 col-md-auto order-1 order-md-2 text-center">
                  <Link href="/">
                    <div className={styles.imageLogo}>
                      <img
                        src={logo}
                        className={styles.customLogo}
                        alt="CoinGeek"
                      />
                    </div>
                  </Link>
                </div>
                <div className="col-12 col-md order-3 order-md-3">
                  <ul
                    id="menu-footer-menu-right"
                    className="nav flex-column flex-sm-row justify-content-around text-center"
                  >
                    <Link href="/privacy-policy">
                      <a className="text-white">
                        <li
                          id="menu-item-19814"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-19814"
                        >
                          Privacy Policy
                        </li>
                      </a>
                    </Link>
                    <Link href="/terms-of-use">
                      <a className="text-white">
                        <li
                          id="menu-item-19815"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19815"
                        >
                          Terms of Use
                        </li>
                      </a>
                    </Link>
                    <Link href="/contact-us">
                      <a className="text-white">
                        <li
                          id="menu-item-19816"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19816"
                        >
                          Contact us
                        </li>
                      </a>
                    </Link>
                  </ul>
                </div>
              </div>
              <hr className={styles.hr} />
              <div className="row align-items-center justify-content-center footer-partners text-uppercase text-white">
                <div className="col-3 col-md-2">
                  <img
                    src={logo01}
                    alt=""
                    style={{ width: '75%' }}
                    className=" img-fluid partners-logo lazyload-loaded"
                  />
                </div>
                <div className="col-3 col-md-2">
                  <img
                    src={logo02}
                    alt=""
                    style={{ width: '75%' }}
                    className=" img-fluid partners-logo lazyload-loaded"
                  />
                </div>
                <div className="col-3 col-md-2">
                  <img
                    src={logo02}
                    alt=""
                    style={{ width: '75%' }}
                    className=" img-fluid partners-logo lazyload-loaded"
                  />
                </div>
                <div className="col-3 col-md-2">
                  <img
                    src={logo03}
                    alt=""
                    style={{ width: '75%' }}
                    className=" img-fluid partners-logo lazyload-loaded"
                  />
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
