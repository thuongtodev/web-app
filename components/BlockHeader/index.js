const BlockHeader = props => {
  const { title, subTitle, url } = props

  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-12">
        <h2 className="text-uppercase font-weight-normal font0_9 py-2 my-0">
          {url && <a href={url}>{title}</a>}
          {!url && title}
        </h2>
      </div>
      {subTitle && (
        <div className="col-auto">
          <a
            href={url}
            className="text-uppercase font0_7 text-right text-dark cursorPointer"
          >
            {subTitle}
          </a>
        </div>
      )}
      <div className="col-12">
        <hr className="my-1" />
      </div>
    </div>
  )
}

export default BlockHeader
