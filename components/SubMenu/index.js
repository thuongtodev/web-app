import classname from 'classnames'
import Link from 'next/link'
import CgLink from '../CgLink'
import styles from './styles.scss'

const SubMenu = props => {
  const { items, isActive, activedItem, className } = props
  if (!Array.isArray(items) || items.length === 0) return null

  return (
    <ul
      className={classname(styles.subMenu, className, {
        [styles.actived]: isActive,
      })}
    >
      {items.map(item => {
        const { title, url, children, key } = item
        const itemClasses = classname(styles.subMenuItem, {
          [styles.hasChildren]: children && children.length > 0,
          [styles.actived]: activedItem && activedItem.url === item.url,
        })

        return (
          <li className={itemClasses} key={key}>
            <CgLink href={url} title={title} />
            {children && children.length > 0 && (
              <ul className={styles.children}>
                {children.map(child => {
                  return (
                    <li className={styles.child} key={child.key}>
                      <CgLink
                        href={child.url}
                        title={child.title}
                        query={child.query}
                      />
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
