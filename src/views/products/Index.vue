<template>
  <div class="container-fluid mt-4">
    <div class="card">
      <div class="card-header d-flex justify-content-between">
        <h1>Product List</h1>
        <p>
          <router-link :to="{name: 'ProductCreate'}" class="btn btn-success">
            Create New
          </router-link>
        </p>
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
          <tr>
            <th scope="col">SI</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th class="text-center" scope="col">Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(product, index) in products.data" :key="product.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>
              <img width="150" height="80" :src="product.image_url" alt="">
            </td>
            <td>{{ product.title }}</td>
            <td>{{ product.price }}</td>
            <td class="text-center">
              <router-link :to="{name: 'showProduct', params: {id: product.id}}" class="btn btn-sm btn-primary">
                View
              </router-link>
              <router-link :to="{name: 'ProductEdit', params: {id: product.id}}" class="btn btn-sm btn-success">
                Edit
              </router-link>
              <button @click="deleteTheProduct(product.id)" class="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
          </tbody>
        </table>
        <pagination v-if="products.data" v-model="page" :records="products.total" :per-page="products.per_page"
                    @paginate="getAllProducts"/>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from 'v-pagination-3'
import { mapActions, mapGetters } from 'vuex'
import AuthUser from '@/helpers/AuthUser'

export default {
  name: 'Index',
  beforeCreate () {
    if (!AuthUser.loggedIn()) {
      this.$router.push({ name: 'Home' })
    }
  },
  data () {
    return {
      searchKeyword: '',
      page: 1
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Pagination
  },
  computed: {
    ...mapGetters('productModule', ['products'])
  },
  mounted () {
    this.getAllProducts(this.page)
  },
  methods: {
    ...mapActions('productModule', ['getAllProducts', 'showProduct', 'deleteProduct']),

    deleteTheProduct (productId) {
      // eslint-disable-next-line no-undef
      Notify.deleteAction()
        .then(res => {
          if (res.value) {
            this.deleteProduct(productId)
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
