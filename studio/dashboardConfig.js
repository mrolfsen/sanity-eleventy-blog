export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61a79ac8c3ac6b383237ea86',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-nmhge34k',
                  apiId: '8b00d9ab-12cd-46c4-adaa-2269d17887b7'
                },
                {
                  buildHookId: '61a79ac8fbaaa93d0b15104f',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-rttx6vtj',
                  apiId: 'f5496407-5571-4e48-8864-f03397f12415'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mrolfsen/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-rttx6vtj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
