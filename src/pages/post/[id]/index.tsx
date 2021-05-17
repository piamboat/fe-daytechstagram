import React from 'react'
import { GetServerSideProps } from 'next'
import Cookies from 'cookies'
import { Axios } from '../../api/daytechbackend'
import { Post } from '@/components/Type'
import { Comment, Avatar, PageHeader, Button } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import Editor from '@/components/Editor'

// using cookie-cutter package
const cookieCutter = require('cookie-cutter');

interface postProps {
    jwt: string
    post: Post
}

const post:React.FC<postProps> = ({ jwt, post }) => {
    const router = useRouter()

    const onSignout = () => {
        cookieCutter.set('jwt', '', { expires: new Date(0) })
        // redirect to landing page
        router.push('/')
    }

    const onPostEditActivate = (id: number) => {
        console.log('edit: ', id)
    }

    const onPostDeleteActivate = (id: number) => {
        console.log('delete: ', id)
    }

    return (
        <React.Fragment>
            <PageHeader
                title="Daytechstagram"
                subTitle="Share your happiness"
                extra={[
                    <Button ghost danger key="1" onClick={onSignout}>Sign out</Button>,
                ]}
            />
            <Comment
                key={post.id}
                actions={[
                    <EditOutlined key="edit" onClick={ () => onPostEditActivate(post.id) } />,
                    <DeleteOutlined key="ellipsis" onClick={ () => onPostDeleteActivate(post.id) } />,
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
                {post.comments.length > 1 ? `${post.comments.length} replies` : `${post.comments.length} reply`}
                <Comment
                    avatar={
                        <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                        />
                    }
                    content={
                        <Editor />
                    }
                />
            </Comment>
        </React.Fragment>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
    const { id } = query // post's id 
    // Create a cookies instance
    const cookies = new Cookies(req, res)
    const jwt = cookies.get('jwt')

    // if not found cookie, just redirect to sign in page
    if (!jwt) {
      res.writeHead(302, { Location: '/signin' }) //302 is a just code to redirect
      res.end()
    }

    // get specific post
    const { data } = await Axios.get(`/posts/${id}`, {
        headers: {
            'Authorization': `Bearer ${jwt}`,
        }
    })

    return {
        props: {
          jwt,
          post: data,
        }
    }
}

export default post
