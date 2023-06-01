import { Form, Input } from 'antd'
import React from 'react'

const UserProfileEdit = () => {
  return (
    <div>
      <Form>
        <Form.Item>
          <Input placeholder="Username" />
        </Form.Item>
      </Form>
    </div>
  )
}

export default UserProfileEdit