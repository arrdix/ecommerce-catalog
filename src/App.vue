<template>
  <div class="container">
    <product-card />
  </div>
</template>

<script>
import ProductCard from './components/ProductCard.vue'

export default {
  components: {
    ProductCard
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
}
</style>