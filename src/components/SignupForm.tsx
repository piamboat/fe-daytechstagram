import React, { useState } from 'react'
import { Row, Form, Input, Button, Divider } from 'antd'
import Link from 'next/link'

interface SignupForm {
    onSignup: (username: string, password: string) => void
}

const SignupForm:React.FC<SignupForm> = ({ onSignup }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onFormSubmit = () => {
        onSignup(username, password)

        // clear input field
        setUsername('')
        setPassword('')
    } 

    return (
        <React.Fragment>
            <Divider orientation="center">Sign up Form</Divider>
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
                            Sign up
                        </Button>
                        <Link href='/signin'>Already have an account?</Link>
                    </Form.Item>
                </Form>
            </Row>
        </React.Fragment>
    )
}

export default SignupForm
