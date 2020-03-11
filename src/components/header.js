import { Link } from 'gatsby'
import React from 'react'

import gatsbyLogo from '../images/gatsby-icon.png'
import rbLogo from '../images/reactbricks-icon.svg'

import './header.css'

const Header = () => (
  <header>
    <div className="container">
      <div className="header-menu">
        <div className="left-menu">
          <div className="logos">
            <img src={rbLogo} alt="React Bricks" />
            <img
              src={gatsbyLogo}
              style={{ marginLeft: '1rem' }}
              alt="Gatsby"
            />
          </div>
          <h1
          >
            <Link
              to="/"
              style={{
                color: `#2d3748`,
              }}
            >
              React Bricks + Gatsby
            </Link>
          </h1>
        </div>
        <Link to="/admin">Admin Dashboard &raquo;</Link>
      </div>
    </div>
  </header>
)

export default Header
