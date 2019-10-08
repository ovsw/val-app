const {isFuture} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// const {format} = require('date-fns')

async function createBlogPostPages (graphql, actions, reporter) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const {id, slug = {}} = edge.node // publishedAt
      // const dateSegment = format(publishedAt, 'YYYY/MM')
      // const path = `/blog/${dateSegment}/${slug.current}/`
      const path = `/${slug.current}/`

      reporter.info(`Creating blog post page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/blog-post.js'),
        context: {id}
      })
    })
}

async function createBlogListingPaginationPages (graphql, actions, reporter) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  const postsPerPage = 10
  const numPages = Math.ceil(postEdges.length / postsPerPage)

  Array.from({length: numPages}).forEach((_, i) => {
    const path = i === 0 ? `/blog` : `/blog/${i + 1}`
    reporter.info(`Creating blog post page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/blog-list-page.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1
      }
    })
  })
}

async function createGenericPages (graphql, actions, reporter) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityPage(
        filter: { slug: { current: { ne: null } } }
      ) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const pageEdges = (result.data.allSanityPage || {}).edges || []

  pageEdges
    .forEach((edge, index) => {
      const {id, slug = {}} = edge.node
      const path = `/${slug.current}/`

      reporter.info(`Creating generic page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/generic-page.js'),
        context: {id}
      })
    })
}

async function createCategoryPages (graphql, actions, reporter) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityCategory{
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const categoryEdges = (result.data.allSanityCategory || {}).edges || []

  categoryEdges
    .forEach((edge, index) => {
      const {id, slug = {}} = edge.node
      const path = `/${slug.current}/`

      reporter.info(`Creating category page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/category-page.js'),
        context: {id}
      })
    })
}

exports.createPages = async ({graphql, actions, reporter}) => {
  await createBlogPostPages(graphql, actions, reporter)
  await createGenericPages(graphql, actions, reporter)
  await createCategoryPages(graphql, actions, reporter)
  await createBlogListingPaginationPages(graphql, actions, reporter)
}
