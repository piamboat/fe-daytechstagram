import React from 'react'
import { Row, Form, Input, Button, Divider } from 'antd'
import Link from 'next/link'

const signup = () => {
    return (
        <React.Fragment>
            <Divider orientation="center">Sign up Form</Divider>
            <Row justify="center" className="p-5">
                <Form>
                    <Form.Item
                        label="Username"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            className="mr-2"
                            type="primary"
                        >
                            Sign up
                        </Button>
                        <Link href='/signin'>Already have an account?</Link>
                    </Form.Item>
                </Form>
            </Row>
        </React.Fragment>
        
    );
}

export default signup;