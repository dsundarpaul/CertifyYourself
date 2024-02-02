import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const StepThree = () => {
  const [formData, setFormData] = useState({ phoneNumber: '', address: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Phone Number:', formData.phoneNumber);
    console.log('Address:', formData.address);
    // Add your logic to handle the form submission
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item >
        <Input name="phoneNumber" placeholder='Phone Number' value={formData.phoneNumber} onChange={handleChange} />
      </Form.Item>

      <Form.Item >
        <Input name="address" placeholder='Address' value={formData.address} onChange={handleChange} />
      </Form.Item>
    </Form>
  );
}

export default StepThree