/* eslint-disable no-undef */
// import { store } from '@/store/store.js'
import { mount } from '@vue/test-utils'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import App from '@/App.vue'
import { createStore } from 'vuex'

let wrapper
let store

beforeEach(() => {
  store = createStore()
  store.dispatch = jest.fn()

  wrapper = mount(App, {
    global: {
      plugins: [store]
    }
  })
})

describe('rendering product', () => {
  it('should be clicked', () => {
    wrapper.find('.next-btn').trigger('click')

    expect(store.dispatch).toBeCalledWith('fetch', 'tes')
  })
})
