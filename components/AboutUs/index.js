import React from 'react'
import FullWidthHeader from '../FullWidthHeader'
import RightSidebar from '../RightSidebar/RightSidebar'
import { cg_ABOUT_US_SIDEBAR } from '../../constants/common'

const AboutUs = props => {
  const { pageTitle } = props

  return (
    <article>
      <FullWidthHeader title={pageTitle} />
      <div className="wrapper">
        <div className="container page-container">
          <div className="row align-items-start justify-content-between mb-5">
            <div className="col-9 col-md-9 longContent">
              <p>
                In 2017, the Calvin Ayre Media group acquired and relaunched
                CoinGeek.com as a cryptocurrency news site with a focus on the
                technology of Bitcoin, now reborn as Bitcoin SV (BSV).
              </p>
              <p>
                We want to provide fair coverage of the entire cryptocurrency
                industry and highlight people and companies doing their part to
                live up to the true vision of the Satoshi Nakamoto whitepaper.
              </p>
              <p>
                If you wish to share your thoughts, ideas and opinions please
                contact our Editor-in-Chief Bill Beatty (
                <a className="email" href="mailto:bill@ayremedia.com">
                  bill@ayremedia.com
                </a>
                ) to submit your pitches.
              </p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
            </div>
            <div className="col-8 col-md-2">
              <RightSidebar sidebarItems={cg_ABOUT_US_SIDEBAR} />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default AboutUs