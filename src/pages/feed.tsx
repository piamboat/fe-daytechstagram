import React, { useState } from 'react'
import { Post } from '@/components/Type'
import PostBox from '@/components/PostBox'
import DisplayFeed from '@/components/DisplayFeed'
import { GetServerSideProps } from 'next';
import { Button, PageHeader } from 'antd';
import { useRouter } from 'next/router'

// using cookie-cutter package
const cookieCutter = require('cookie-cutter');

const feed:React.FC = () => {
    const router = useRouter()
    const [posts, setPosts] = useState<Post[]>([])

    const onSignout = () => {
        cookieCutter.set('jwt', '', { expires: new Date(0) })
        // redirect to landing page
        router.push('/')
    }

    const onMessagePost = (message: string) => {
        const dateObj = new Date()
        const time = `Added on ${dateObj.getHours()}:${dateObj.getMinutes()}`
        const newPost = {
            id: Math.floor(Math.random() * 10000) + 1,
            text: message,
            time
        }

        setPosts([newPost, ...posts])
    }

    const onPostEdit = (text: string) => {
        console.log('edit text')
    }

    const onPostDelete = (id: number) => {
        console.log('post deleted id: ', id)
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

// export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
//     // if not found cookie, just redirect to sign in page
//     if (!req.headers.cookie) {
//       res.writeHead(302, { Location: '/signin' }) //302 is just code to redirect
//       res.end()
//     }
  
//     return {
//         props: {
//           jwt: req.headers.cookie
//         }
//     }
// }

export default feed
