import classname from 'classnames'
import Link from 'next/link'
import styles from './styles.scss'

const SubMenu = props => {
  const { items, isActive, activedItem } = props
  if (!Array.isArray(items) || items.length === 0) return null

  return (
    <ul
      className={classname(styles.subMenu, {
        [styles.actived]: isActive,
      })}
    >
      {items.map(item => {
        const { title, url, children, key, isExternalSite } = item
        const itemClasses = classname(styles.subMenuItem, {
          [styles.hasChildren]: children && children.length > 0,
          [styles.actived]: activedItem && activedItem.url === item.url,
        })

        return (
          <li className={itemClasses} key={key}>
            {!isExternalSite && (
              <Link href={url}>
                <a>{title}</a>
              </Link>
            )}
            {isExternalSite && <a href={url}>{title}</a>}
            {children && children.length > 0 && (
              <ul className={styles.children}>
                {children.map(child => {
                  return (
                    <li className={styles.child} key={child.key}>
                      {isExternalSite && <a href={child.url}>{child.title}</a>}
                      {!isExternalSite && (
                        <Link href={child.url}>
                          <a>{child.title}</a>
                        </Link>
                      )}
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
