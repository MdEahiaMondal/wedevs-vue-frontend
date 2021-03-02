import TokenVerify from '@/helpers/TokenValid'

class AuthUser {
  hasToken () {
    const token = localStorage.getItem('token')
    if (token) {
      return !!TokenVerify.isValid(token)
    }
    // eslint-disable-next-line no-unused-expressions
    false
  }

  loggedIn () {
    return this.hasToken()
  }
}

// eslint-disable-next-line no-class-assign
export default AuthUser = new AuthUser()
