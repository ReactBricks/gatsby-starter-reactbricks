import React from 'react'
import {
  PageViewer,
  cleanPage,
  renderJsonLd,
  renderMeta,
  types,
} from 'react-bricks/frontend'
import { useReactBricksContext } from 'react-bricks/frontend'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ErrorNoKeys from '../components/errorNoKeys'
import ErrorNoHeader from '../components/errorNoHeader'
import ErrorNoFooter from '../components/errorNoFooter'

interface ReactBricksPageProps {
  pageContext: {
    page: types.Page
    header: types.Page
    footer: types.Page
    errorKeys: string
    errorPage: string
    errorHeader: string
    errorFooter: string
  }
}

const Page: React.FC<ReactBricksPageProps> = ({
  pageContext: {
    page,
    header,
    footer,
    errorKeys,
    errorPage,
    errorHeader,
    errorFooter,
  },
}) => {
  const { pageTypes, bricks } = useReactBricksContext()

  // Clean the received content
  // Removes unknown or not allowed bricks
  const pageOk = page ? cleanPage(page, pageTypes, bricks) : null
  const headerOk = header ? cleanPage(header, pageTypes, bricks) : null
  const footerOk = footer ? cleanPage(footer, pageTypes, bricks) : null

  return (
    <Layout>
      {pageOk && !errorPage && !errorKeys && (
        <>
          <Seo lang={page.meta.language} />

          {headerOk && !errorHeader ? (
            <PageViewer page={headerOk} showClickToEdit={false} />
          ) : (
            <ErrorNoHeader />
          )}

          <PageViewer page={pageOk} />

          {footerOk && !errorFooter ? (
            <PageViewer page={footerOk} showClickToEdit={false} />
          ) : (
            <ErrorNoFooter />
          )}
        </>
      )}
      {errorKeys && <ErrorNoKeys />}
    </Layout>
  )
}

export default Page

// Head tag content (meta tag and JsonLd)
export const Head = ({ pageContext: { page } }) => {
  return (
    <>
      {page && renderMeta(page)}
      {page && renderJsonLd(page)}
    </>
  )
}
