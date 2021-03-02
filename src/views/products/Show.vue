<template>
  <div class="container-fluid mt-4">
    <div class="card">
      <div class="card-header d-flex justify-content-between">
        <h1>Product Details</h1>
        <p>
          <button @click="$router.go(-1)" class="btn btn-success">
            Back
          </button>
        </p>
      </div>
      <div class="card-body">
        <div class="row justify-content-center">
          <img style="width: 400px; height: 300px" :src="product.image_url" :alt="product.title">
          <div class="col">
            <h2>{{ product.title }}</h2>
            <h5>{{ product.price }}</h5>
            <p>{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AuthUser from '@/helpers/AuthUser'

export default {
  name: 'Index',
  beforeCreate () {
    if (!AuthUser.loggedIn()) {
      this.$router.push({ name: 'Home' })
    }
  },
  computed: {
    ...mapGetters('productModule', ['product'])
  },
  mounted () {
    this.showProduct(this.$route.params.id)
  },
  methods: {
    ...mapActions('productModule', ['showProduct'])
  }
}
</script>

<style scoped>

</style>
