import AuthUser from '@/helpers/AuthUser'

export const isLoggedIn = (state) => {
  return state.user !== '' && AuthUser.loggedIn()
}
