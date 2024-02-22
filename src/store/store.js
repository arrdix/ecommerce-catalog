import { createStore } from 'vuex'
import axios from 'axios'

export const store = createStore({
  state() {
    return {
      product: null,
      theme: 'default',
      currentIndex: 0,
      errorMessage: null,
      isLoading: true
    }
  },

  mutations: {
    setProduct(state, product) {
      if (product.category === "men's clothing" || product.category === "women's clothing") {
        return (state.product = product)
      }

      return (state.product = null)
    },

    setTheme(state, category) {
      if (category === "men's clothing") {
        return (state.theme = 'men')
      }
      if (category === "women's clothing") {
        return (state.theme = 'women')
      }

      return 'default'
    },

    resetIndex(state) {
      state.currentIndex = 0
    },

    setErrorMessage(state, errorMessage) {
      state.errorMessage = errorMessage
    },

    setLoading(state, status) {
      state.isLoading = status
    }
  },

  actions: {
    async fetch(ctx) {
      try {
        ctx.commit('setLoading', true)

        const currentIndex = (store.state.currentIndex += 1)
        const response = await axios.get(`https://fakestoreapi.com/products/${currentIndex}`)

        ctx.commit('setProduct', response.data)
        ctx.commit('setTheme', response.data.category)

        if (currentIndex === 20) {
          ctx.commit('resetIndex')
        }
      } catch (error) {
        ctx.commit('setErrorMessage', error)
      } finally {
        ctx.commit('setLoading', false)
      }
    }
  },

  getters: {
    getProduct(state) {
      return state.product
    },

    getTheme(state) {
      return state.theme
    },

    getCurrentIndex(state) {
      return state.currentIndex
    },

    getLoadingStatus(state) {
      return state.isLoading
    }
  }
})
