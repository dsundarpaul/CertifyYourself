import React, { useState } from 'react';
import { Form, Input, Radio, Button, Alert } from 'antd';

const UserForm = () => {
  const [form] = Form.useForm();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (values) => {
    // Form validation
    if (
      !values.username ||
      !values.country ||
      !values.state ||
      !values.gender ||
      !values.school ||
      !values.dateOfBirth
    ) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    // Form submission logic
    // You can perform further processing or send the data to the server

    // Clearing form fields after submission
    form.resetFields();
    setErrorMessage('');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
      <div style={{ width: '300px' }}>
        {errorMessage && <Alert message={errorMessage} type="error" showIcon />}
        <Form form={form} onFinish={handleSubmit}>
          <Form.Item name="username"  rules={[{ required: true }]}>
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item name="country"  rules={[{ required: true }]}>
            <Input placeholder="Country" />
          </Form.Item>
          <Form.Item name="state"  rules={[{ required: true }]}>
            <Input placeholder="State" />
          </Form.Item>
          <Form.Item  rules={[{ required: true }]}>
            <Radio.Group>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
              <Radio value="others">Others</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="school"  rules={[{ required: true }]}>
            <Input placeholder="School" />
          </Form.Item>
          <Form.Item name="dateOfBirth"  rules={[{ required: true }]}>
            <Input type="date" placeholder="Date of Birth" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default UserForm;
