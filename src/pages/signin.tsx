import LoginForm from '@/components/LoginForm'
import React from 'react'
import { authAxios } from './api/daytechbackend'

const signin:React.FC = () => {
    // headers: {
    //     Authorization: `Bearer ${accessToken}`
    // }
    const onSignin = async (username: string, password: string) => {
        try {
            const params = new URLSearchParams()
            params.append('username', username)
            params.append('password', password)

            const response = await  authAxios.post('/users/signin', params)
            // store access token we get
            console.log('data: ', response.data)
        } catch (error) {
            console.log('error: ', error)
        }    
    }

    return (
        <React.Fragment>
            <LoginForm onSignin={onSignin} />
        </React.Fragment>
    );
}

export default signin;
