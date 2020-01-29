import React from 'react'
import FullWidthHeader from '../FullWidthHeader'

const BitcoinVentures = props => {
  const { pageTitle } = props

  return (
    <article>
      <FullWidthHeader title={pageTitle} isPaddingTop={false} color="purple" />
      <div className="wrapper">
        <div className="container page-container">
          <div className="row align-items-start justify-content-between mb-5">
            <div className="col-12 col-md-12 longContent">
              <p className="text-left">
                Blockchain commerce (bCommerce) through Bitcoin is the next step
                in the evolution of business, whether on the scale of nations or
                multinationals, or the much more intimate space between a buyer
                and seller, online or off.
              </p>
              <p className="text-left">
                CoinGeek is in the business of realizing the original Satoshi
                Vision of Bitcoin as the world’s new money and global public
                blockchain for commerce.
              </p>
              <p className="text-left">
                To help us do that, we are looking to invest in Bitcoin and
                blockchain technology innovations, especially ones that push the
                boundaries of what can be done or show a new way of doing
                things.
              </p>
              <p className="text-center">
                <strong>
                  We are looking to invest in the next wave of bCommerce
                  innovations.{' '}
                </strong>
              </p>
              <p className="text-center">
                <strong>Pitch your project today.</strong>
              </p>
              <p>
                Bitcoin Satoshi Vision (BSV) is much more than the price chart
                you see on cryptocurrency exchanges. It has real-world utility
                and value for businesses and consumers.
              </p>
              <p>
                Bitcoin is capable of simultaneously sending massive amounts of
                data and financial payments, and this is only possible due to
                Bitcoin SV’s massive scaling capability.
              </p>
              <p>
                Bitcoin SV also aims at being regulation-friendly. The BSV ethos
                has always been about acting responsibly and respecting the law.
                This would help businesses as well as ordinary folk in adopting
                Bitcoin as it encourages laws and government guidance.
              </p>
              <p className="text-center">
                <strong>
                  Do you want to finally launch your tech start-up?{' '}
                </strong>
              </p>
              <p className="text-center">
                <strong>Tell us about your idea now.</strong>
              </p>
              <p>
                Bitcoin SV provides{' '}
                <strong>stability, scalability, security </strong>and
                <strong> safe instant transactions</strong> that will greatly
                benefit businesses as the world moves further into a digital
                business landscape.
              </p>
              <p>
                CoinGeek’s Bitcoin Ventures seeks to innovate blockchain
                technology here and now by providing support to Bitcoin
                projects.
              </p>
              <p>
                You could have the next blockchain application ideas that can be
                developed on top of the Bitcoin SV blockchain. Maybe all that’s
                stopping you from realizing your vision is the need for
                financial resources. CoinGeek has the opportunity of a lifetime
                for you.
              </p>
              <p className="text-center">
                <strong>
                  Fill up the form below and take advantage of Bitcoin
                  investment opportunities with CoinGeek!
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default BitcoinVentures
