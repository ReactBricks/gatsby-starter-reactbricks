import React from 'react'
import { Link, navigate } from 'gatsby'
import pageTypes from './pageTypes'
import bricks from './bricks'
import { appId, apiKey } from '../../credentials.config'
import logo from '../images/logo.svg'

const config = {
  appId,
  apiKey,
  pageTypes,
  bricks,
  logo,
  contentClassName: 'content',
  renderLocalLink: ({ href, children, className, activeClassName }) => (
    <Link to={href} className={className} activeClassName={activeClassName}>
      {children}
    </Link>
  ),
  navigate,
  appRootElement: '#___gatsby',
}

export default config
