import React, { useState } from 'react'
import { Form, Button, Input, Comment, Avatar } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { Comment as cm } from '@/components/Type'

interface EditorProps {
    comments: cm[]
}

const Editor: React.FC<EditorProps> = ({ comments }) => {
    const { TextArea } = Input
    const [value, setValue] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [replies, setReplies] = useState(comments)
    
    const onPostEditActivate = (id: number) => {
        console.log('edit: ', id)
    }

    const onPostDeleteActivate = (id: number) => {
        console.log('delete: ', id)
    }

    const renderedComments = replies.map(reply => {
        return (
            <Comment
                key={reply.id}
                actions={[
                    <EditOutlined key="edit" onClick={ () => onPostEditActivate(reply.id) } />,
                    <DeleteOutlined key="ellipsis" onClick={ () => onPostDeleteActivate(reply.id) } />,
                ]}
                author={reply.created_at}
                avatar={
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                />
                }
                content={reply.text}
            />
        )
    })

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
            {renderedComments}
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

Editor.defaultProps = {
    comments: []
}

export default Editor