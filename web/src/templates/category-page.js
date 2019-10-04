import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import RightSidebar from '../containers/content/right-sidebar'
import BlogPostPreviewList from '../components/blog-post-preview-list'

// import {toPlainText} from '../lib/helpers'

const GenericPageTemplate = props => {
  const {data, errors} = props
  const page = data && data.page

  const posts = data && data.posts
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  return (
    <Layout>
      {errors && <SEO seoTitle='GraphQL Error' />}
      {page && <SEO seoTitle={page.seoTitle || page.title || 'Untitled'} description={page.seoDescription || ''} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {posts && <RightSidebar title={page.title}><BlogPostPreviewList title='Category Posts' nodes={postNodes} /></RightSidebar>}

    </Layout>
  )
}

export default GenericPageTemplate

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

  query CategoryPageTemplateQuery($id: String!) {
    posts: allSanityPost(sort: {fields: [publishedAt], order: DESC}, filter: {categories: {elemMatch: {id: {eq: $id}}}}) {
      edges {
        node {
          id
          categories {
            title
          }
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
    page: sanityCategory(id: {eq: $id}) {
      title
      seoTitle
      seoDescription
    }
  }

  
`
