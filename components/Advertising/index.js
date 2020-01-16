import React from 'react'
import FullWidthHeader from '../FullWidthHeader'
import RightSidebar from '../RightSidebar/RightSidebar'
import { cg_ABOUT_US_SIDEBAR } from '../../constants/common'

const Advertising = props => {
  const { pageTitle } = props

  return (
    <article>
      <FullWidthHeader title={pageTitle} />
      <div className="wrapper">
        <div className="container page-container">
          <div className="row align-items-start justify-content-between mb-5">
            <div className="col-9 col-md-9 longContent">
              <p>
                If you need to promote your company, brand, product or services,
                CoinGeek.com offers engaging online advertising that reaches a
                unique audience of cryptocurrency enthusiasts.
              </p>
              <p>
                We are part of the Calvin Ayre Media Group and multisite buys
                are available on request. Banner advertisements and video
                packages are all&nbsp;available to help target your business and
                services directly to your audience. To find our more information
                regarding our advertising services and rates.
              </p>
              <p>
                Please email us at:&nbsp;
                <a className="email" href="mailto:Advertise@AyreMedia.com">
                  Advertise@AyreMedia.com
                </a>
              </p>
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

export default Advertising
