import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 896,
        }}
      >
        <main className="content">{children}</main>
        <footer style={{ borderTop: '1px solid #cbd5e0', paddingTop: 10, paddingBottom: 20 }}>
          © {new Date().getFullYear()}{' '}
          <a href="https://www.reactbricks.com">React Bricks</a>, built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
