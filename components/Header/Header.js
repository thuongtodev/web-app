import React, { useReducer, useEffect } from 'react'
import Link from 'next/link'
import _get from 'lodash/get'
import classname from 'classnames'
import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive'
import { FaSearch, FaShareAlt, FaTimes } from 'react-icons/fa'
import SubMenu from '../SubMenu'
import LanguagesSelection from './components/LanguagesSelection'
import { reducer } from '../../utils/functions'
import {
  cg_SOCIALS,
  cg_MENU_ITEMS,
  cg_MENU_ITEMS_WITH_HOME,
} from '../../constants/common'
import logo from '../../assets/cgLogo.svg'
import styles from './styles.scss'

const getActivedItem = (menuArr, currentPath) => {
  if (!menuArr || !menuArr.length || !currentPath) return null
  const path = currentPath.replace('/', '').split('/')
  let result = null
  for (let i = 0; i < menuArr.length; i++) {
    const menuUrl = menuArr[i].url.replace('/', '')
    if (path.includes(menuUrl)) {
      result = menuArr[i]
    } else if (menuArr[i].children) {
      const subActivedItem = getActivedItem(menuArr[i].children, currentPath)
      if (subActivedItem)
        result = { ...subActivedItem, parentUrl: menuArr[i].url }
    }
  }
  return result
}

const Header = () => {
  const initState = {
    isOpenSearch: false,
    isOpenSocial: false,
    isOpenMenu: false,
    isOpenSubMenu: null,
    activedItem: null,
  }

  const [state, setState] = useReducer(reducer, initState)
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  })

  const {
    isOpenSearch,
    isOpenSocial,
    isOpenSubMenu,
    activedItem,
    isOpenMenu,
  } = state
  const router = useRouter()
  const cg_MENU = isMobile ? cg_MENU_ITEMS_WITH_HOME : cg_MENU_ITEMS

  useEffect(() => {
    const activedItem = getActivedItem(cg_MENU, router.pathname)
    setState({ activedItem })
  }, [router])

  const toggleSubMenu = key => {
    if (isOpenSubMenu !== key) {
      setState({ isOpenSubMenu: key })
    }
  }

  const activedColor = _get(activedItem, 'color', '')
  const headerClasses = classname(
    styles.header,
    styles[`color_${activedColor}`],
    {
      [styles.actived]: isOpenMenu,
    }
  )

  return (
    <header className={headerClasses}>
      <div className={styles.wrapper}>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <img src={logo} alt="logo" className="lazyload-loaded" />
              </a>
            </Link>
          </div>
          <div
            className={styles.logoMobile}
            onClick={() => setState({ isOpenMenu: !isOpenMenu })}
          >
            <span>CG</span>
          </div>
          <nav className={styles.navigator}>
            <ul className={styles.mainMenu}>
              {cg_MENU.map(item => {
                const {
                  title,
                  url,
                  children,
                  key,
                  isExternalSite,
                  color,
                  isShow,
                } = item
                const isLinkActived =
                  isOpenSubMenu === key ||
                  (activedItem &&
                    (activedItem.url === item.url ||
                      activedItem.parentUrl === item.url))
                if (!isShow) return null
                return (
                  <li
                    key={key}
                    className={classname(
                      styles.menuItem,
                      styles[`color_${color}`],
                      {
                        [styles.actived]: isLinkActived,
                      }
                    )}
                    onMouseOver={() => toggleSubMenu(key)}
                    onMouseOut={() => toggleSubMenu(null)}
                  >
                    {!isExternalSite && (
                      <Link href={url}>
                        <a className={styles.a}>{title}</a>
                      </Link>
                    )}
                    {isExternalSite && (
                      <a href={url} className={styles.a}>
                        {title}
                      </a>
                    )}
                    {children && (
                      <SubMenu
                        items={children}
                        activedItem={activedItem}
                        isActive={isLinkActived && !isOpenMenu}
                      />
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>

          <button
            onClick={() => {
              window && window.open('https://buybsv.com/', 'pwin')
            }}
            className={styles.buttonBuy}
            target="_blank"
          >
            Buy BSV
          </button>
          <div className={styles.searchAndSocial}>
            <div
              className={styles.searchIcon}
              onClick={() => {
                if (isMobile) {
                  setState({ isOpenMenu: !isOpenMenu })
                } else {
                  setState({ isOpenSearch: !isOpenSearch })
                }
              }}
            >
              <FaSearch />
            </div>

            <div
              className={styles.socicalIcon}
              onClick={() => setState({ isOpenSocial: !isOpenSocial })}
            >
              <FaShareAlt />
            </div>
          </div>

          <LanguagesSelection
            languages={state.languages}
            customClassName={styles.languagesSelectionCustom}
          />
          <div
            className={classname(styles.headerSearchWrapper, {
              [styles.actived]: isOpenSearch,
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
                      <FaSearch fontSize="15" />
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
              [styles.actived]: isOpenSocial,
            })}
          >
            <div className="row">
              <div className="col-12">
                <div className={styles.headerSocial}>
                  <ul>
                    {cg_SOCIALS.map(item => {
                      return (
                        <li className={styles.socialItem} key={item.type}>
                          <a href={item.url} target="_blank">
                            {item.component}
                          </a>
                          {item.tooltip && (
                            <div className={styles.tooltip}>{item.tooltip}</div>
                          )}
                        </li>
                      )
                    })}
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

export default Header
