import { useEffect, useState } from 'react'
import classname from 'classnames'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import linkedin from '../../assets/linkedin.svg'
import weibo from '../../assets/weibo.svg'
import email from '../../assets/email.svg'
import arrow_left from '../../assets/arrow_left.svg'
import styles from './styles.scss'

const StickySocial = props => {
  const [isActive, setIsActive] = useState(true)

  return (
    <div
      className={classname(styles.cgStickySocial, {
        [styles.isActive]: isActive,
      })}
    >
      <div className={styles.socialItem} data-network="facebook">
        <img src={facebook} />
        <span className="st-label">Share</span>
      </div>
      <div className={styles.socialItem} data-network="twitter">
        <img src={twitter} />
        <span className="st-label">Tweet</span>
      </div>
      <div className={styles.socialItem} data-network="linkedin">
        <img src={linkedin} />
        <span className="st-label">Share</span>
      </div>
      <div className={styles.socialItem} data-network="weibo">
        <img src={weibo} />
        <span className="st-label">Share</span>
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
