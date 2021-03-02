<template>
  <div class="container-fluid mt-4">
    <div class="card">
      <div class="card-header d-flex justify-content-between">
        <h1>Product Create</h1>
        <p>
          <button @click="$router.go(-1)" class="btn btn-success">
            Back
          </button>
        </p>
      </div>
      <div class="card-body">
        <form @submit.prevent="productSubmit" enctype="multipart/form-data">
          <div class="form-group">
            <label for="ProductName">Name</label>
            <input v-model="productContent.title" type="text" class="form-control" id="ProductName">
            <small class="text-danger" v-if="errors.title"> {{ errors.title }}</small>
          </div>
          <div class="form-group">
            <label for="ProductPrice">Price</label>
            <input v-model="productContent.price" type="text" class="form-control" id="ProductPrice">
            <small class="text-danger" v-if="errors.price"> {{ errors.price }}</small>
          </div>
          <div class="form-group">
            <label for="ProductDesc">Description</label>
            <textarea v-model="productContent.description" class="form-control" id="ProductDesc"></textarea>
            <small class="text-danger" v-if="errors.description"> {{ errors.description }}</small>
          </div>
          <div class="form-group">
            <label for="photo">Image</label>
            <input id="photo" accept="image/*" type="file" @change="fileLoad" class="form-control">
            <small class="text-danger" v-if="errors.photo"> {{ errors.photo }}</small>
          </div>
          <div class="form-group">
            <img style="width: 200px; height: 128px" :src="productContent.photoShow" alt="">
          </div>
          <button type="submit" class="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
      productContent: {
        photoShow: ''
      },
      errors: []
    }
  },
  methods: {
    ...mapActions('productModule', ['productStore']),
    productSubmit () {
      const data = new FormData()
      for (const field in this.productContent) {
        data.append(field, this.productContent[field])
      }

      // // eslint-disable-next-line no-unused-vars
      this.productStore(data)
        .then(res => {
          this.$router.push({ name: 'Product' })
          // eslint-disable-next-line no-undef
          Notify.toaster('Product Successfully Created', 'success')
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
    },

    fileLoad (event) {
      // eslint-disable-next-line camelcase
      const real_file = event.target.files[0]
      // eslint-disable-next-line camelcase
      this.productContent[event.target.id] = real_file
      if (real_file.size > 1040770) {
        // eslint-disable-next-line no-undef
        Notify.Error('Please select image file size less then 1 MB')
      } else {
        var reader = new FileReader()
        reader.onload = event => {
          this.productContent.photoShow = event.target.result
        }
        reader.readAsDataURL(real_file)
      }
    }
  }
}
</script>

<style scoped>

</style>
