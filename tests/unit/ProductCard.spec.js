/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils'
import ProductCard from '@/components/ProductCard.vue'
let wrapper

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
  wrapper = shallowMount(ProductCard, {
    propsData: {
      product: mockData,
      theme: 'men'
    },

    computed: {
      selectTheme() {
        return 'men'
      }
    }
  })
})

xdescribe('ProductCard component', () => {
  it('should render the product', () => {
    const duoCard = wrapper.findComponent({ name: 'DuoCard' })
    const x = duoCard.find('.testa')

    expect(duoCard.exists()).toBe(true)
    expect(x.html()).toContain('a')
  })
})
