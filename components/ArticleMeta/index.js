import styles from './styles.scss'

const ArticleMeta = props => {
  const { category, datetime } = props

  return (
    <div className={styles.articleMeta}>
      <span className={styles.category}>{category}</span>
      <span className={styles.date}>{datetime}</span>
    </div>
  )
}

export default ArticleMeta
