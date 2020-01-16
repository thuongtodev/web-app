import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import styles from './styles.scss'

const RightSidebar = props => {
  const { sidebarItems } = props
  if (!sidebarItems || !Array.isArray(sidebarItems)) return null

  return (
    <aside className={styles.sidebarContainer}>
      <div className="pt-2">
        {sidebarItems.map(item => {
          const { title, subTitle, url } = item
          return (
            <div
              key={title}
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
