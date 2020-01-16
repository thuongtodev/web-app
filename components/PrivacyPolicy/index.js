import React from 'react'
import FullWidthHeader from '../FullWidthHeader'
import RightSidebar from '../RightSidebar/RightSidebar'
import { cg_POLICY_SIDEBAR } from '../../constants/common'

const PrivacyPolicy = props => {
  const { pageTitle } = props

  return (
    <article>
      <FullWidthHeader title={pageTitle} />
      <div className="wrapper">
        <div className="container page-container">
          <div className="row align-items-start justify-content-between mb-5">
            <div className="col-9 col-md-9 longContent">
              <p>
                CoinGeek (the “Company”) is committed to maintaining strong
                privacy protection for its users. Our Privacy Policy (“Privacy
                Policy”) is designed to help you understand how we collect, use,
                and safeguard the information you provide to us and to assist
                you in making informed decisions when using our Service.
              </p>
              <p>
                For purposes of this Agreement, “Service” refers to the
                Company’s services which can be accessed via our website at
                https://coingeek.com, where users can learn more about our
                programs and business channels. The terms “we,” “us,” and “our”
                refer to the Company. “You” refers to you, as a user of Service.
                By accepting our Privacy Policy, you consent to any collection,
                storage, use, and disclosure of your personal information as
                described in this Privacy Policy.
              </p>
              <p>
                <strong>1. INFORMATION WE COLLECT</strong>
              </p>
              <p>
                We collect “Non-Personal Information” and “Personal
                Information.” Non-Personal Information includes information that
                cannot be used to personally identify you, such as anonymous
                usage data, general demographic information we may collect,
                referring/exit pages and URLs, platform types, preferences you
                submit and preferences that are generated based on the data you
                submit and number of clicks. Personal Information includes only
                your email, which you submit to us through the contact form and
                newsletter sign up process at the Site.
              </p>
              <p>
                <em>Information collected via Technology</em>
              </p>
              <p>
                To improve the quality of the website, we track information
                provided to us by your browser or by our software application
                when you view or use the website, such as the website you came
                from (known as the “referring URL”), the type of browser you
                use, the device from which you connected to the Service, the
                time and date of access, and other information that does not
                personally identify you. We track this information using
                cookies, or small text files, which include an anonymous unique
                identifier. Cookies are sent to a user’s browser from our
                servers and are stored in the user’s computer hard drive.
                Sending a cookie to a user’s browser enables us to collect
                Non-Personal information about that user and keep a record of
                the user’s preferences when utilizing our services, both on an
                individual and aggregate basis.
              </p>
              <p>
                The Company may use both persistent and session cookies:
                persistent cookies remain on your computer after you close your
                session and until you delete them, while session cookies expire
                when you close your browser.
              </p>
              <p>
                <em>
                  Information you provide us by registering for submitting a
                  request
                </em>
              </p>
              <p>
                Aside from the information provided automatically by your
                browser when you visit the Site, you can also use a form on the
                website to ask questions or learn more. By using the form, you
                are authorizing us to collect, store and use your email address
                in accordance with this Privacy Policy
              </p>
              <p>
                <strong>2. HOW WE USE AND SHARE INFORMATION</strong>
              </p>
              <p>
                <em>Personal Information</em>
              </p>
              <p>
                Except as otherwise stated in this Privacy Policy, we do not
                sell, trade, rent or otherwise share for marketing purposes your
                Personal Information with third parties without your consent. We
                do share Personal Information with vendors who are performing
                services for the Company, such as the servers for our email
                communications who are provided access to user’s email address
                for purposes of sending emails from us. Those vendors use your
                Personal Information only at our direction and in accordance
                with our Privacy Policy.
              </p>
              <p>
                In general, the Personal Information you provide to us is used
                to help us communicate with you. For example, we use Personal
                Information to respond to a user’s questions, solicit feedback
                from users, provide technical support, and inform users about
                promotional offers.
              </p>
              <p>
                <em>Non-Personal Information</em>
              </p>
              <p>
                In general, we use Non-Personal Information to help us improve
                the Service and customize the user experience. We also aggregate
                Non-Personal Information in order to track trends and analyze
                use patterns on the Site. This Privacy Policy does not limit in
                any way our use or disclosure of Non-Personal Information and we
                reserve the right to use and disclose such Non-Personal
                Information to our partners, advertisers, and other third
                parties at our discretion.
              </p>
              <p>
                <strong>3. HOW WE PROTECT INFORMATION</strong>
              </p>
              <p>
                We protect your information from potential security breaches by
                implementing certain technological security measures including
                encryption, firewalls and secure socket layer technology.
                However, these measures do not guarantee that your information
                will not be accessed, disclosed, altered or destroyed by breach
                of such firewalls and secure server software. By using our
                Service, you acknowledge that you understand and agree to
                undertake these risks.
              </p>
              <p>
                <strong>
                  4. YOUR RIGHTS REGARDING THE USE OF YOUR PERSONAL INFORMATION
                </strong>
              </p>
              <p>
                You have the right at any time to prevent us from contacting you
                for marketing purposes. When we send any promotional
                communications to a user, the user can opt out of further
                promotional communications by following the unsubscribe
                instructions provided in each promotional email. Please note
                that notwithstanding the promotional preferences you indicate by
                either unsubscribing or opting out in the Settings section of
                the Site, we may continue to send you administrative emails
                including, for example, periodic updates to our Privacy Policy.
              </p>
              <p>
                <strong>5. LINKS TO OTHER WEBSITES</strong>
              </p>
              <p>
                As part of the Service, we may provide links to or compatibility
                with other websites or applications. However, we are not
                responsible for the privacy practices employed by those websites
                or the information or content they contain. This Privacy Policy
                applies solely to information collected by us through the Site
                and the Service. Therefore, this Privacy Policy does not apply
                to your use of a third party website accessed by selecting a
                link on our Site or via our Service. To the extent that you
                access or use the Service through or on another website or
                application, then the privacy policy of that other website or
                application will apply to your access or use of that site or
                application. We encourage our users to read the privacy
                statements of other websites before proceeding to use them.
              </p>
              <p>
                <strong>6. CHANGES TO OUR PRIVACY POLICY</strong>
              </p>
              <p>
                We reserve the right to change this policy at any time. We will
                notify you of significant changes to our Privacy Policy here on
                this page. Significant changes will go into effect 30 days
                following such notification. Non-material changes or
                clarifications will take effect immediately. Users are
                encouraged to periodically check the Site and this privacy page
                for updates
              </p>
              <p>
                <strong>7. CONTACT US</strong>
              </p>
              <p>
                If you have any questions regarding this Privacy Policy or the
                practices of this Site, please contact us by sending an email to
                info@coingeek.com
              </p>
              <p>
                <em>Last Updated:</em>&nbsp;This Privacy Policy was last updated
                on December 22, 2017
              </p>
            </div>
            <div className="col-8 col-md-2">
              <RightSidebar sidebarItems={cg_POLICY_SIDEBAR} />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default PrivacyPolicy
