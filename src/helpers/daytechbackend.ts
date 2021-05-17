import axios from 'axios'

// headers: {
//     Authorization: `Bearer ${accessToken}`
// }
export const authAxios = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
})

export const Axios = axios.create({
    baseURL: 'http://localhost:3000',
})

export const updateAxios = axios.create({
    baseURL: 'http://localhost:3000',
})
