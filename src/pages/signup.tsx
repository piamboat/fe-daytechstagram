import React from 'react'
import { PageHeader, message } from 'antd'
import { useRouter } from 'next/router'
import SignupForm from '../components/SignupForm';
import { authAxios } from './api/daytechbackend'

const signup:React.FC = () => {
    const router = useRouter()

    const onSignup = async (username: string, password: string) => {
        try {
            const params = new URLSearchParams()
            params.append('username', username)
            params.append('password', password)
            await  authAxios.post('/users/signup', params)

            message.success('Successfully sign up, Please wait a moment')
            // redirect to signin
            router.push('/signin')
        } catch (error) {
            message.error('Please try again later')
        }    
    }

    return (
        <React.Fragment>
            <PageHeader
                title="Daytechstagram"
                subTitle="Share your happiness"
            />
            <SignupForm onSignup={onSignup} />
        </React.Fragment>
        
    );
}

export default signup;