// TODO: create skeleton card before product-card & unavailable-card

<template>
  <div class="backdrop" />
  <div class="container">
    <product-card v-if="product && product.category !== 'unavailable'"/>
    <unavailable-card v-else/>
    <div v-if="product" class="id-display">
      {{ product.id }}
    </div>
  </div>
</template>

<script>
import ProductCard from './components/ProductCard.vue';
import UnavailableCard from './components/UnavailableCard.vue';

export default {
  components: {
    ProductCard,
    UnavailableCard

  },

  async mounted() {
    await this.$store.dispatch('fetch')
  },

  computed: {
    product() {
      return this.$store.getters.getProduct
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
  background-color: grey;
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
  background-color: white;
  color: black;
  padding: .5rem;
}
</style>