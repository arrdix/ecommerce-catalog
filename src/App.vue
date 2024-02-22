<template>
  <div 
    class="backdrop"
    :class="selectTheme"
  />
  <div class="container">
    <skeleton-card v-if="isLoading"/>
    <product-card 
      v-else-if="product"
      :product="product"
      :theme="theme"
    />
    <unavailable-card v-else/>
  </div>
  <div v-if="currentIndex" class="id-display">
    {{ currentIndex }}
  </div>
</template>

<script>
import ProductCard from './components/ProductCard.vue';
import UnavailableCard from './components/UnavailableCard.vue';
import SkeletonCard from './components/SkeletonCard.vue';

export default {
  components: {
    ProductCard,
    UnavailableCard,
    SkeletonCard
  },

  async created() {
    await this.$store.dispatch('fetch')
  },

  computed: {
    product() {
      return this.$store.getters.getProduct
    },

    theme() {
      return this.$store.getters.getTheme
    },

    currentIndex() {
      return this.$store.getters.getCurrentIndex
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

      return 'theme-default'
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
}
.id-display {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: var(--white);
  color: var(--black);
  padding: .5rem;
}
</style>