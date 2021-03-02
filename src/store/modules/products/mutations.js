export const SET_ALL_PRODUCTS = (state, res) => {
  state.products = res.data.products
}
export const SET_PRODUCT = (state, res) => {
  state.product = res.data.product
}
export const SET_DELETE_PRODUCT = (state, productId) => {
  state.products.data = state.products.data.filter(product => {
    return product.id !== productId
  })
}
