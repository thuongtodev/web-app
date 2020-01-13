import React, { useReducer } from 'react'
import Link from 'next/link'
import {
  FaAngleDown,
  FaSearch,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaWeibo,
  FaWeixin,
  FaAngleUp,
} from 'react-icons/fa'
import styles from './stylesMobile.scss'
import logo from './assets/logo.svg'
import en from './assets/en.png'
import zh from './assets/zh.png'
import Dropdown from './components/Dropdown'
import { reducer } from '../../utils/functions'

const HeaderMobile = () => {
  const initState = {
    isOpenMenu: false,
    languages: [
      {
        id: 0,
        imgUrl: en,
        selected: true,
        title: 'en',
      },
      {
        id: 1,
        imgUrl: zh,
        selected: false,
        title: 'zh',
      },
    ],
  }

  const [state, setState] = useReducer(reducer, initState)

  return (
    <header className={styles.header}>
      <div className={styles.topActions}>
        <div
          className={styles.buttonWrap}
          onClick={() => setState({ isOpenMenu: !state.isOpenMenu })}
        >
          <span className={styles.buttonMobile}>CG</span>
          {!state.isOpenMenu && <FaAngleDown className={styles.angleDown} />}
          {state.isOpenMenu && <FaAngleUp className={styles.angleDown} />}
        </div>
        <div className={styles.rightContent}>
          {!state.isOpenMenu && <FaSearch />}
          <Dropdown list={state.languages} />
        </div>
      </div>

      <div className={styles.wrapper}>
        {state.isOpenMenu && (
          <div className={styles.headerSearch}>
            <input
              className={styles.input}
              type="text"
              name="s"
              id="s"
              placeholder="Type your search..."
            />
            <button className={styles.button}>
              <FaSearch />
            </button>
          </div>
        )}
        {state.isOpenMenu && (
          <nav className={styles.headerMenu}>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <a className={styles.a}>
                  <span>HOME</span>
                </a>
              </li>
              <li className={styles.li}>
                <a className={styles.a}>
                  <span>NEWS</span>
                </a>
              </li>
              <li className={styles.li}>
                <a className={styles.a}>
                  <span>CONFERENCES</span>
                </a>
              </li>
              <li className={styles.li}>
                <a className={styles.a}>
                  <span>HOW TO BUY BSV</span>
                </a>
              </li>
              <li className={styles.li}>
                <a className={styles.a}>
                  <span>VENTURES</span>
                </a>
              </li>
            </ul>
          </nav>
        )}
        <div>
          <button className={styles.buttonBSV}>BUY BSV</button>
        </div>
        {state.isOpenMenu && (
          <div className={styles.socialWrap}>
            <div className={styles.iconWrap}>
              <FaFacebookF />
            </div>
            <div className={styles.iconWrap}>
              <FaTwitter />
            </div>
            <div className={styles.iconWrap}>
              <FaYoutube />
            </div>
            <div className={styles.iconWrap}>
              <FaInstagram />
            </div>
            <div className={styles.iconWrap}>
              <FaLinkedinIn />
            </div>
            <div className={styles.iconWrap}>
              <FaWeibo />
            </div>
            <div className={styles.iconWrap}>
              <FaWeixin />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default HeaderMobile
