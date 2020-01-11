import React from 'react'
import Swiper from 'react-id-swiper'
import sliders from './mockSlider.js'
import 'swiper/swiper.scss'
import styles from './styles.scss'

const Slider = props => {
  const params = {
    slideActiveClass: styles.carouselActive,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      bulletElement: 'li',
      clickable: true,
    },
    spaceBetween: 15,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    effect: 'fade',
  }

  return (
    <div className={styles.carouselWrapper}>
      <header className={styles.carouselHeader}>
        <div className={styles.logoWrapper}>
          <img
            src="https://coingeek.com/wp-content/uploads/2018/11/logo.svg"
            alt="CoinGeek"
          />
        </div>
        <div className={styles.subTitleWrapper}>
          <h2 title="CoinGeek | The Bitcoin Beat">The bitcoin beat</h2>
        </div>
      </header>
      <div className={styles.carouselContent}>
        <Swiper {...params}>
          {sliders.map(item => {
            const { id, url, image, category, date, title, subTitle } = item

            return (
              <div className={styles.carouselItem} key={id}>
                <article>
                  <div className={styles.articleImage}>
                    <img src={image} />
                  </div>
                  <div className={styles.articleContentWrapper}>
                    <div className={styles.articleContent}>
                      <div className={styles.meta}>
                        <span className={styles.category}>{category}</span>
                        <span className={styles.date}>{date}</span>
                      </div>
                      <h2 className={styles.title}>{title}</h2>
                      <p className={styles.subTitle}>{subTitle}</p>
                    </div>
                  </div>
                </article>
              </div>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default Slider
