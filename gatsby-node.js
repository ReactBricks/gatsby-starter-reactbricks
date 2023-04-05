require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const bluebird = require('bluebird')
const fetchPages = require('react-bricks/frontend').fetchPages
const fetchPage = require('react-bricks/frontend').fetchPage

exports.createPages = async ({ actions: { createPage } }) => {
  const appId = process.env.GATSBY_APP_ID
  const apiKey = process.env.API_KEY

  let errorHeader = false
  let errorFooter = false
  let errorPage = false
  let errorKeys = false

  const header = await fetchPage('header', apiKey).catch(() => {
    errorHeader = true
    return {}
  })
  const footer = await fetchPage('footer', apiKey).catch(() => {
    errorFooter = true
    return {}
  })

  if (!appId || !apiKey) {
    console.error(
      'App credentials not found. Please, set your GATSBY_APP_ID and API_KEY in your .env.development or .env.production file.'
    )

    errorKeys = true

    createPage({
      path: `/`,
      component: require.resolve('./src/templates/page.tsx'),
      context: {
        page: null,
        header: null,
        footer: null,
        errorKeys: errorKeys,
        errorPage: errorPage,
        errorHeader: errorHeader,
        errorFooter: errorFooter,
      },
    })
    return
  }

  const allPages = await fetchPages(apiKey)

  if (!allPages || allPages.length === 0) {
    console.error(
      'No published page was found. Please, create at least one page from the /admin interface.'
    )
    createPage({
      path: `/`,
      component: require.resolve('./src/templates/page.tsx'),
      context: {
        page: null,
        header: header,
        footer: footer,
        errorKeys: errorKeys,
        errorPage: errorPage,
        errorHeader: errorHeader,
        errorFooter: errorFooter,
      },
    })
    return
  }

  const allPagesWithContent = await bluebird.map(
    allPages,
    (page) => {
      return fetchPage(page.slug, apiKey)
    },
    { concurrency: 2 }
  )

  // Pages
  allPagesWithContent
    .filter((page) => page.slug !== 'header' && page.slug !== 'footer')
    .forEach((page) => {
      createPage({
        path: page.slug === "/" ? page.slug : `/${page.slug}/`,
        component: require.resolve('./src/templates/page.tsx'),
        context: {
          page: page,
          header: header,
          footer: footer,
          errorKeys: errorKeys,
          errorPage: errorPage,
          errorHeader: errorHeader,
          errorFooter: errorFooter,
        },
      })
    })
}
