import React from 'react'
import { useMediaQuery } from 'react-responsive'
import HeaderWeb from './Header'
import HeaderMobile from './HeaderMobile'

const Header = () => {
  const isWeb = useMediaQuery({
    query: '(min-device-width: 768px)',
  })
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  })

  return (
    <div>
      {isWeb && <HeaderWeb />}
      {isMobile && <HeaderMobile />}
    </div>
  )
}

export default Header
