export const AUTH_SUCCESS = (state, payload) => {
  // save localstorage
  localStorage.setItem('token', payload.data.access_token)
  state.token = payload.data.access_token
  state.user = payload.data.user
}

export const AUTH_LOGOUT = (state) => {
  localStorage.removeItem('token')
  state.token = ''
  state.user = ''
  state.role = ''
}

export const SET_USER_INFORMATION = (state, payload) => {
  state.user = payload.data.user
}
