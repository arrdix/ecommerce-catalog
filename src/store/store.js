import { createStore } from 'vuex'
import axios from 'axios'

export const state = {
  product: null,
  theme: 'default',
  currentIndex: 0,
  errorMessage: null,
  isLoading: true,
  inCart: []
}

export const mutations = {
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

    return (state.theme = 'default')
  },

  resetIndex(state) {
    state.currentIndex = 0
  },

  setErrorMessage(state, errorMessage) {
    state.errorMessage = errorMessage
  },

  setLoading(state, status) {
    state.isLoading = status
  },

  setInCart(state, payload) {
    if (payload) {
      state.inCart.push(payload)
    }
  },

  updateInCart(state, payload) {
    if (payload) {
      for (const product of payload) {
        state.inCart = state.inCart.filter((item) => item.id !== product.id)
      }
    }
  }
}

export const actions = {
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
}

export const getters = {
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
  },

  getInCart(state) {
    return state.inCart
  }
}

export const store = createStore({
  state,
  mutations,
  actions,
  getters
})
