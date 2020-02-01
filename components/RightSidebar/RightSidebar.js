import React from 'react'
import Link from 'next/link'
import classname from 'classnames'
import { FaArrowRight } from 'react-icons/fa'
import styles from './styles.scss'

const RightSidebar = props => {
  const { sidebarItems, title } = props
  if (!sidebarItems || !Array.isArray(sidebarItems)) return null
  const sidebarClasses = classname(styles.sidebarContainer, {
    [styles.hasTopBorder]: !title,
  })

  return (
    <aside className={sidebarClasses}>
      {title && <h5 className="text-uppercase font0_75">{title}</h5>}
      <div className="pt-2">
        {sidebarItems.map(item => {
          const { title, subTitle, url } = item
          return (
            <div
              key={`${title}-${url}-${subTitle}`}
              className="row align-items-start justify-content-start"
            >
              <div className="col-auto">
                <h5 className="text-uppercase font0_75 my-2">{title}</h5>
                <Link href={url}>
                  <a className="text-uppercase font0_8 font-weight-light sidebarLinks ml-2 position-relative text-decoration-none">
                    <FaArrowRight color="00d2ff" size="18" />
                    {subTitle}
                  </a>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </aside>
  )
}

export default RightSidebar
