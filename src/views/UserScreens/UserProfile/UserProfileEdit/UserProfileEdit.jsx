import { Button, Form, Input, Space } from 'antd'
import React from 'react'

const UserProfileEdit = () => {
  return (
    <div>
      <Form>
        <Form.Item>
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="State" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="Country" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="School/Uni" />
        </Form.Item>
        <Form.Item>
          <Input type='Integer' placeholder='Phone' />
        </Form.Item>
      </Form>
      <Space wrap>
        <Button htmlType="submit">Save</Button>
        <Button onClick={() => {navigate('/')}}>Cancel</Button>
      </Space>
  
    </div>
  )
}

export default UserProfileEdit