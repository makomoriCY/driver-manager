import axios from 'axios'

const instance = axios.create({
    baseURL:'https://driver-backend1.herokuapp.com'
})

export default instance