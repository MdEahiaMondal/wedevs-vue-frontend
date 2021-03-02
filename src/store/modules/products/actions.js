import product from '@/apis/products'

export const getAllProducts = ({ commit }, pageNumber) => {
  return new Promise((resolve, reject) => {
    product.index(pageNumber).then(res => {
      commit('SET_ALL_PRODUCTS', res)
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

export const showProduct = ({ commit }, productId) => {
  return new Promise((resolve, reject) => {
    product.show(productId).then(res => {
      commit('SET_PRODUCT', res)
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

export const productStore = ({ commit }, FormData) => {
  return new Promise((resolve, reject) => {
    product.store(FormData).then(res => {
      commit('SET_PRODUCT', res)
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

export const productUpdate = ({ commit }, FormData) => {
  return new Promise((resolve, reject) => {
    product.update(FormData).then(res => {
      commit('SET_PRODUCT', res)
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

export const deleteProduct = ({ commit }, productId) => {
  return new Promise((resolve, reject) => {
    product.delete(productId).then(res => {
      commit('SET_DELETE_PRODUCT', productId)
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}
