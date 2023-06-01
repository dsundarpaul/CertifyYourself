import { Button, Card, Drawer } from 'antd'
import React, { useState } from 'react'
import UserProfileEdit from './UserProfileEdit/UserProfileEdit'

const UserProfile = () => {

  const [open, setOpen] = useState()
  
  const handleProfileEdit = () => setOpen(true)

  const handleDrawerClose = () => setOpen(false)

  return (
    <div>
      <Card>
        <Button onClick={handleProfileEdit}>Edit profile</Button>
      </Card>

      <Drawer title="Profile Edit" placement='right' onClose={handleDrawerClose} open={open} size='large'>
        <UserProfileEdit />
      </Drawer>
    </div>
  )
}

export default UserProfile