import React from 'react'
import * as styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <img
            src="/react-bricks-icon.svg"
            alt="React Bricks"
            className={styles.logo}
          />
          <div className={styles.starterName}>Gatsbyjs empty starter</div>
        </div>
        <div className={styles.copy}>
          © {new Date().getFullYear()}{' '}
          <a href="https://reactbricks.com" className={styles.copyLink}>
            React Bricks
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
