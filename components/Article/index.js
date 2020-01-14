import classname from 'classnames'
import ArticleMeta from '../ArticleMeta'

const Article = props => {
  const {
    datetime,
    title,
    description,
    url,
    category,
    image,
    isSmall,
    isVerticalImage,
  } = props
  const headerClasses = classname('articleTitle', {
    font0_8: isSmall,
    font1_0: !isSmall,
  })
  const imageClasses = classname('cgRadius img-fluid  lazyload-loaded', {
    'w-100': !isSmall,
  })

  if (isVerticalImage) {
    return (
      <article>
        <div className="row align-items-start justify-content-between">
          <div className="col-4 col-md-4">
            <a href={url} className="d-block my-3">
              <img className={imageClasses} alt={title} src={image} />
            </a>
          </div>
          <div className="col-8 col-md-8 pl-0">
            <ArticleMeta datetime={datetime} category={category} />
            <header>
              <a href={url}>
                <h2 className={headerClasses}>{title}</h2>
              </a>
            </header>
            {!isSmall && <p className="font0_8 text-dark">{description}</p>}
          </div>
        </div>
      </article>
    )
  }

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
