import { Link } from 'gatsby'
import React from 'react'

import gatsbyLogo from '../images/gatsby-icon.png'
import rbLogo from '../images/reactbricks-icon.svg'

const Header = () => (
  <header
    style={{
      paddingTop: '2rem',
      paddingBottom: '2rem',
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 896,
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={rbLogo} style={{ width: 40 }} alt="React Bricks" />
          <img
            src={gatsbyLogo}
            style={{ width: 40, marginLeft: '1rem' }}
            alt="Gatsby"
          />
          <h1
            style={{
              fontSize: '1.25rem',
              marginLeft: '1rem',
            }}
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
        <Link
          to="/admin"
        >
          Admin Dashboard &raquo;
        </Link>
      </div>
    </div>
  </header>
)

export default Header
