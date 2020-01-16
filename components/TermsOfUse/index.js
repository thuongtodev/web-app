import React from 'react'
import FullWidthHeader from '../FullWidthHeader'
import RightSidebar from '../RightSidebar/RightSidebar'
import { cg_TERMS_SIDEBAR } from '../../constants/common'

const TermsOfUse = props => {
  const { pageTitle } = props

  return (
    <article>
      <FullWidthHeader title={pageTitle} />
      <div className="wrapper">
        <div className="container page-container">
          <div className="row align-items-start justify-content-between mb-5">
            <div className="col-9 col-md-9 longContent">
              <p>
                <strong>CoinGeek Terms and Conditions</strong>
              </p>
              <p>
                Welcome to the CoinGeek website. If you continue to browse and
                use this website, you are agreeing to comply with and be bound
                by the following terms and conditions of use, which, together
                with our privacy policy, govern CoinGeek’s relationship with you
                in relation to this website. If you disagree with any part of
                these terms and conditions, please do not use our website.
              </p>
              <p>
                The term ‘CoinGeek or ‘us’ or ‘we’ or ‘Site’ refers to the owner
                of the website. The term ‘you’ refers to the user or viewer of
                our website.
              </p>
              <p>
                <strong>
                  The use of this website is subject to the following terms of
                  use:
                </strong>
              </p>
              <p>
                We reserve the right to change these terms at any time, and you
                agree to be bound by any such changes.
              </p>
              <p>
                The content of the pages of CoinGeek is for your general
                information and use only. This website contains materials owned
                by or licensed to us. The material includes, but not limited to,
                the design, layout, look, appearance and graphics. We reserve
                the right at any time and from time to time to modify or
                discontinue, temporarily or permanently, the Site (or any part
                thereof) with or without notice.
              </p>
              <p>
                Any new feature or functionality (including, without limitation,
                video and related projects) that augment or enhance the Site
                shall be subject to these terms. The latest terms and conditions
                can be found on the Site at any time. The Site (including all
                text, photographs, graphics, video and audio content contained
                on the Site) is protected by copyright as a collective work or
                compilation under national and international copyright laws, and
                we (subject to the rights of our licensors and licensees under
                applicable agreements, understandings and arrangements) have all
                rights therein.
              </p>
              <p>This website uses cookies to monitor browsing preferences.</p>
              <p>
                Neither we nor any third parties provide any warranty or
                guarantee as to the accuracy, timeliness, performance,
                completeness or suitability of the information and materials
                found or offered on this website for any particular purpose. You
                acknowledge that such information and materials may contain
                inaccuracies or errors, and we expressly exclude liability for
                any such inaccuracies or errors to the fullest extent permitted
                by law.
              </p>
              <p>
                Unauthorized use of this website may give rise to a claim for
                damages and/or be a criminal offense.
              </p>
              <p>
                Your use of this website and any dispute arising out the use of
                the website is subject to the laws of the Government of Antigua
                and Barbuda.
              </p>
            </div>
            <div className="col-8 col-md-2">
              <RightSidebar sidebarItems={cg_TERMS_SIDEBAR} />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default TermsOfUse
