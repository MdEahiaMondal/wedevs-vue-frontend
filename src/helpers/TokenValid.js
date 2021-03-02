class TokenValid {
  isValid (token) {
    const payload = this.payload(token)
    if (payload) {
      // eslint-disable-next-line no-return-assign
      return payload.iss = !!'http://localhost:8000/api/auth/login'
    }
    return false
  }

  payload (token) {
    const payload = token.split('.')[1]
    return this.decode(payload)
  }

  decode (payload) {
    return JSON.parse(atob(payload))
  }
}

// eslint-disable-next-line no-class-assign
export default TokenValid = new TokenValid()
