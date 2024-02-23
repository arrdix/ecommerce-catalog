/* eslint-disable no-undef */
import { createStore } from 'vuex'
import { state, mutations, actions, getters } from '@/store/store.js'

let store
let mockData

beforeEach(() => {
  mockData = [
    {
      id: 79,
      theme: 'men',
      product: {
        id: 79,
        category: "men's clothing"
      }
    },
    {
      id: 89,
      theme: 'women',
      product: {
        id: 89,
        category: "women's clothing"
      }
    },
    {
      id: 99,
      theme: 'default',
      product: null
    }
  ]

  store = createStore({
    state: state,
    mutations: mutations,
    actions: {
      fetch: actions.fetch
    },
    getters: {
      getProduct: getters.getProduct,
      getTheme: getters.getTheme,
      getCurrentIndex: getters.getCurrentIndex,
      getLoadingStatus: getters.getLoadingStatus
    }
  })
})

afterEach(() => {
  store.state.currentIndex = 0
})

describe('vuex store flows', () => {
  it('should set the isLoading state to "false" every time API fetching is completed', async () => {
    // arrange
    const loadingStatus = store.getters.getLoadingStatus

    // act
    await store.dispatch('fetch')

    // assert
    const newLoadingStatus = store.getters.getLoadingStatus
    expect(loadingStatus).toBe(true)
    expect(newLoadingStatus).toBe(false)
  })

  it('should increment id every time "fetch" action is called', async () => {
    // arrange
    const oldId = store.getters.getCurrentIndex

    // act
    await store.dispatch('fetch')

    // assert
    const newId = store.getters.getCurrentIndex
    expect(oldId).toBe(0)
    expect(newId).toBe(1)
  })

  it('should update the product state if API fetching success', async () => {
    // act
    await store.dispatch('fetch')

    // assert
    const product = store.getters.getProduct
    expect(product).not.toEqual(null)
  })

  it('should set the theme state to match the product category', async () => {
    for (const mock of mockData) {
      // arrange
      store.state.currentIndex = mock.id

      // act
      await store.dispatch('fetch')

      // assert
      const theme = store.getters.getTheme
      expect(theme).toBe(mock.theme)
    }
  })

  it('should set the product state to "null" if the product category is not match the criteria', async () => {
    for (const mock of mockData) {
      // arrange
      store.state.currentIndex = mock.id

      // act
      await store.dispatch('fetch')

      // assert
      const product = store.getters.getProduct
      expect(product).toEqual(mock.product)
    }
  })
})
