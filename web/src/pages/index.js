import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
// import BlogPostPreviewList from '../components/blog-post-preview-list'
// import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'

import SEO from '../components/seo'
import Layout from '../containers/layout'
import Hero from '../components/hero'
import AboutArea from '../components/about-area'
import Highlights from '../components/features-area'
import ServicesArea from '../components/services-area'
import FAQArea from '../components/faq-area'

const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  const obtainLoanCardsContent = [
    {
      title: '1 - Select a Home',
      description: 'You select a Home and discuss the purchase with the seller or selling agent. Sign a purchase contract conditioned on approval of your VA home loan',
      icon: 'flaticon-life-insurence'
    },
    {
      title: '2 - Select a lender',
      description: 'You select a lender and present them with your Certificate of Eligibility and complete a loan application ',
      icon: 'flaticon-life-insurence'
    },
    {
      title: '3 - Credit Report & Appraisal',
      description: 'The lender will develop all credit and income information. They will also request VA to assign a licensed appraiser to determine the reasonable value for the property. A Certificate of Reasonable Value will be issued. Note: You may be required to pay for the credit report and appraisal unless the seller agrees to pay.',
      icon: 'flaticon-life-insurence'
    },
    {
      title: '4 - Approval',
      description: 'The lender will let you know the decision on the loan. You should be approved if the established value and your credit and income are acceptable',
      icon: 'flaticon-life-insurence'
    },
    {
      title: '5 - Closing',
      description: 'You (and spouse) attend the loan closing. The lender or closing attorney will explain the loan terms and requirements as well as where and how to make the monthly payments. Sign the note, mortgage, and other related papers.',
      icon: 'flaticon-life-insurence'
    },
    {
      title: '6 - Done',
      description: 'The loan is sent to VA for guaranty. Your Certificate of Eligibility is annotated to reflect the use of entitlement and returned to you.',
      icon: 'flaticon-life-insurence'
    }
  ]
  const faqContent = [
    {
      question: 'Was the bankruptcy discharged more than 2 years ago?',
      answer: '<p>If the bankruptcy was discharged more than 2 years ago, it may be disregarded.</p>'
    },
    {
      question: 'Was the bankruptcy discharged within the last 1 to 2 years?',
      answer: '<p>If the bankruptcy was discharged within the last 1 to 2 years, it is probably not possible to determine that you and/or your spouse are a satisfactory credit risk unless both of the following requirements are met: <br/> - you and/or your spouse have reestablished satisfactory credit, and<br/> - the bankruptcy was caused by circumstances beyond your and/or your spouses control (such as unemployment, medical bills, etc.)</p>'
    },
    {
      question: 'Was the bankruptcy discharged within the past 12 months?',
      answer: '<p>If the bankruptcy was discharged within the past 12 months, it will not generally be possible to determine that you and/or your spouse are satisfactory credit risks.</p>'
    }
  ]

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />

      <Hero />
      <AboutArea />
      <Highlights />
      <ServicesArea sectionTitle='How Do I Obtain a VA Home Loan?' sectionSubtitle='6 Simple Steps' cardsContent={obtainLoanCardsContent} />
      <FAQArea sectionTitle='Can I Get a VA Loan after Bankruptcy?' faqContent={faqContent} />

      {/* <h1 hidden>Welcome to {site.title}</h1> */}
      {/* {postNodes && (
        <BlogPostPreviewList
          title='Latest blog posts'
          nodes={postNodes}
          browseMoreHref='/archive/'
        />
      )} */}

    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`
