import { navigate } from 'gatsby'
import { types } from 'react-bricks/frontend'

import bricks from './bricks'
import pageTypes from './pageTypes'
import GatsbyLink from './GatsbyLink'

const config: types.ReactBricksConfig = {
  appId: process.env.GATSBY_APP_ID + '',
  apiKey: process.env.API_KEY + '',
  environment: process.env.GATSBY_PUBLIC_ENVIRONMENT,
  pageTypes,
  bricks,
  logo: '/logo.svg',
  previewPath: '/preview',
  //contentClassName: 'content',
  // isDarkColorMode: ...,
  // toggleColorMode: ...,
  renderLocalLink: GatsbyLink,
  navigate,
  loginPath: '/admin',
  editorPath: '/admin/editor',
  playgroundPath: '/admin/playground',
  appSettingsPath: '/admin/app-settings',
  useCssInJs: false,
  appRootElement: '#___gatsby',
  clickToEditSide: types.ClickToEditSide.BottomRight,
  customFields: [],
  //responsiveBreakpoints: [{ type: types.DeviceType.Phone, width: 480, label: 'Smartphone'}],
  enableAutoSave: true,
  disableSaveIfInvalidProps: false,
  enablePreview: true,
  enablePreviewImage: true,
  experimentalSidebarRepeaterItems: true,
}

export default config
