import React from 'react'
import { Admin, MediaLibrary } from 'react-bricks'
import { Helmet } from 'react-helmet'

const AdminMediaLibrary: React.FC = () => {
  return (
    <Admin>
      <Helmet title="Media Library" />
      <MediaLibrary />
    </Admin>
  )
}

export default AdminMediaLibrary
