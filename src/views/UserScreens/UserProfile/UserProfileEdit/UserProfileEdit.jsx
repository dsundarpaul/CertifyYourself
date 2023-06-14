import { Button, Form, Input, Space } from 'antd'
import React, { useState } from 'react'

import { message } from 'antd'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../../../../firebase/clientApp'
import { doc, runTransaction, serverTimestamp } from 'firebase/firestore'

const UserProfileEdit = () => {

  const save = (values) =>{
    console.log(values)
  }

  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [messageApi, contextHolder] = message.useMessage();

  const handleUserProfileEdit = async(values) => {

    setLoading(true)

    try {
      await runTransaction(firestore, async (transaction) => {
        transaction.set(
          doc(firestore, `users/${user?.uid}/userDetails`, values.username),
          {
            userName: values.username,
            userState: values.state,
            userCountry: values.country,
            userSchoolOrUni: values.school,
            userPhoneNumber: values.phone
          }
        )
      })

      messageApi.success('Sucessfully Updated User Information');

    } catch (error) {
      console.log(error);
      messageApi.error('Error Updating User Information');
      setError(error)
    }

    setLoading(false)
  }

  return (
    <div>
      <Form
        name="default"
        initialValues={{ remember: true }}
        onFinish={handleUserProfileEdit}
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

        <Space wrap>
          <Button htmlType="submit">Save</Button>
          <Button >Cancel</Button>
        </Space>
      </Form>
    </div>
  );
};

export default UserProfileEdit;
