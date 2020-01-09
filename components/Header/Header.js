import React from 'react'
import Link from 'next/link'
import styles from './styles.scss'
import logo from './assets/logo.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.headerContainer}>
          <div className={styles.leftContent}>
            <div className={styles.logo}>
              <Link href="/">
                <a>
                  <img src={logo} alt="logo" />
                </a>
              </Link>
            </div>
          </div>

          <div className={styles.rightContent}>Right</div>
        </div>
      </div>
    </header>
  )
}

export default Header
