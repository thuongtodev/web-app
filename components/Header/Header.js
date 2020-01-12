import React, { useReducer } from 'react'
import Link from 'next/link'
import { FaSearch, FaShareAlt } from 'react-icons/fa'
import styles from './styles.scss'
import logo from './assets/logo.svg'
import en from './assets/en.png'
import zh from './assets/zh.png'
import Dropdown from './components/Dropdown'
import { reducer } from '../../utils/functions'

const HeaderWeb = () => {
  const initState = {
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
      <div className={styles.wrapper}>
        <div className={styles.headerContainer}>
          <div className={styles.leftContent}>
            <Link href="/">
              <img src={logo} alt="logo" className={styles.logo} />
            </Link>
            <div className={styles.headerMenu}>
              <a className={styles.a}>NEWS</a>
            </div>
            <div className={styles.headerMenu}>
              <a className={styles.a}>CONFERENCES</a>
            </div>
            <div className={styles.headerMenu}>
              <a className={styles.a}>HOW TO BUY BSV</a>
            </div>
            <div className={styles.headerMenu}>
              <a className={styles.a}>VENTURES</a>
            </div>
          </div>

          <div className={styles.rightContent}>
            <button className={styles.buttonBuy}>Buy BSV</button>
            <div className={styles.iconContainer}>
              <FaSearch />
            </div>

            <div className={styles.iconContainer}>
              <FaShareAlt />
            </div>
            <div>
              <Dropdown list={state.languages} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderWeb
