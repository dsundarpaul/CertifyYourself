import { Layout } from 'antd'
import React from 'react'

const LandingLayout = ({ childern }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
        <Layout.Content>
            {childern}
        </Layout.Content>
        
    </Layout>
  )
}

export default LandingLayout