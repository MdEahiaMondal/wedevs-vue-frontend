<template>
  <div class="container-fluid mt-4">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <form @submit.prevent="userLoggedIn">
              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" v-model="loginCredentials.email" class="form-control" id="exampleInputEmail1">
                <small class="text-danger" v-if="errors.email">{{ errors.email }}</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" v-model="loginCredentials.password" class="form-control"
                       id="exampleInputPassword1">
                <small class="text-danger" v-if="errors.password">{{ errors.password }}</small>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <div class="d-flex justify-content-between mt-4">
              <router-link :to="{name: 'forgotPassword'}">Forgot Password</router-link>
              <router-link :to="{name: 'Register'}">Register</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex'
import AuthUser from '@/helpers/AuthUser'

export default {
  name: 'Login',
  beforeCreate () {
    if (AuthUser.loggedIn()) {
      this.$router.push({ name: 'Home' })
    }
  },
  data () {
    return {
      loginCredentials: {},
      errors: []
    }
  },
  methods: {
    ...mapActions('authModule', ['userLogin']),

    userLoggedIn () {
      this.userLogin(this.loginCredentials)
        .then(res => {
          // eslint-disable-next-line no-undef
          Notify.toaster('Successfully logged your account', 'success')
          this.$router.push({ name: 'Product' })
        })
        .catch(error => {
          switch (error.response.status) {
            case 422:
              this.errors = error.response.data.message
              break
            default:
              console.log(error.response.data.message)
              // eslint-disable-next-line no-undef
              Notify.toaster(error.response.data.message, 'error')
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
