import React from "react"
import { useNavigate } from 'react-router-dom'
import { Card, Form, Input, Button, Switch } from 'antd'
import { useDispatch } from 'react-redux'
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import { auth } from "../../../firebase/clientApp"
import ComicSwitch from "../../../components/FormComponents/ComicSwitch/ComicSwitch"
import ComicButton from "../../../components/FormComponents/ComicButton/ComicButton"
// import { USER_AUTH } from "../../../store/auth/types"
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
        navigate('/feed')
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
                            help={ <a onClick={() => {}} >Forgot Password?</a> }
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item className="text-center mt-10">
                            <ComicButton htmlType="submit" loading={loading}>
                                Login
                            </ComicButton>  
                        </Form.Item>

                        <Form.Item className="text-center">
                            <a onClick={() => navigate('/signup')}>Sign Up</a>
                        </Form.Item>

                    </Form>
                    
                </Card>
            </div>
        </div>
    )
}

export default Login