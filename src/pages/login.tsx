import React from 'react'
import { Row, Form, Input, Button, Divider } from 'antd'

const login = () => {
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
                        <Button type="primary">Log in</Button>
                    </Form.Item>
                </Form>
            </Row>
        </React.Fragment>
        
    );
}

export default login;