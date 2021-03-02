import httpClient from '../axios/index'

export default {
  index (pageNumber) {
    return httpClient.get('/products?page=' + pageNumber)
  },
  show (productId) {
    return httpClient.get('/products/' + productId)
  },
  store (formData) {
    return httpClient.post('/products', formData)
  },
  update (formData) {
    return httpClient.post('/products/' + formData.get('id'), formData)
  },
  delete (productId) {
    return httpClient.delete('/products/' + productId)
  }
}
