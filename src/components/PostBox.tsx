import React, { useState } from 'react'
import { Input } from 'antd';

interface PostBoxProps {
    onMessagePost: (message: string) => void
}

const PostBox:React.FC<PostBoxProps> = ({ onMessagePost }) => {
    const [message, setMessage] = useState('')

    const onMessageSubmit = () => {
        onMessagePost(message)
        setMessage('')
    }

    return (
        <div>
            <Input
                placeholder="Hey? What's on ur mind today ..."
                allowClear
                value={message}
                onChange={ e => setMessage(e.target.value) }
                onPressEnter={ onMessageSubmit }
            />
        </div>
    )
}

export default PostBox
