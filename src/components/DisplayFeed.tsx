import React from 'react'
import { Post } from './Type';
import { Card, Avatar } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

interface DisplayFeedProps {
    posts: Post[]
    onPostEdit: (text: string) => void
    onPostDelete: (id: number) => void
}
const DisplayFeed:React.FC<DisplayFeedProps> = ({ posts, onPostEdit, onPostDelete }) => {
    const onPostEditActivate = () => {
        onPostEdit('test')
    }

    const onPostDeleteActivate = (id: number) => {
        onPostDelete(id)
    }

    const renderedFeed = posts.map(post => {
        const { Meta } = Card;

        return (
            <Card
                className="mt-2"
                key={ post.id }
                actions={[
                <EditOutlined key="edit" onClick={ onPostEditActivate } />,
                <DeleteOutlined key="ellipsis" onClick={ () => onPostDeleteActivate(post.id) } />,
                ]}
            >
                <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={post.time}
                description={post.text}
                />
            </Card>
        )
    })

    return (
        <div>
            {renderedFeed}
        </div>
    )
}

export default DisplayFeed
