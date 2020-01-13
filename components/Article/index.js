import classname from 'classnames'
import ArticleMeta from '../ArticleMeta'

const Article = props => {
  const { datetime, title, description, url, category, image, isSmall } = props
  const headerClasses = classname('articleTitle', {
    font0_8: isSmall,
    font1_0: !isSmall,
  })
  const imageClasses = classname('cgRadius img-fluid  lazyload-loaded', {
    'w-100': !isSmall,
  })

  return (
    <article>
      <a href={url} className="d-block my-3">
        <img className={imageClasses} alt={title} src={image} />
      </a>
      <ArticleMeta datetime={datetime} category={category} />
      <header>
        <a href={url}>
          <h2 className={headerClasses}>{title}</h2>
        </a>
      </header>
      {!isSmall && <p className="font0_8 text-dark">{description}</p>}
    </article>
  )
}

export default Article
