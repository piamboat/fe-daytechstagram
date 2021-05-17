import React, { useState } from 'react'
import { Form, Button, Input, Comment, Avatar, message } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { Comment as cm } from '@/components/Type'
import { Axios } from '../pages/api/daytechbackend';

interface EditorProps {
    comments: cm[],
    postId: number,
    jwt: string
}

const Editor: React.FC<EditorProps> = ({ comments, postId, jwt }) => {
    const { TextArea } = Input
    const [value, setValue] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [replies, setReplies] = useState(comments)
    
    let renderedComments = replies.map(reply => {
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

    const onPostEditActivate = (id: number) => {
        console.log('edit: ', id)
    }

    const onPostDeleteActivate = (id: number) => {
        console.log('delete: ', id)
    }

    const onSubmit = async () => {
        if (!value) {
          return;
        }
        setSubmitting(true)

        try {
            // send data to db
            const params = new URLSearchParams()
            params.append('text', value)
            params.append('postId', JSON.stringify(postId))
            const { data } = await Axios.post('/comments', params, {
                headers: {
                    'Authorization': `Bearer ${jwt}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })

            setTimeout(() => {
                setSubmitting(false)
                setValue('')
                
                //set comments
                setReplies([...replies, data])
                // update renderedComments
                renderedComments = [...renderedComments,
                    <Comment
                        key={data.id}
                        actions={[
                            <EditOutlined key="edit" onClick={ () => onPostEditActivate(data.id) } />,
                            <DeleteOutlined key="ellipsis" onClick={ () => onPostDeleteActivate(data.id) } />,
                        ]}
                        author={data.created_at}
                        avatar={
                        <Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            alt="Han Solo"
                        />
                        }
                        content={data.text}
                    />
                ]
            }, 1000);
            message.success('Successfully create a comment')
        } catch (error) {
            message.error('Unable to create comment')
        }
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
