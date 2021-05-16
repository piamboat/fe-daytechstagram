import React, { useState } from 'react'
import { Post } from './Type';
import { Comment, Avatar, Modal, Form, Input } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

interface DisplayFeedProps {
    posts: Post[]
    onPostEdit: (id: number, text: string) => void
    onPostDelete: (id: number) => void
}

const DisplayFeed:React.FC<DisplayFeedProps> = ({ posts, onPostEdit, onPostDelete }) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [text, setText] = useState('')
    const [selectedId, setSelectedId] = useState(0)

    const handleOk = () => {
        onPostEdit(selectedId, text)
        setIsModalVisible(false)
    };
    
    const handleCancel = () => {
        setIsModalVisible(false)
    };
    
    const onPostEditActivate = (id: number) => {
        setSelectedId(id)
        setIsModalVisible(true)
    }

    const onPostDeleteActivate = (id: number) => {
        onPostDelete(id)
    }

    const renderedFeed = posts.map(post => {
        return (
            <div key={post.id}>
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
                <Comment
                    actions={[
                        <EditOutlined key="edit" onClick={ () => onPostEditActivate(post.id) } />,
                        <DeleteOutlined key="ellipsis" onClick={ () => onPostDeleteActivate(post.id) } />,
                        <span key="comment-nested-reply-to">Reply to</span>,
                        ]}
                    author={post.created_at}
                    avatar={
                    <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                    />
                    }
                    content={post.text}
                >
                </Comment>
            </div> 
        )
    })

    return (
        <div>
            {renderedFeed}
        </div>
    )
}

export default DisplayFeed
