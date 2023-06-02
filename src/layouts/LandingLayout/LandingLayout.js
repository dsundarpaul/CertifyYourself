import { Layout } from 'antd'
import React from 'react'

const LandingLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
        <Layout.Content>
            {children}
        </Layout.Content>
        
    </Layout>
  )
}

export default LandingLayout