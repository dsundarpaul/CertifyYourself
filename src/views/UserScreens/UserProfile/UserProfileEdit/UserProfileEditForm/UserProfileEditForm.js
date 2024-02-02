import { Button, Form, Input, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import { doc, runTransaction } from 'firebase/firestore';
import { firestore } from '../../../../../firebase/clientApp';

const UserProfileEditForm = ({ userDetails, onFinish, userUid }) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    form.setFieldsValue({
      username: userDetails?.userName || '',
      state: userDetails?.userState || '',
      country: userDetails?.userCountry || '',
      school: userDetails?.userSchoolOrUni || '',
      phone: userDetails?.userPhoneNumber || ''
    });
  }, [form, userDetails]);

  const handleFinish = async (values) => {
    setLoading(true);

    try {
      await runTransaction(firestore, async (transaction) => {
        transaction.set(
          doc(firestore, `users/${userUid}/userDetails`, values.username),
          {
            userName: values.username,
            userState: values.state,
            userCountry: values.country,
            userSchoolOrUni: values.school,
            userPhoneNumber: values.phone
          }
        );
      })
      .then(() => {
        messageApi.success('Successfully Updated User Information');
      })

    } catch (error) {
      console.log(error);
      messageApi.error('Error Updating User Information');
    }

    setLoading(false);
    onFinish();
  };

  return (
    <>
      {contextHolder}
      <Form
        form={form}
        onFinish={handleFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            { required: true, message: 'Please provide a valid username.' }
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="State"
          name="state"
          rules={[{ required: true, message: 'Please provide valid state.' }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Country"
          name="country"
          rules={[{ required: true, message: 'Please provide valid country.' }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="School/Uni"
          name="school"
          rules={[
            { required: true, message: 'Please provide valid school/uni.' }
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            { required: true, message: 'Please provide a phone number.' }
          ]}
        >
          <Input type="Integer" />
        </Form.Item>
  
        <Space wrap>
          <Form.Item>
            <Button htmlType="submit" loading={loading}>
              Save
            </Button>
          </Form.Item>
  
          <Form.Item>
            <Button onClick={onFinish}>Cancel</Button>
          </Form.Item>
        </Space>
      </Form>
    </>
  );
};

export default UserProfileEditForm;