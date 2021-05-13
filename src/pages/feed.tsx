import React, { useState } from 'react'
import { Post } from '@/components/Type'
import PostBox from '@/components/PostBox'
import DisplayFeed from '@/components/DisplayFeed'
import { GetServerSideProps } from 'next';

const feed:React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([])

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
            <PostBox onMessagePost={onMessagePost} />
            <DisplayFeed posts={posts} onPostEdit={onPostEdit} onPostDelete={onPostDelete} />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({
    req: {
        headers: { cookie },
    }
}) => {
   return {
       redirect: {
           destination: '/signin',
           permanent: false,
       }
   }
}

export default feed
