import React, { useReducer } from 'react'
import Link from 'next/link'
import { FaSearch, FaShareAlt, FaTimes } from 'react-icons/fa'
import classname from 'classnames'
import logo from './assets/logo.svg'
import en from './assets/en.png'
import zh from './assets/zh.png'
import Dropdown from './components/Dropdown'
import SubMenu from '../SubMenu'
import { reducer } from '../../utils/functions'
import { cg_SOCIALS, cg_MENU_ITEMS } from '../../constants/common'
import styles from './styles.scss'

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
    isOpenSearch: false,
    isOpenSocial: false,
    isOpenSubMenu: null,
  }

  const [state, setState] = useReducer(reducer, initState)
  const { isOpenSearch, isOpenSocial, isOpenSubMenu } = state
  const toggleSubMenu = key => {
    if (isOpenSubMenu !== key) {
      setState({ isOpenSubMenu: key })
    }
  }
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <Link href="/">
              <img src={logo} alt="logo" className="lazyload-loaded" />
            </Link>
          </div>
          <nav className={styles.navigator}>
            <ul className={styles.mainMenu}>
              {cg_MENU_ITEMS.map(item => {
                const { title, url, children, key } = item
                return (
                  <li
                    key={key}
                    className={classname(styles.menuItem, {
                      [styles.actived]: isOpenSubMenu === key,
                    })}
                    onMouseOver={() => toggleSubMenu(key)}
                    onMouseOut={() => toggleSubMenu(null)}
                  >
                    <a href={url} className={styles.a}>
                      {title}
                    </a>
                    {children && (
                      <SubMenu
                        items={children}
                        isActive={isOpenSubMenu === key}
                      />
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>

          <button className={styles.buttonBuy}>Buy BSV</button>
          <div
            className={styles.iconContainer}
            onClick={() => setState({ isOpenSearch: !isOpenSearch })}
          >
            <FaSearch />
          </div>

          <div
            className={styles.iconContainer}
            onClick={() => setState({ isOpenSocial: !isOpenSocial })}
          >
            <FaShareAlt />
          </div>
          <div>
            <Dropdown list={state.languages} />
          </div>

          <div
            className={classname(styles.headerSearchWrapper, {
              [styles.active]: isOpenSearch,
            })}
          >
            <div className="row">
              <div className="col-12">
                <div className={styles.headerSearchForm}>
                  <form
                    method="get"
                    id="searchform"
                    action="https://coingeek.com/"
                  >
                    <input
                      type="text"
                      name="s"
                      id="s"
                      placeholder="Type your search..."
                    />
                    <button type="submit">
                      <FaSearch />
                    </button>
                  </form>
                  <a
                    href="#"
                    className={styles.closeButton}
                    onClick={() => setState({ isOpenSearch: !isOpenSearch })}
                  >
                    <FaTimes />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className={classname(styles.headerSocialWrapper, {
              [styles.active]: isOpenSocial,
            })}
          >
            <div className="row">
              <div className="col-12">
                <div className={styles.headerSocial}>
                  <ul>
                    {
                      (cg_SOCIALS,
                      cg_MENU_ITEMS.map(item => {
                        return (
                          <li className={styles.socialItem} key={item.type}>
                            <a href={item.url} target="_blank">
                              {item.component}
                            </a>
                            {item.tooltip && (
                              <div className={styles.tooltip}>
                                {item.tooltip}
                              </div>
                            )}
                          </li>
                        )
                      }))
                    }
                  </ul>
                  <a
                    href="#"
                    className={styles.closeButton}
                    onClick={() => setState({ isOpenSocial: !isOpenSocial })}
                  >
                    <FaTimes />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderWeb
