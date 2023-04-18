import React, { ReactNode } from 'react'
import { useReactBricksContext } from 'react-bricks/frontend'

import * as styles from '../css/layout.module.css'

interface LayoutProps {
  children?: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDarkColorMode } = useReactBricksContext()
  return (
    <div
      className={`${isDarkColorMode ? 'dark' : 'light'} ${styles.container}`}
    >
      <main className={styles.childrenContainer}>{children}</main>
    </div>
  )
}

export default Layout
