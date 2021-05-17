import React, { useState } from 'react'
import { Form, Button, Input } from 'antd'

const Editor = () => {
    const { TextArea } = Input
    const [value, setValue] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [comments, setComments] = useState([])
    
    const onSubmit = () => {
        if (!value) {
          return;
        }
        setSubmitting(true)
        setTimeout(() => {
            setSubmitting(false)
            setValue('')
            //set comments

        }, 1000);
    }

    return (
        <React.Fragment>
            <Form.Item>
                <TextArea rows={4} onChange={ e => setValue(e.target.value) } value={value} />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                    Add Comment
                </Button>
            </Form.Item>
        </React.Fragment>
    )
}

export default Editor