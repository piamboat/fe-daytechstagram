import React, { useState } from 'react'
import { Post } from '@/components/Type'
import PostBox from '@/components/PostBox'
import DisplayFeed from '@/components/DisplayFeed'
import { GetServerSideProps } from 'next';
import { Button, message, PageHeader } from 'antd';
import { useRouter } from 'next/router'
import { Axios, updateAxios } from '../helpers/daytechbackend';
import Cookies from 'cookies'

// using cookie-cutter package
const cookieCutter = require('cookie-cutter');

interface feedProps {
    jwt: string
    feeds: Post[]
}

const feed:React.FC<feedProps> = ({ jwt, feeds }) => {
    const router = useRouter()
    const [posts, setPosts] = useState<Post[]>(feeds)

    const onSignout = () => {
        cookieCutter.set('jwt', '', { expires: new Date(0) })
        // redirect to landing page
        router.push('/')
    }

    const onMessagePost = async (text: string, file: File) => {
        console.log('file: ', file)

        try {
            // create a post
            const formdatas = new FormData()
            formdatas.append('text', text)
            formdatas.append('image', file)
            await Axios.post('/posts', formdatas, {
                headers: {
                    'Authorization': `Bearer ${jwt}`,
                    'Content-Type': 'multipart/form-data',
                }
            })
            message.success('Successfully create a post')

            // get posts
            const { data } = await Axios.get('/posts', {
                headers: {
                    'Authorization': `Bearer ${jwt}`,
                }
            })
            // set posts
            setPosts(data)
        } catch (error) {
            message.error('Unable to create post')
        }
    }

    const onPostEdit = async (id: number, text: string) => {
        try {
            const params = new URLSearchParams()
            params.append('text', text)
            await updateAxios.patch(`/posts/${id}/text`, params, {
                headers: {
                    'Authorization': `Bearer ${jwt}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })

            // get posts
            const { data } = await Axios.get('/posts', {
                headers: {
                    'Authorization': `Bearer ${jwt}`,
                }
            })
            // set posts
            setPosts(data)
        }
        catch (error) {
            message.error('Unable to edit a post')
        }
    }

    const onPostDelete = async (id: number) => {
        try {
            await Axios.delete(`/posts/${id}`, {
                headers: {
                    'Authorization': `Bearer ${jwt}`,
                }
            })
            message.success('Successfully delete a post')
            // get posts
            const { data } = await Axios.get('/posts', {
                headers: {
                    'Authorization': `Bearer ${jwt}`,
                }
            })
            // set posts
            setPosts(data)
        }
        catch (error) {
            message.error('Unable to delete a post')
        }
    }

    return (
        <div>
            <PageHeader
                title="Daytechstagram"
                subTitle="Share your happiness"
                extra={[
                    <Button ghost danger key="1" onClick={onSignout}>Sign out</Button>,
                ]}
            />
            <PostBox onMessagePost={onMessagePost} />
            <DisplayFeed posts={posts} onPostEdit={onPostEdit} onPostDelete={onPostDelete} />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    // Create a cookies instance
    const cookies = new Cookies(req, res)
    const jwt = cookies.get('jwt')

    // if not found cookie, just redirect to sign in page
    if (!jwt) {
      res.writeHead(302, { Location: '/signin' }) //302 is a just code to redirect
      res.end()
    }

    const { data } = await Axios.get('/posts', {
        headers: {
            'Authorization': `Bearer ${jwt}`,
        }
    })
  
    return {
        props: {
          jwt,
          feeds: data,
        }
    }
}

export default feed
