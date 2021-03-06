import React from 'react'
import LoginForm from '@/components/LoginForm'
import { authAxios } from '../helpers/daytechbackend'
import { useRouter } from 'next/router'
import { message, PageHeader } from 'antd';

// using cookie-cutter package
const cookieCutter = require('cookie-cutter');

const signin:React.FC = () => {
    const router = useRouter()

    const onSignin = async (username: string, password: string) => {
        try {
            const params = new URLSearchParams()
            params.append('username', username)
            params.append('password', password)
            const { data } = await  authAxios.post('/users/signin', params)

            const today = new Date()
            // set jwt
            cookieCutter.set('jwt', data.accessToken, { expires: today.getTime() + (60 * 60 * 1000) })
            // redirect to feed
            router.push('/feed')
        } catch (error) {
            message.error('Username or password is/are incorrect')
        }
    }

    return (
        <React.Fragment>
            <PageHeader
                title="Daytechstagram"
                subTitle="Share your happiness"
            />
            <LoginForm onSignin={onSignin} />
        </React.Fragment>
    );
}

export default signin;
