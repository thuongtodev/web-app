import _isEmpty from 'lodash/isEmpty'
import classname from 'classnames'
import Link from 'next/link'
import styles from './styles.scss'
import { cg_SOCIALS } from '../../constants/common'
import { parseHtmlString } from '../../utils/functions'

const renderSocials = (authorId, socials, color) => {
  let el = []
  if (!_isEmpty(socials)) {
    for (const key in socials) {
      const socialType = cg_SOCIALS.find(item => item.type === key)
      if (socialType) {
        el.push(
          <li key={`${authorId}-${key}`}>
            <a className="nav-link" href={socials[key]}>
              {socialType.component}
            </a>
          </li>
        )
      }
    }
  }

  return el
}

const AuthorProfile = props => {
  const { author, isDetail } = props
  const {
    id,
    slug,
    name,
    image,
    position,
    defaultPosition,
    socials,
    description,
  } = author
  const detailtUrl = `authors/${slug}`
  const authorProfileClasses = classname(styles.authorProfile, {
    [`${styles.isDetail}`]: isDetail,
  })

  return (
    <div className={authorProfileClasses}>
      {!isDetail && (
        <>
          <div className="text-center position-relative">
            <Link href={detailtUrl}>
              <a className={styles.authorImage}>
                <img
                  src={image}
                  alt={name}
                  className="img-fluid cgRadius lazyload-loaded"
                />
              </a>
            </Link>
          </div>
          <div className="mt-3 mb-2 text-center">
            <Link href={detailtUrl}>
              <a>
                <h4 className="text-center font1_0">{name}</h4>
              </a>
            </Link>
            <p className="text-uppercase font-weight-light font0_8 my-0">
              {position || defaultPosition}
            </p>
          </div>
          {socials && (
            <ul className="nav font1_25 text-dark justify-content-center">
              {renderSocials(id, socials)}
            </ul>
          )}
          <Link href={detailtUrl}>
            <a className="text-uppercase d-block text-center font0_8">
              View Profile
            </a>
          </Link>
        </>
      )}
      {isDetail && (
        <>
          <div className={`${styles.authorName} pt-3 pt-md-5`}>
            <div className="container">
              <div className="row align-items-start justify-content-between mt-2 mt-md-3">
                <div className="col-2">
                  <img
                    src={image}
                    alt={name}
                    className="cgRadius lazyload-loaded"
                  />
                </div>
                <div className="col-10">
                  <h1 className="text-white text-uppercase font-weight-bold font1_50">
                    {name}
                  </h1>
                  <p className="text-white text-uppercase font-weight-normal font0_9 my-0">
                    {defaultPosition}
                  </p>
                  <ul className="nav font1_25 text-white">
                    {renderSocials(id, socials)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {description && (
            <div className="my-3">
              <div className="container">
                <div className="row align-items-start justify-content-between">
                  <div className="col-12 col-md-2 my-3"></div>
                  <div className="col-12 col-md-10 my-3">
                    <h3 className="text-uppercase font-weight-bold font1_15 mb-3">
                      {position}
                    </h3>
                    <div className="font1_0 font-weight-light">
                      <p className="longContent">
                        {parseHtmlString(description)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default AuthorProfile
