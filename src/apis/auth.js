import httpClient from '../axios/index'

export default {
  register (formData) {
    return httpClient.post('/auth/register', formData)
  },
  login (formData) {
    return httpClient.post('/auth/login', formData)
  },
  logout () {
    return httpClient.post('/auth/logout')
  },
  forgotPassword (credentials) {
    return httpClient.post('/auth/forgot-password', credentials)
  },
  resetPassword (credentials) {
    return httpClient.post('/auth/reset-password', credentials)
  },
  userInfo () {
    return httpClient.post('/auth/me')
  }
}
