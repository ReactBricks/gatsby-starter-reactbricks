import React, { useState } from 'react'
import { ReactBricks } from 'react-bricks/frontend'

import config from './src/react-bricks/config'
import './src/css/style.css'

const ReactBricksApp = ({ element }) => {
  const savedColorMode =
    typeof window === 'undefined' ? '' : localStorage.getItem('color-mode')
  const [colorMode, setColorMode] = useState(savedColorMode || 'light')
  const toggleColorMode = () => {
    const newColorMode = colorMode === 'light' ? 'dark' : 'light'
    setColorMode(newColorMode)
    localStorage.setItem('color-mode', newColorMode)
  }

  const reactBricksConfig = {
    ...config,
    isDarkColorMode: colorMode === 'dark',
    toggleColorMode,
    contentClassName: `${colorMode} ${
      colorMode === 'dark' ? 'dark darkContentClass' : 'light whiteContentClass'
    }`,
  }
  return <ReactBricks {...reactBricksConfig}>{element}</ReactBricks>
}

// Wraps every page in ReactBricks component
export const wrapPageElement = ({ element }) => {
  return <ReactBricksApp element={element} />
}
