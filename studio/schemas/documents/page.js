// import {format} from 'date-fns'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  liveEdit: false,
  __experimental_actions: [ 'update', 'publish' ], /* 'create', 'delete' */
  fieldsets: [
    {title: 'SEO Info',
      name: 'seo',
      options: {collapsible: true, collapsed: true}
    }
  ],
  fields: [
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      fieldset: 'seo'
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      fieldset: 'seo'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'bodyPortableText'
    }
  ]
}
