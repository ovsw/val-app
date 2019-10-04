export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'This defines the slug for this category\'s page in the front-end.',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule =>
        Rule.required()
    }
    // {
    //   name: 'description',
    //   type: 'text',
    //   title: 'Description'
    // }
  ]
}
