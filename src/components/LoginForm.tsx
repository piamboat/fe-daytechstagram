import React, { useState } from 'react'
import { Row, Form, Input, Button, Divider } from 'antd'
import Link from 'next/link'

interface LoginForm {
    onSignin: (username: string, password: string) => void
}

const LoginForm:React.FC<LoginForm> = ({ onSignin }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onFormSubmit = () => {
        onSignin(username, password)

        // clear input field
        setUsername('')
        setPassword('')
    } 

    return (
        <React.Fragment>
            <Divider orientation="center">Sign in Form</Divider>
            <Row justify="center" className="p-5 min-h-screen">
                <Form>
                    <Form.Item label="Username">
                        <Input
                            value={ username }
                            onChange={ e => setUsername(e.target.value) }
                        />
                    </Form.Item>
                    <Form.Item label="Password">
                        <Input.Password
                            value={ password }
                            onChange={ e => setPassword(e.target.value) }
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            ghost
                            className="mr-2" 
                            type="primary"
                            onClick={ onFormSubmit }
                        >
                            Log in
                        </Button>
                        <Link href='/signup'>forgot password?</Link>
                    </Form.Item>
                </Form>
            </Row>
        </React.Fragment>
    )
}

export default LoginForm
