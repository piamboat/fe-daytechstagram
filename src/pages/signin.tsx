import React from 'react'
import { Row, Form, Input, Button, Divider } from 'antd'
import Link from 'next/link'

const signin = () => {
    return (
        <React.Fragment>
            <Divider orientation="center">Sign in Form</Divider>
            <Row justify="center" className="p-5">
                <Form>
                    <Form.Item label="Username">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Password">
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            className="mr-2" 
                            type="primary"
                        >
                            Log in
                        </Button>
                        <Link href='/signup'>forgot password?</Link>
                    </Form.Item>
                </Form>
            </Row>
        </React.Fragment>
        
    );
}

export default signin;