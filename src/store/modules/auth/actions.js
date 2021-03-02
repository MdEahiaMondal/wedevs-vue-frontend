import auth from '@/apis/auth'

export const userRegister = (context, formData) => {
  return new Promise((resolve, reject) => {
    auth.register(formData).then(res => {
      context.commit('AUTH_SUCCESS', res)
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export const userLogin = (context, formData) => {
  return new Promise((resolve, reject) => {
    auth.login(formData).then(res => {
      context.commit('AUTH_SUCCESS', res)
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export const userLogout = (context) => {
  return new Promise((resolve, reject) => {
    auth.logout().then(res => {
      context.commit('AUTH_LOGOUT', res)
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export const UserForgotPassword = (context, payload) => {
  return new Promise((resolve, reject) => {
    auth.forgotPassword(payload).then(res => {
      // context.commit('authLogout', res)
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export const getUserInfo = (context) => {
  return new Promise((resolve, reject) => {
    auth.userInfo().then(res => {
      context.commit('SET_USER_INFORMATION', res)
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export const forgotPassword = ({ commit }, credentials) => {
  return new Promise((resolve, reject) => {
    auth.forgotPassword(credentials).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export const resetPassword = ({ commit }, credentials) => {
  return new Promise((resolve, reject) => {
    auth.resetPassword(credentials).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
