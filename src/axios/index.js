import axios from 'axios'

const DEVELOPMENT_URL = 'http://127.0.0.1:8000/api'
const PRODUCTION_URL = ''

axios.defaults.baseURL = process.env.NODE_ENV !== 'production' ? DEVELOPMENT_URL : PRODUCTION_URL

// Add a request interceptor
axios.interceptors.request.use(config => {
  config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
  // config.headers['Access-Control-Allow-Origin'] = '*'
  return config
}, error => {
  return Promise.reject(error)
}
)
export default axios
