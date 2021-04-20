import React from 'react'
import { Link } from 'gatsby'

import * as styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.logoMenuWrapper}>
            <img
              src="/react-bricks-logo.svg"
              className={styles.logo}
              alt="React Bricks"
            />
            <div className={styles.headerMenu}>
              <Link href="/" className={styles.menuLink}>
                Home
              </Link>
            </div>
          </div>
          <Link href="/admin" className={styles.callToAction}>
            Edit Content
          </Link>
        </div>
      </div>
    </header>
  )
}
export default Header
