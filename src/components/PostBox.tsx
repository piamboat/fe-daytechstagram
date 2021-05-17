import React, { useState } from 'react'
import { Input, Upload, Button, message as ms } from 'antd';
import { UploadOutlined } from '@ant-design/icons'

interface PostBoxProps {
    onMessagePost: (message: string, file: File) => void
}

const PostBox:React.FC<PostBoxProps> = ({ onMessagePost }) => {
    const [message, setMessage] = useState('')
    const [selectedFile, setSelectedFile] = useState<any>(null)

    const onMessageSubmit = () => {
        onMessagePost(message, selectedFile)
        setMessage('')
        setSelectedFile(null)
    }

    const imgProps = {
        onChange(info: any) {
          if (info.file.status !== 'uploading') {
            // console.log(info.file, info.fileList);
            setSelectedFile(info.file.originFileObj)
          }
          if (info.file.status === 'done') {
            ms.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            ms.error(`${info.file.name} file upload failed.`);
          }
        },
      };

    return (
        <div className="flex">
            <Input
                placeholder="Hey? What's on ur mind today ..."
                allowClear
                value={message}
                onChange={ e => setMessage(e.target.value) }
                onPressEnter={ onMessageSubmit }
            />
            <Upload {...imgProps}>
                <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
        </div>
    )
}

export default PostBox
