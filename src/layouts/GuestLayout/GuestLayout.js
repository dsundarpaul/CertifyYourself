import React from 'react'
// import { Layout } from 'antd'
import './GuestLayoutStyles.css'
import Login from '../../views/auth/login/Login'

// const Content
const GuestLayout = () => {
  return (
    // <Layout.Content>
      <div className='guest-layout-header'>
        <Login />
      </div>
    // </Layout.Content>
  )
}

export default GuestLayout