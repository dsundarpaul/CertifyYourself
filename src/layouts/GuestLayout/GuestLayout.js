import React from 'react'
import { Layout } from 'antd'
import './GuestLayoutStyles.css'
import Login from '../../views/auth/login/Login'

// const Content
const GuestLayout = ({ childern }) => {
  return (
    // <Layout.Content>
      <div className='guest-layout-header'>
        {/* {childern} */}
        <Login />
      </div>
    // </Layout.Content>
  )
}

export default GuestLayout