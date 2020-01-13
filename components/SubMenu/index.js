import { useReducer } from 'react'
import classname from 'classnames'
import { reducer } from '../../utils/functions'
import styles from './styles.scss'

const SubMenu = props => {
  const { items, isActive } = props
  if (!Array.isArray(items) || items.length === 0) return null

  return (
    <ul
      className={classname(styles.subMenu, {
        [styles.actived]: isActive,
      })}
    >
      {items.map(item => {
        const { title, url, children, key } = item
        const itemClasses = classname(styles.subMenuItem, {
          [styles.hasChildren]: children && children.length > 0,
        })

        return (
          <li className={itemClasses} key={key}>
            <a href={url}>{title}</a>
            {children && children.length > 0 && (
              <ul className={styles.children}>
                {children.map(child => {
                  return (
                    <li className={styles.child}>
                      <a href={child.url}>{child.title}</a>
                    </li>
                  )
                })}
              </ul>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default SubMenu
