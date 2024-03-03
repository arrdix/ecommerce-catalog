<template>
  <transition name="float">
    <floating-toast 
      v-if="toastText"
      :text="toastText"
    />
  </transition>
  <img 
    src="./assets/backdrop-pattern.png" 
    alt="backdrop-pattern"
    class="backdrop"
    :class="selectTheme"
  />
  <div class="container">
    <side-bar
      @renderCart="renderCart"
      @renderProducts="renderProducts"
      class="sidebar" 
    />
    <div class="cards">
      <transition name="switch" mode="out-in">
        <cart-card 
          v-if="toRender === 'cart'"
          @productPurchased="triggerToast('Product(s) purcashed.')"
          @cartIsEmpty="triggerToast('No product selected.')"
        />
        <div v-else class="product-cards">
          <skeleton-card v-if="isLoading"/>
          <product-card 
            v-else-if="product"
            :product="product"
            :theme="theme"
            @addedToCart="triggerToast('Product added to cart.')"
          />
          <unavailable-card v-else/>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import ProductCard from './components/ProductCard.vue';
import UnavailableCard from './components/UnavailableCard.vue';
import SkeletonCard from './components/SkeletonCard.vue';
import SideBar from './components/SideBar.vue';
import CartCard from './components/CartCard.vue';
import FloatingToast from './components/FloatingToast.vue';

export default {
  components: {
    ProductCard,
    UnavailableCard,
    SkeletonCard,
    SideBar,
    CartCard,
    FloatingToast
  },

  data() {
    return {
      toRender: 'products',
      toastText: null
    }
  },

  created() {
    this.getProduct()
  },

  methods: {
    getProduct() {
      this.$store.dispatch('fetch')
    },

    renderCart() {
      this.toRender = 'cart'
    },

    renderProducts() {
      this.toRender = 'products'
    },

    triggerToast(text) {
      this.toastText = text
      setTimeout(() => {
        this.toastText = null
      }, 1000);
    }
  },

  computed: {
    product() {
      return this.$store.getters.getProduct
    },

    theme() {
      return this.$store.getters.getTheme
    },

    selectTheme() {
      if (this.isLoading) {
        return 'theme-default'
      }

      if (this.product) {
        return {
        'theme-men': this.theme === "men",
        'theme-women': this.theme=== "women",
        }
      }

      return 'theme-unavailable'
    },

    isLoading() {
      return this.$store.getters.getLoadingStatus
    }
  }
}
</script>

<style scoped>
.backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 65vh;
  z-index: -100;
}
.container {
  width: 100%;
  height: 100vh;

  display: flex;
}
.cards, .product-cards {
  width: 100%;
  height: 100vh;
}
.sidebar {
  box-sizing: border-box;
  width: 100%;
  flex: 3.75rem;
  transition: flex 1s ease;
}
.switch-enter-from,
.switch-leave-to {
  opacity: 0;
}
.switch-enter-active,
.switch-leave-active {
  transition: all .3s ease-in-out;
}
.float-enter-from,
.float-leave-to {
  opacity: 0;
  transform: translateY(-50%);
}
.float-enter-active,
.float-leave-active {
  transition: all .5s ease-in-out;
}
</style>