// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    siteNav: [
      {
        title: 'My Story',
        slug: '/my-story/',
        children: []
      },
      {
        title: 'Apply',
        slug: '/apply/',
        children: []
      },
      {
        title: 'VA Home Loans',
        slug: '/va-home-loans/',
        children: [
          {
            title: 'VA Loan Eligibility',
            slug: '/va-loan-eligibility/'
          },
          {
            title: 'Obtaining a VA Home Loan',
            slug: '/va-pre-loan-faq/'
          },
          {
            title: 'After Closing: VA Home Loan FAQ',
            slug: '/va-post-loan-faq/'
          },
          {
            title: 'What is a VA Jumbo Loan',
            slug: '/va-jumbo-loans/'
          },
          {
            title: 'The VA Loan App – Free Mobile Tool',
            slug: '/va-loan-app-free-mobile-tool/'
          }
        ]
      },
      {
        title: 'Media',
        slug: '/media/',
        children: []
      },
      {
        title: 'Loan Info',
        slug: '/loan-tools/',
        children: [
          {
            title: 'Am I Eligible for a VA Loan?',
            slug: '/eligible-va-loan/'
          },
          {
            title: 'Bad Credit Rating',
            slug: '/bad-credit-rating/'
          },
          {
            title: 'Can I Buy Land with VA Loan?',
            slug: '/buy-land-va-loan/'
          },
          {
            title: 'Home Improvements VA Loan Information',
            slug: '/home-improvements-va-loan/'
          },
          {
            title: 'Can I Finance 2 Homes Using VA Loans?',
            slug: '/finance-2-homes-using-va-loans/'
          },
          {
            title: 'Loan Programs for Veterans',
            slug: '/loan-programs/'
          },
          {
            title: 'How Do VA Loan Rates Differ?',
            slug: '/va-loan-rates-differ/'
          },
          {
            title: 'Different Types of VA Loans',
            slug: '/types-of-loans/'
          },
          {
            title: 'VA Loan Checklist',
            slug: '/loan-checklist/'
          },
          {
            title: 'Refinancing a VA Loan',
            slug: '/refinancing/'
          },
          {
            title: 'VA Mortgage Terms: Glossary',
            slug: '/mortgage-terms-glossary/'
          }
        ]
      },
      {
        title: 'Contact',
        slug: '/contact-me/',
        children: []
      },
      {
        title: 'VA COE',
        slug: '/va-certificate-of-eligibility/',
        children: []
      },
      {
        title: 'Blog',
        slug: '/blog/',
        children: []
      }
    ]
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    }
  ]
}
