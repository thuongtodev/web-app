import Link from 'next/link'
import { checkHasDomain } from '../../utils/functions'

const CgLink = props => {
  const { title, href, dynamicPath, query, className } = props
  const isExternalSite = checkHasDomain(href)

  return (
    <>
      {isExternalSite && (
        <a href={href} className={className}>
          {title}
        </a>
      )}
      {!isExternalSite && (
        <Link href={{ pathname: href, query }} as={dynamicPath}>
          <a className={className}>{title}</a>
        </Link>
      )}
    </>
  )
}

export default CgLink
