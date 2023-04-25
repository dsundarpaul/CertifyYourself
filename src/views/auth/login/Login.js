import React from "react"
import { useNavigate } from 'react-router-dom'
import { Card, Form, Input, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
// import { toggleNetworkLoading } from '../../../store/common/actions'
import { doLogin } from '../../../store/auth/actions'

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const networkLoading = useSelector(state => state.common.networkLoading)

    const goToHome = () => {
        navigate('/home')
    }

    const submitFormLogin = (values) => {
        dispatch(doLogin(values, goToHome))
    }

    return (
        <div>
            <div>
                <Card className="mx-auto" style={{boxShadow: '0 4px 24px 0 rgb(34 41 47 / 36%)', maxWidth: 350}}>
                {/* <img className='mx-auto' src={require('../../../assets/images/logo-sm.png')} alt='Susgain' /> */}
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

                        <Form.Item className="text-center">
                            <Button type="dashed" htmlType="submit" loading={networkLoading}>
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </div>
    )
}

export default Login