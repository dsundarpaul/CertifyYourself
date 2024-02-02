import React, { useState } from "react"

import { Card, Form, Input, Button, DatePicker } from 'antd'



const UserForm = () => {

const submitFormLogin =() => {

  return (
    <div>
      <Card className="mx-auto text-center" style={{ boxShadow: '0 4px 24px 0 rgb(34 41 47 / 36%)', maxWidth: 350  }}>
     <Form
						name="basic"
						initialValues={{ remember: true }}
						onFinish={submitFormLogin}
						autoComplete="off"
						layout="vertical"
					>
						<Form.Item
							label="Email"
							name="email"
							rules={[{ required: true, message: 'Please provide valid email.' }]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							label="Password"
							name="password"
							rules={[{ required: true, message: 'Please provide valid password.' }]}
						>
							<Input.Password />
						</Form.Item>

						<Form.Item
							label="Confirm Password"
							name="confirmPassword"
							rules={[{ required: true, message: authError ? authError : 'Please provide valid password.' }]}
						>
							<Input.Password />
						</Form.Item>

						<Form.Item
							label="Date of birth"
							name="dob"
							rules={[{ required: true, message: 'Please provide date of birth.' }]}
						>
							<DatePicker className="w-full"/>
						</Form.Item>

						<Form.Item className="text-center">
							<Button htmlType="submit" loading={loading}>
                                Sign Up
                            </Button>
						</Form.Item>

					</Form>
     
</Card>
      

            

    </div>
  )
};
}
export default UserForm;


