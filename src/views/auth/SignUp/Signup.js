import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Card, Form, Input, Button } from 'antd'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from "../../../firebase/clientApp";
import { LOGIN } from "../../../store/auth/types";
import { useDispatch } from "react-redux";

const Signup = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [createUserWithEmailAndPassword, user, loading, authError] = useCreateUserWithEmailAndPassword(auth);

    // const goToHome = () => {
    //     navigate('/home')
    // }

    const [formError, setFormError] = useState("");

    const submitFormLogin = (values) => {
        console.log(values)
        // dispatch(doLogin(values, goToHome))
        
        if (formError) setFormError("");
        if (!values.email.includes("@")) {
            alert('Please enter a valid email')
        // return setFormError("Please enter a valid email");
        }

        if (values.password !== values.confirmPassword) {
            alert('password dont match')
        // return setFormError("Passwords do not match");
        }

        // Valid form inputs
        createUserWithEmailAndPassword(values.email, values.password)
    }

    if(authError) alert(authError.message)
    if(user) { 
        navigate('/home')
        dispatch({ 
            type: LOGIN,
            payload: user
        }) 
    }

  return (
    <div>
            <div>
                <Card className="mx-auto text-center" style={{boxShadow: '0 4px 24px 0 rgb(34 41 47 / 36%)', maxWidth: 350}}>
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
                            label="Conform Password"
                            name="confirmPassword"
                            rules={[{ required: true, message: authError ? authError : 'Please provide valid password.' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item className="text-center">
                            <Button type="dashed" htmlType="submit" loading={loading}>
                                Sign Up
                            </Button>
                        </Form.Item>

                    </Form>
                </Card>
            </div>
        </div>
  )
}

export default Signup