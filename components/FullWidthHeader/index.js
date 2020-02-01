import PropTypes from 'prop-types'
import classname from 'classnames'
import styles from './styles.scss'

const FullWidthHeader = props => {
  const { title, isPaddingTop, color, bgImage } = props
  const headerClasses = classname(styles.fullWidthHeader, 'pt-3', {
    'pt-md-5': isPaddingTop,
    [styles.isPaddingTop]: isPaddingTop,
    [styles.purple]: color === 'purple',
  })
  const rowClasses = classname(
    'row align-items-start justify-content-between',
    {
      'mt-5 mt-md-5': isPaddingTop,
    }
  )
  const customStyles = bgImage
    ? {
        background: `url(${bgImage}) no-repeat center center`,
        backgroundSize: 'cover',
      }
    : {}

  return (
    <header className="page-header">
      <div className={headerClasses} style={customStyles}>
        <div className="container" tabIndex="-1">
          <div className={rowClasses}>
            <div className="col-12 col-md-8">
              <h1 className="text-white text-uppercase font-weight-bold font1_50 my-3">
                {Array.isArray(title) &&
                  title.map((item, index) => (
                    <strong key={`title-${index}`}>
                      <p>{item}</p>
                    </strong>
                  ))}
                {!Array.isArray(title) && (
                  <strong>
                    <p>{title}</p>
                  </strong>
                )}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

FullWidthHeader.propTypes = {
  isPaddingTop: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}
FullWidthHeader.defaultProps = {
  isPaddingTop: true,
}

export default FullWidthHeader
