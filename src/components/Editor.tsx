import React, { useState } from 'react'
import { Form, Button, Input, Comment, Avatar, message, Modal } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { Comment as cm } from '@/components/Type'
import { Axios, updateAxios } from '../pages/api/daytechbackend';

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
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [text, setText] = useState('')
    const [selectedId, setSelectedId] = useState(0)
    
    let renderedComments = replies.map(reply => {
        return (
            <Comment
                key={reply.id}
                actions={[
                    <EditOutlined key="edit" onClick={ () => onCommentEditActivate(reply.id) } />,
                    <DeleteOutlined key="ellipsis" onClick={ () => onCommentDeleteActivate(reply.id) } />,
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

    const handleOk = async () => {
        try {
            const params = new URLSearchParams()
            params.append('text', text)
            await updateAxios.patch(`/comments/${selectedId}/text`, params, {
                headers: {
                    'Authorization': `Bearer ${jwt}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })

            let tmpCreatedAt = ''
            // update comment
            setReplies(replies.map(reply => {
                if ( reply.id === selectedId ) {
                    reply.text = text
                    tmpCreatedAt = reply.created_at
                }
                return reply
            }))
            renderedComments = renderedComments.map(reply => {
                if (reply.key === selectedId) {
                    return (
                        <Comment
                            key={selectedId}
                            actions={[
                                <EditOutlined key="edit" onClick={ () => onCommentEditActivate(selectedId) } />,
                                <DeleteOutlined key="ellipsis" onClick={ () => onCommentDeleteActivate(selectedId) } />,
                            ]}
                            author={tmpCreatedAt}
                            avatar={
                            <Avatar
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"
                            />
                            }
                            content={text}
                        />
                    )
                }
                return reply
            })
            message.success('Comment updated')
        }
        catch (error) {
            message.error('Unable to edit a comment')
        }
        setIsModalVisible(false)
    }
    
    const handleCancel = () => {
        setIsModalVisible(false)
    }

    const onCommentEditActivate = (id: number) => {
        setSelectedId(id)
        setIsModalVisible(true)
    }

    const onCommentDeleteActivate = async (id: number) => {
        try {
            await Axios.delete(`/comments/${id}`, {
                headers: {
                    'Authorization': `Bearer ${jwt}`,
                }
            })
            // set comments
            setReplies(replies.filter(reply => reply.id !== id))
            renderedComments = renderedComments.filter(comment => comment.key !== id)
            message.success('Successfully delete a comment')
        }
        catch (error) {
            message.error('Unable to delete a comment')
        }
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
                            <EditOutlined key="edit" onClick={ () => onCommentEditActivate(data.id) } />,
                            <DeleteOutlined key="ellipsis" onClick={ () => onCommentDeleteActivate(data.id) } />,
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
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form>
                    <Form.Item label="Text">
                        <Input
                            value={ text }
                            onChange={ e => setText(e.target.value) }
                        />
                    </Form.Item>
                </Form>
            </Modal>
            {replies.length > 1 ? `${replies.length} replies` : `${replies.length} reply`}
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
