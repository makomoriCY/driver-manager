import axios from 'axios'

const instance = axios.create({
    baseURL:'https://git.heroku.com/driver-backend1.git'
})

export default instance