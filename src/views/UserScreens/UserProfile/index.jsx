import { Avatar, Button, Card, Drawer, Space } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import UserProfileEdit from './UserProfileEdit/UserProfileEdit'

const UserProfile = () => {

  const [open, setOpen] = useState()
  
  const handleProfileEdit = () => setOpen(true)

  const handleDrawerClose = () => setOpen(false)

  return (
    <div>
      <Card>
        <Space direction="vertical" size={16}>
          <Avatar size={100} shape="square" icon={<UserOutlined />} />
          <Button onClick={handleProfileEdit}>Edit profile</Button>
        </Space>
      </Card>

      <Drawer title="Profile Edit" placement='right' onClose={handleDrawerClose} open={open} size='large'>
        <UserProfileEdit />
      </Drawer>
    </div>
  )
}

export default UserProfile