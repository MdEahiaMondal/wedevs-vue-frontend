<template>
  <div class="container-fluid mt-4">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">Reset Your Password</div>
          <div class="card-body">
            <form @submit.prevent="resetPasswordAction">
              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" v-model="resetCredentials.email" class="form-control" id="exampleInputEmail1">
                <small class="text-danger" v-if="errors.email">{{ errors.email }}</small>
              </div>
              <div class="form-group">
                <label for="password">New Password</label>
                <input type="password" v-model="resetCredentials.password" class="form-control" id="password">
                <small class="text-danger" v-if="errors.password">{{ errors.password }}</small>
              </div>
              <div class="form-group">
                <label for="password_confirmation">Confirm New Password</label>
                <input type="password" v-model="resetCredentials.password_confirmation" class="form-control"
                       id="password_confirmation">
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

export default {
  name: 'ResetPassword',
  data () {
    return {
      resetCredentials: {
        email: '',
        token: this.$route.query.token,
        password: '',
        password_confirmation: ''
      },
      errors: []
    }
  },
  mounted () {
    console.log()
  },
  methods: {
    ...mapActions('authModule', ['resetPassword']),
    resetPasswordAction () {
      if (!this.$route.query.token) {
        // eslint-disable-next-line no-undef
        Notify.toaster('Token not found', 'error')
        return
      }
      this.resetPassword(this.resetCredentials)
        .then(res => {
          this.$router.push({ name: 'Login' })
          // eslint-disable-next-line no-undef
          Notify.toaster(res.data.message, 'success')
        })
        .catch(error => {
          switch (error.response.status) {
            case 422:
              this.errors = error.response.data.message
              // eslint-disable-next-line no-constant-condition
              if (!typeof error.response.data.message === 'object') {
                // eslint-disable-next-line no-undef
                Notify.toaster(error.response.data.message, 'error')
              }
              break
            default:
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
