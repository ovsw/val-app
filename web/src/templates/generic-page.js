import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import GenericPage from '../components/generic-page'
import SEO from '../components/seo'
import Layout from '../containers/layout'
// import {toPlainText} from '../lib/helpers'

const GenericPageTemplate = props => {
  const {data, errors} = props
  const page = data && data.page

  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {page && <SEO title={page.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {page && <GenericPage {...page} />}
    </Layout>
  )
}

export default GenericPageTemplate

export const query = graphql`
  query GenericPageTemplateQuery($id: String!) {
    page: sanityPage(id: {eq: $id}) {
      id
      title
      slug {
        current
      }
      _rawBody(resolveReferences: {maxDepth: 5})
    }
  }
`