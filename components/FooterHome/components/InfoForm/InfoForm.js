import React from 'react'
import styles from './styles.scss'

const InfoForm = () => {
  return (
    <div>
      <div className={styles.halfSize}>
        <div className="_field-wrapper">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            required=""
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.halfSize}>
        <div className="_field-wrapper">
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            required=""
            className={styles.input}
          />
        </div>
      </div>

      <div className="_field-wrapper">
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          required=""
          className={styles.input}
        />
      </div>
    </div>
  )
}

export default InfoForm
