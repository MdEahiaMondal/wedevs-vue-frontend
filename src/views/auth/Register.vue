<template>
  <div class="container-fluid mt-4">

    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">Register</div>
          <div class="card-body">
            <form @submit.prevent="usersRegister">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" v-model="registerCredentials.name" class="form-control" id="name">
                <small class="text-danger" v-if="errors.name">{{ errors.name }}</small>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" v-model="registerCredentials.email" class="form-control" id="exampleInputEmail1">
                <small class="text-danger" v-if="errors.email">{{ errors.email }}</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" v-model="registerCredentials.password" class="form-control"
                       id="exampleInputPassword1">
                <small class="text-danger" v-if="errors.password">{{ errors.password }}</small>
              </div>
              <div class="form-group">
                <label for="password_confirmation">Confirm Password</label>
                <input type="password" v-model="registerCredentials.password_confirmation" class="form-control"
                       id="password_confirmation">
                <small class="text-danger" v-if="errors.password_confirmation">{{ errors.password_confirmation }}</small>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
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
      registerCredentials: {},
      errors: []
    }
  },
  methods: {
    ...mapActions('authModule', ['userRegister']),

    usersRegister () {
      this.userRegister(this.registerCredentials)
        .then(res => {
          this.$router.push({ name: 'Product' })
          // eslint-disable-next-line no-undef
          Notify.toaster('Successfully created your account', 'success')
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
