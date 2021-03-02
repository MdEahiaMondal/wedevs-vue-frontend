<template>
  <app-header></app-header>
  <router-view/>
</template>

<style scoped>

</style>
<script>
import AppHeader from '@/components/AppHeader'

export default {
  beforeCreate () {
    this.$store.dispatch('authModule/getUserInfo')
      .catch(e => {
        if (e.response.status === 401) {
          localStorage.removeItem('token')
        }
      })
  },
  components: { AppHeader }
}
</script>
