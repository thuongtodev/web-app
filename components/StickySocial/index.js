import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import classname from 'classnames'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import linkedin from '../../assets/linkedin.svg'
import weibo from '../../assets/weibo.svg'
import email from '../../assets/email.svg'
import arrow_left from '../../assets/arrow_left.svg'
import styles from './styles.scss'

const getCurrentUrl = () => {
  if (window) {
    if (window.origin.includes('localhost')) {
      return 'http://coingeek.herokuapp.com/'
    }
    return window.location.href
  }
}

const popupWindow = (url, title, w, h) => {
  if (window) {
    const width = (screen.width / 5) * 2
    const height = (screen.height / 3) * 2
    const left = screen.width / 2 - width / 2
    const top = screen.height / 2 - height / 2
    return window.open(
      url,
      title,
      'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' +
        width +
        ', height=' +
        height +
        ', top=' +
        top +
        ', left=' +
        left
    )
  }
}

const StickySocial = props => {
  const [isActive, setIsActive] = useState(true)

  const handleShareFb = () => {
    if (window) {
      popupWindow(
        `https://www.facebook.com/sharer/sharer.php?u=${getCurrentUrl()}`
      )
    }
  }

  const handleShareTwitter = () => {
    if (window) {
      const pageTitle = document.title
      const text = `${pageTitle} ${getCurrentUrl()}`
      popupWindow(`https://twitter.com/intent/tweet?text=${text}`)
    }
  }

  const handleShareLinkedin = () => {
    if (window) {
      const pageTitle = document.title
      // const text = `${pageTitle} ${getCurrentUrl()}`
      popupWindow(
        `https://www.linkedin.com/shareArticle/?title=${pageTitle}&url=${getCurrentUrl()}`
      )
    }
  }

  const handleShareWeibo = () => {
    if (window) {
      const pageTitle = document.title
      popupWindow(
        `http://service.weibo.com/share/share.php?title=${pageTitle}&url=${getCurrentUrl()}`
      )
    }
  }

  const handleShareMail = () => {}

  return (
    <div
      className={classname(styles.cgStickySocial, {
        [styles.isActive]: isActive,
      })}
    >
      <div className={styles.socialItem} data-network="facebook">
        {/* <div
          className="fb-share-button"
          data-href="https://coingeek.com/"
          data-layout="button"
          data-size="large"
        > */}
        <a href="#" onClick={handleShareFb} className="fb-xfbml-parse-ignore">
          <img src={facebook} />
          <span className="st-label">Share</span>
        </a>
        {/* </div> */}
      </div>
      <div className={styles.socialItem} data-network="twitter">
        <a href="#" onClick={handleShareTwitter}>
          <img src={twitter} />
          <span className="st-label">Tweet</span>
        </a>
      </div>
      <div className={styles.socialItem} data-network="linkedin">
        <a href="#" onClick={handleShareLinkedin}>
          <img src={linkedin} />
          <span className="st-label">Share</span>
        </a>
      </div>
      <div className={styles.socialItem} data-network="weibo">
        <a href="#" onClick={handleShareWeibo}>
          <img src={weibo} />
          <span className="st-label">Share</span>
        </a>
      </div>
      <div className={styles.socialItem} data-network="email">
        <img src={email} />
        <span className="st-label">Email</span>
      </div>
      <div className={styles.toggle}>
        <div className={styles.toggleLeft} onClick={() => setIsActive(false)}>
          <img src={arrow_left} />
        </div>
        <div className={styles.toggleRight} onClick={() => setIsActive(true)}>
          <img src={arrow_left} />
        </div>
      </div>
    </div>
  )
}

export default StickySocial
