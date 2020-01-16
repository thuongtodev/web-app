import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaWeibo,
  FaWeixin,
} from 'react-icons/fa'

export const cg_SOCIALS = [
  {
    type: 'facebook',
    component: <FaFacebookF />,
    url: 'https://www.facebook.com/realcoingeek/',
  },
  {
    type: 'twitter',
    component: <FaTwitter />,
    url: 'https://twitter.com/realcoingeek/',
  },
  {
    type: 'youtube',
    component: <FaYoutube />,
    url: 'https://www.youtube.com/channel/UC95_Nqes9m5arhoT1lt1SFg',
  },
  {
    type: 'instagram',
    component: <FaInstagram />,
    url: 'https://www.instagram.com/coingeek_official/',
  },
  {
    type: 'linkedin',
    component: <FaLinkedinIn />,
    url: 'https://www.linkedin.com/company/coingeek/',
  },
  {
    type: 'weibo',
    component: <FaWeibo />,
    url: 'https://www.weibo.com/CoinGeek',
  },
  {
    type: 'weixin',
    component: <FaWeixin />,
    url:
      'https://coingeek.com/wp-content/uploads/2019/08/qrcode_for_gh_906aba1be2b7_258.jpg',
    tooltip: (
      <img
        src="https://cdn.shortpixel.ai/client/q_lqip,ret_wait/https://coingeek.com/wp-content/uploads/2019/08/qrcode_for_gh_906aba1be2b7_258.jpg"
        className="img-fluid lazyload-observe"
      />
    ),
  },
]

const cg_NEWS_SUB_MENU = [
  {
    title: 'News',
    url: 'https://coingeek.com/news/',
    key: 'news',
    children: [
      {
        title: 'Business',
        url: 'https://coingeek.com/news/category/business/',
        key: 'business',
      },
      {
        title: 'Tech',
        url: 'https://coingeek.com/news/category/tech/',
        key: 'tech',
      },
      {
        title: 'Press Releases',
        url: 'https://coingeek.com/news/category/press-releases/',
        key: 'pressReleases',
      },
      {
        title: 'Events',
        url: 'https://coingeek.com/news/category/events/',
        key: 'events',
      },
      {
        title: 'Interviews',
        url: 'https://coingeek.com/news/category/interviews/',
        key: 'interviews',
      },
      {
        title: 'Videos',
        url: 'https://coingeek.com/news/category/videos/',
        key: 'videos',
      },
    ],
  },
  {
    title: 'Authors',
    key: 'authors',
    url: 'https://coingeek.com/authors/',
  },
  {
    title: 'Bitcoin Guide',
    key: 'bitcoinGuide',
    url: 'https://bitcoinsv.io/services/',
  },
]

export const cg_MENU_ITEMS = [
  {
    title: 'News',
    key: 'news',
    url: '/news',
    children: cg_NEWS_SUB_MENU,
    isExternalSite: false,
  },
  {
    title: 'Conferences',
    key: 'conferences',
    url: 'https://coingeekconference.com/',
    isExternalSite: true,
  },
  {
    title: 'How to buy bsv?',
    key: 'howToBuyBSV',
    url: '/how-to-buy-bsv',
    isExternalSite: false,
  },
  {
    title: 'Ventures',
    key: 'ventures',
    url: '/bitcoin-ventures',
    isExternalSite: false,
  },
]

export const cg_ABOUT_US_SIDEBAR = [
  {
    title: 'ABOUT US',
    subTitle: 'Learn more',
    url: '/about-us',
  },
  {
    title: 'OUR WRITERS',
    subTitle: 'Learn more',
    url: '/authors',
  },
  {
    title: 'CONTACT US',
    subTitle: 'Get in touch',
    url: '/contact-us',
  },
]

export const cg_POLICY_SIDEBAR = [
  {
    title: 'LEGAL',
    subTitle: 'Learn more',
    url: '/privacy-policy',
  },
  {
    title: 'ADVERTISING',
    subTitle: 'Learn more',
    url: '/advertising',
  },
]

export const cg_TERMS_SIDEBAR = [
  {
    title: 'Privacy Policy',
    subTitle: 'Privacy Policy',
    url: '/privacy-policy',
  },
  {
    title: 'CONTACT US',
    subTitle: 'Contact us',
    url: '/contact-us',
  },
]
