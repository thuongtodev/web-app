import styles from './styles.scss'

const FullWidthHeader = props => {
  const { title } = props

  return (
    <header className="page-header">
      <div className={`${styles.fullWidthHeader} pt-3 pt-md-5`}>
        <div className="container" tabindex="-1">
          <div className="row align-items-start justify-content-between mt-5 mt-md-5">
            <div className="col-12 col-md-8">
              <h1 className="text-white text-uppercase font-weight-bold font1_50 my-3">
                <p>
                  <strong>{title}</strong>
                </p>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default FullWidthHeader
