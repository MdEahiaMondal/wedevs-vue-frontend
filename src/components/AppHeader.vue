<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{name:'Home'}">WeDevs</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <div class="form-inline my-2 my-lg-0">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item" v-if="!isLoggedIn">
              <router-link class="nav-link" :to="{name:'Login'}">Login</router-link>
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
              <router-link class="nav-link" :to="{name:'Register'}">Register</router-link>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
              <router-link class="nav-link" :to="{name:'Product'}">Product</router-link>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
              <a class="nav-link" href="#" @click.prevent="logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters('authModule', ['isLoggedIn'])
  },
  methods: {
    ...mapActions('authModule', ['userLogout']),
    logout () {
      this.userLogout()
        .then(res => {
          // eslint-disable-next-line no-undef
          Notify.toaster('Successfully logged out', 'success')
          this.$router.push({ name: 'Home' })
        })
    }
  }
}
</script>

<style scoped>

</style>
