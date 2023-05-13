import React from 'react'
// import { Layout } from 'antd'
import './GuestLayoutStyles.css'

// const Content
const GuestLayout = ({ children }) => {
  return (
    // <Layout.Content>
      <div className='guest-layout-header'>
        { children }
      </div>
    // </Layout.Content>
  )
}

export default GuestLayout