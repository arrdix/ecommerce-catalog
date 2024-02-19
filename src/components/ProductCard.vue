<template>
  <button @click="nextProduct">
    Next Product
  </button>
  <div v-if="product">
    {{ product.id }}
    {{ product.category }}
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('fetch')
  },

  methods: {
    nextProduct() {
      this.$store.dispatch('fetch')
    },
  },

  computed: {
    product() {
      return this.$store.getters.getProduct
    }
  }
}
</script>

<style scoped>

</style>