import React from "react"
import { useNavigate } from 'react-router-dom'
import { Card, Form, Input, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import { auth } from "../../../firebase/clientApp"
import { USER_AUTH } from "../../../store/auth/types"
// import { toggleNetworkLoading } from '../../../store/common/actions'
// import { doLogin } from '../../../store/auth/actions'

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const networkLoading = useSelector(state => state.common.networkLoading)

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const submitFormLogin = (values) => {
        // dispatch(doLogin(values, goToHome))

        if (!values.email.includes("@")) {
            alert("Please enter a valid email");
        }

        signInWithEmailAndPassword(values.email, values.password);
    }

    if (error) {
        alert(error);
    }

    if (user) {
        console.log(user)
        navigate('/home')
    }

    return (
        <div>
            <div>
                <Card className="mx-auto text-center" style={{boxShadow: '0 4px 24px 0 rgb(34 41 47 / 36%)', maxWidth: 350}}>
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
                            <Button type="dashed" htmlType="submit" loading={loading}>
                                Login
                            </Button>
                        </Form.Item>

                    </Form>
                    <a onClick={() => navigate('/signup')}>Sign Up</a>
                </Card>
            </div>
        </div>
    )
}

export default Login