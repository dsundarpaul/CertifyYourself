import { Button, Form, Input, Space } from 'antd'
import React from 'react'

const UserProfileEdit = () => {
  const save = (values) =>{
    console.log(values)
  }
  return (
    <div>
      <Form
        name="default"
        initialValues={{ remember: true }}
        onFinish={save}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            { required: true, message: "Please provide a valid username." },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="State"
          name="state"
          rules={[{ required: true, message: "Please provide valid state." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Country"
          name="country"
          rules={[{ required: true, message: "Please provide valid country." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="School/Uni"
          name="school"
          rules={[
            { required: true, message: "Please provide valid school/uni." },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            { required: true, message: "Please provide a phone number." },
          ]}
        >
          <Input type="Integer" />
        </Form.Item>
        <Button htmlType="submit">Save</Button>
      </Form>
      <Space wrap>
        <Button >Cancel</Button>
      </Space>
    </div>
  );
};

export default UserProfileEdit;
