import { Avatar, Button, Card, Drawer, Space } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import React from 'react'
import UserProfileEdit from './UserProfileEdit/UserProfileEdit'
import { useDispatch, useSelector } from 'react-redux'
import { closeUserEditDrawer, openUserEditDrawer } from '../../../store/global-state/actions'

const UserProfile = () => {

  const dispatch = useDispatch()

  const open = useSelector(state => state.global.userEditDrawer)

  const handleProfileEditDrawerOpen = () => dispatch(openUserEditDrawer())
  const handleProfileEditDrawerClose = () => dispatch(closeUserEditDrawer())

  return (
    <div>
      <Card>
        <Space direction="vertical" size={16}>
          <Avatar size={100} shape="square" icon={<UserOutlined />} />
          <Button onClick={handleProfileEditDrawerOpen}>Edit profile</Button>
        </Space>
      </Card>

      <Drawer title="Profile Edit" placement='right' onClose={handleProfileEditDrawerClose} open={open} size='large'>
        <UserProfileEdit />
      </Drawer>
    </div>
  )
}

export default UserProfile