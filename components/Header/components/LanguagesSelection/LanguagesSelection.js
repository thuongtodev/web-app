import { useReducer } from 'react'
import classname from 'classnames'
import { reducer } from '../../../../utils/functions'
import enFlag from '../../../../assets/cgLangEn.png'
import zhFlag from '../../../../assets/cgLangZh.png'
import styles from './styles.scss'

export const cg_LANGUAGES = [
  {
    id: 0,
    image: enFlag,
    title: 'en',
    key: 'en',
  },
  {
    id: 1,
    image: zhFlag,
    title: 'zh',
    key: 'en',
  },
]

const LanguagesSelection = props => {
  const { customClassName } = props
  const initState = {
    activedLang: cg_LANGUAGES[0],
    isOpenList: false,
  }

  const [state, setState] = useReducer(reducer, initState)
  const toggleList = () => {
    setState({ isOpenList: !state.isOpenList })
  }
  const languageSelectionClasses = classname(
    styles.languageSelection,
    customClassName
  )
  const subMenuClasses = classname(styles.subMenu, {
    [styles.actived]: !!state.isOpenList,
  })
  const { activedLang } = state
  const remainingLangs = cg_LANGUAGES.filter(item => item.id !== activedLang.id)

  return (
    <div className={languageSelectionClasses}>
      <div className={styles.dropdownWrapper}>
        <ul>
          <li className={styles.listItem} onClick={toggleList}>
            <a className={styles.imgWrapper}>
              <img
                className="lazyload-loaded"
                src={activedLang.image}
                alt={activedLang.title}
              />
            </a>
            <ul className={subMenuClasses}>
              {remainingLangs.map(item => (
                <li
                  className={styles.subListItem}
                  key={item.id}
                  onClick={() => setState({ activedLang: item })}
                >
                  <a className={styles.imgWrapper}>
                    <img
                      className="lazyload-loaded"
                      src={item.image}
                      alt={item.title}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LanguagesSelection
