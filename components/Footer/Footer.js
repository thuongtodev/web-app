import React from 'react'
import styles from './styles.scss'

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
                    id="menu-footer-menu-left"
                    className="nav flex-column flex-sm-row justify-content-around text-center"
                  >
                    <li
                      id="menu-item-19810"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19810"
                    >
                      About Us
                    </li>
                    <li
                      id="menu-item-19823"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-19823"
                    >
                      About Calvin Ayre
                    </li>
                    <li
                      id="menu-item-19811"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19811"
                    >
                      Our Team
                    </li>
                    <li
                      id="menu-item-19812"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19812"
                    >
                      Advertising
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-auto order-1 order-md-2 text-center">
                  <div className={styles.imageLogo}>
                    <img
                      src="https://coingeek.com/wp-content/uploads/2018/11/logo.svg"
                      className={styles.customLogo}
                      alt="CoinGeek"
                    />
                  </div>
                </div>
                <div className="col-12 col-md order-3 order-md-3">
                  <ul
                    id="menu-footer-menu-right"
                    className="nav flex-column flex-sm-row justify-content-around text-center"
                  >
                    <li
                      id="menu-item-19814"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-19814"
                    >
                      Privacy Policy
                    </li>
                    <li
                      id="menu-item-19815"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19815"
                    >
                      Terms of Use
                    </li>
                    <li
                      id="menu-item-19816"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19816"
                    >
                      Contact us
                    </li>
                  </ul>
                </div>
              </div>
              <hr className={styles.hr} />
              <div className="row align-items-center justify-content-center footer-partners text-uppercase text-white">
                <div className="col-3 col-md-2">
                  <img
                    src="https://coingeek.com/wp-content/uploads/2018/11/CalvinAyre-01-2.svg"
                    alt=""
                    style={{ width: '75%' }}
                    className=" img-fluid partners-logo lazyload-loaded"
                  />
                </div>
                <div className="col-3 col-md-2">
                  <img
                    src="https://coingeek.com/wp-content/uploads/2018/11/AyreMedia-01.svg"
                    alt=""
                    style={{ width: '75%' }}
                    className=" img-fluid partners-logo lazyload-loaded"
                  />
                </div>
                <div className="col-3 col-md-2">
                  <img
                    src="https://coingeek.com/wp-content/uploads/2018/11/AyreGroup-01.svg"
                    alt=""
                    style={{ width: '75%' }}
                    className=" img-fluid partners-logo lazyload-loaded"
                  />
                </div>
                <div className="col-3 col-md-2">
                  <img
                    src="https://coingeek.com/wp-content/uploads/2018/11/CalvinAyreFoundation-01.svg"
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
