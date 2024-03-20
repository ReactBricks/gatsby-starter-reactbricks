import React from 'react'
import { Link } from 'gatsby'
import { types } from 'react-bricks/frontend'

const GatsbyLink: types.RenderLocalLink = ({
  href,
  target,
  rel,
  children,
  className,
  activeClassName,
}) => (
  <Link
    to={href}
    target={target}
    rel={rel}
    className={className}
    activeClassName={activeClassName}
  >
    {children}
  </Link>
)

export default GatsbyLink
