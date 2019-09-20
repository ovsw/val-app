import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdPerson from 'react-icons/lib/md/person'
import {FiFile} from 'react-icons/fi'

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Blog posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('My Story')
                .child(
                  S.editor()
                    .id('mystoryPage')
                    .schemaType('page')
                    .documentId('mystory')
                )
                .icon(FiFile),
              S.listItem()
                .title('Apply')
                .child(
                  S.editor()
                    .id('applyPage')
                    .schemaType('page')
                    .documentId('apply')
                )
                .icon(FiFile),
              S.listItem()
                .title('Media')
                .child(
                  S.editor()
                    .id('mediaPage')
                    .schemaType('page')
                    .documentId('media')
                )
                .icon(FiFile),
              S.listItem()
                .title('VA COE')
                .child(
                  S.editor()
                    .id('vacoePage')
                    .schemaType('page')
                    .documentId('vacoe')
                )
                .icon(FiFile)
            ])
        ),
      S.listItem()
        .title('Authors')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
