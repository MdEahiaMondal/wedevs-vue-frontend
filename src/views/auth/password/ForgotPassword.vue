<template>
  <div class="container-fluid mt-4">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">Forgot Password</div>
          <div class="card-body">
            <form @submit.prevent="forgotPasswordAction">
              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" v-model="forgotCredentials.email" class="form-control" id="exampleInputEmail1">
                <small class="text-danger" v-if="errors.email">{{ errors.email }}</small>
              </div>
              <button disabled v-if="isLoading" type="submit" class="btn btn-primary">Sending...</button>
              <button v-else type="submit" class="btn btn-primary">Submit</button>
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
  name: 'ForgotPassword',
  data () {
    return {
      forgotCredentials: {
        email: '',
        reset_url: 'http://localhost:8080/reset-password'
      },
      isLoading: false,
      errors: []
    }
  },
  methods: {
    ...mapActions('authModule', ['forgotPassword']),
    forgotPasswordAction () {
      this.isLoading = true
      this.forgotPassword(this.forgotCredentials)
        .then(res => {
          this.isLoading = false
          // eslint-disable-next-line no-undef
          Notify.toaster(res.data.message, 'success')
        })
        .catch(error => {
          switch (error.response.status) {
            case 422:
              this.errors = error.response.data.message
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
