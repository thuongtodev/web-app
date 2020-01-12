import ArticleMeta from '../ArticleMeta'

const Article = props => {
  const { datetime, title, subTitle, url, category, image } = props

  return (
    <article>
      <a href={url} className="d-block my-3">
        <img
          className="cgRadius img-fluid w-100 lazyload-loaded"
          alt={title}
          src={image}
        />
      </a>
      <ArticleMeta datetime={datetime} category={category} />
      <header>
        <a href={url} className="text-body font0_9 text-decoration-none">
          <h2 className="articleTitle font1_0 fontWeight600">{title}</h2>
        </a>
      </header>
      <p className="font0_8 text-dark">{subTitle}</p>
    </article>
  )
}

export default Article
