import { createStore } from 'vuex'
import axios from 'axios'

export const store = createStore({
  state() {
    return {
      product: null,
      index: 0,
      errorMessage: null
    }
  },

  mutations: {
    setProduct(state, product) {
      state.product = { id: product.id, category: 'unavailable' }

      if (product.category === "men's clothing" || product.category === "women's clothing") {
        state.product = product
      }
    },

    resetIndex(state) {
      state.index = 0
    },

    setErrorMessage(state, errorMessage) {
      state.errorMessage = errorMessage
    }
  },

  actions: {
    async fetch(ctx) {
      try {
        const currentIndex = (store.state.index += 1)
        const response = await axios.get(`https://fakestoreapi.com/products/${currentIndex}`)
        ctx.commit('setProduct', response.data)

        if (currentIndex === 20) {
          ctx.commit('resetIndex')
        }
      } catch (error) {
        ctx.commit('setErrorMessage', error)
      }
    }
  },

  getters: {
    getProduct(state) {
      return state.product
    }
  }
})
