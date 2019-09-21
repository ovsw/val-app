import S from '@sanity/desk-tool/structure-builder'
import {MdSettings, MdPerson, MdFolder} from 'react-icons/md'
import {FiFile} from 'react-icons/fi'

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Website Content')
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
      S.divider(),
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
              S.documentListItem()
                .id('mystory')
                .title('My Story')
                .schemaType('page'),
              S.listItem()
                .title('VA Home Loans')
                .child(
                  S.editor()
                    .id('vaHomeLoansPage')
                    .schemaType('page')
                    .documentId('vaHomeLoans')
                )
                .icon(FiFile),
              S.listItem()
                .title('VA Home Loans Sub-Pages')
                .id('vaHomeLoansPages')
                .child(S.documentList()
                  .id('loanInfoPages')
                  .title('Loan info Sub-Pages')
                  .menuItems(S.documentTypeList('page').getMenuItems())
                  .filter('_type == $type && references($parentId)')
                  .params({type: 'page', parentId: 'vaHomeLoans'})
                  .defaultOrdering([{field: '_createdAt', direction: 'asc'}])
                )
                .icon(MdFolder),
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
                .title('Loan Information')
                .child(
                  S.editor()
                    .id('loanInfoPage')
                    .schemaType('page')
                    .documentId('loanInfo')
                )
                .icon(FiFile),
              S.listItem()
                .title('Loan Info Sub-Pages')
                .child(S.documentList()
                  .id('loanInfoPages')
                  .title('Loan info Sub-Pages')
                  .menuItems(S.documentTypeList('page').getMenuItems())
                  .filter('_type == $type && references($parentId)')
                  .params({type: 'page', parentId: 'loanInfo'})
                  .defaultOrdering([{field: '_createdAt', direction: 'asc'}])
                )
                .icon(MdFolder),
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
      S.divider(),
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
