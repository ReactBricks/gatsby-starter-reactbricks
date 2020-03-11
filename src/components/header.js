import { Link } from 'gatsby'
import React from 'react'

import gatsbyLogo from '../images/gatsby-icon.png'
import rbLogo from '../images/reactbricks-icon.svg'

import styles from './header.module.css'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.headerMenu}>
        <div className={styles.leftMenu}>
          <div className={styles.logos}>
            <img src={rbLogo} alt="React Bricks" />
            <img src={gatsbyLogo} style={{ marginLeft: '1rem' }} alt="Gatsby" />
          </div>
          <h1>
            <Link to="/">React Bricks + Gatsby</Link>
          </h1>
        </div>
        <Link to="/admin">Admin Dashboard &raquo;</Link>
      </div>
    </div>
  </header>
)

export default Header
