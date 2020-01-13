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

      <div className={styles.labelWrap}>
        <label className={styles.formLabel}>
          Yes, I want to receive updates via email
        </label>
        <div className={styles.checkboxRadio}>
          <input
            type="radio"
            value="Newsletters, Conferences and Events"
            className={styles.inputRadio}
          />
          <span>
            <label className={styles.label}>
              Newsletters, Conferences and Events
            </label>
          </span>
        </div>

        <div className={styles.checkboxRadio}>
          <input
            type="radio"
            value="Newsletters Only"
            className={styles.inputRadio}
          />
          <span>
            <label className={styles.label}>Newsletters Only</label>
          </span>
        </div>
      </div>

      <div className={styles.buttonWrap}>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </div>
    </div>
  )
}

export default InfoForm
