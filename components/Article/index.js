import classname from 'classnames'
import ArticleMeta from '../ArticleMeta'
import Link from 'next/link'
import { getInternalSlug } from '../../utils/functions'

const Article = props => {
  const {
    datetime,
    title,
    description,
    url,
    slug,
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
  const articleUrl = getInternalSlug(url)

  if (isVerticalImage) {
    return (
      <article>
        <div className="row align-items-start justify-content-between">
          <div className="col-4 col-md-4">
            <Link href={articleUrl}>
              <a className="d-block my-3">
                <img className={imageClasses} alt={title} src={image} />
              </a>
            </Link>
          </div>
          <div className="col-8 col-md-8 pl-0">
            <ArticleMeta datetime={datetime} category={category} />
            <header>
              <Link href={articleUrl}>
                <a>
                  <h2 className={headerClasses}>{title}</h2>
                </a>
              </Link>
            </header>
            {!isSmall && <p className="font0_8 text-dark">{description}</p>}
          </div>
        </div>
      </article>
    )
  }

  return (
    <article>
      <Link href={articleUrl}>
        <a className="d-block my-3">
          <img className={imageClasses} alt={title} src={image} />
        </a>
      </Link>
      {datetime && <ArticleMeta datetime={datetime} category={category} />}
      <header>
        <Link href={articleUrl}>
          <a>
            <h2 className={headerClasses}>{title}</h2>
          </a>
        </Link>
      </header>
      {!isSmall && <p className="font0_8 text-dark">{description}</p>}
    </article>
  )
}

export default Article
