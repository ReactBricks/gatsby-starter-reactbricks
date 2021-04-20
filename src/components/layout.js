import React from 'react'

import Footer from './Footer'
import Header from './Header'
import * as styles from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.children}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout