import { Button, Card, Drawer, FloatButton, Form, Input, InputNumber } from 'antd'
import ButtonGroup from 'antd/es/button/button-group'
import PickerButton from 'antd/es/date-picker/PickerButton'
import FormItem from 'antd/es/form/FormItem'
import React from 'react'

const UserProfileEdit = () => {
  return (
    <div>
      <Form>
        <Form.Item>
          <Input placeholder="Username" />
        </Form.Item>
        <FormItem>
          <Input placeholder="State" />
        </FormItem>
        <FormItem>
          <Input placeholder="Country" />
        </FormItem>
        <FormItem>
          <Input placeholder="School/Uni" />
        </FormItem>
        <FormItem>
          <Input type='Integer' placeholder='Phone' />
        </FormItem>
      </Form>
      <div>
        <Button onClick={() => {navigate('/')}}>Save</Button>
        <Button onClick={() => {navigate('/')}}>cancel</Button>
      </div>
  
    </div>
  )
}

export default UserProfileEdit