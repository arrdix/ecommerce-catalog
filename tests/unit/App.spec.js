/* eslint-disable no-undef */
import { config, shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

config.showDeprecationWarnings = false

let wrapper
let getProduct
const mockData = {
  id: 1,
  title: 'mock title',
  price: 100,
  description: 'mock description',
  category: "men's clothing",
  image: 'mock-image.jpg',
  rating: {
    rate: 5,
    count: 1
  }
}

beforeEach(() => {
  getProduct = jest.spyOn(App.methods, 'getProduct')
  wrapper = shallowMount(App, {
    data() {
      return {
        toRender: 'product',
        toastText: null,
        productState: mockData,
        themeState: 'men',
        selectThemeData: 'theme-men',
        loadingState: false
      }
    },

    computed: {
      product: {
        get() {
          return this.productState
        },

        set(val) {
          this.productState = val
        }
      },

      theme: {
        get() {
          return this.themeState
        },

        set(val) {
          this.themeState = val
        }
      },

      selectTheme: {
        get() {
          return this.selectThemeData
        },

        set(val) {
          this.selectThemeData = val
        }
      },

      isLoading: {
        get() {
          return this.loadingState
        },

        set(val) {
          this.loadingState = val
        }
      }
    },

    global: {
      mocks: {
        $store: {
          dispatch: jest.fn(() => mockData)
        }
      }
    }
  })
})

describe('App component', () => {
  it('should call getProduct on startup', () => {
    // assert
    expect(getProduct).toHaveBeenCalled()
  })

  it('should render SkeletonCard while waiting for API fetching to complete', async () => {
    // arrange
    wrapper.vm.isLoading = true

    // act
    await wrapper.vm.$nextTick()
    const skeletonCard = await wrapper.findComponent({ name: 'SkeletonCard' })

    // assert
    expect(skeletonCard.exists()).toBeTruthy()
  })

  it('should render ProductCard if API fetching complete', async () => {
    // act
    await wrapper.vm.$nextTick()
    const productCard = await wrapper.findComponent({ name: 'ProductCard' })

    // assert
    expect(productCard.exists()).toBeTruthy()
  })

  it('should render UnavailableCard if product state is falsy', async () => {
    // arrange
    wrapper.vm.product = null

    // act
    await wrapper.vm.$nextTick()
    const unavailableCard = await wrapper.findComponent({ name: 'UnavailableCard' })

    // assert
    expect(unavailableCard.exists()).toBeTruthy()
  })

  it('should render FloatingToast if App children fires an emit event', async () => {
    // arrange
    const triggerToast = jest.spyOn(wrapper.vm, 'triggerToast')

    // act
    await wrapper.findComponent({ name: 'ProductCard' }).vm.$emit('addedToCart')

    // assert
    expect(triggerToast).toHaveBeenCalled()
  })

  it('should render backdrop image and get the correct theme', async () => {
    // arrange
    const backdropImg = await wrapper.find('.backdrop')

    // assert
    expect(backdropImg.exists()).toBeTruthy()
    expect(backdropImg.classes()).toContain('theme-men')
  })
})
