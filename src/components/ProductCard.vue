<template>
  <div class="backdrop" />
  <div class="wrapper">
    <div v-if="product" class="product-card">
      <div class="product-image">
        <img :src="`${product.image}`" alt="">
      </div>
      <div class="product-detail">
        <h1 class="product-title fw-extra-bold fs-1">{{ product.title }}</h1>
        <div class="category-rating">
          <h2 class="product-category fw-medium fs-3">{{ product.category }}</h2>
          <h2 class="product-rating fw-medium fs-3">{{ product.rating.rate }}/5</h2>
        </div>
        <h3 class="product-description fw-regular fs-4">{{ product.description }}</h3>
        <h2 class="product-price fw-extra-bold fs-2">${{ product.price }}</h2>
        <div class="button-wrapper">
          <button class="buy-btn">
            <p>Product ID: {{ product.id }}</p>
          </button>
          <button 
            @click="nextProduct"
            class="next-btn"
          >
            Next Product
          </button>
        </div>
      </div>
    </div>
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
.backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 65vh;
  background-color: pink;
  z-index: -100;
}
.wrapper {
  width: 100%;
  height: 100vh;;

  display: flex;
  justify-content: center;
  align-items: center;
}
.product-card {
  background-color: white;
  width: 70%;
  height: 60%;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 20px;
  
  display: flex;
  gap: 2rem;
}
.product-image {
  flex: 40%;

  display: flex;
  justify-content: center;
  align-items: center;
}
.product-image img {
  width: 270px;
  height: 310px;
}
.product-detail {
  flex: 60%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.product-description {
  padding-block: 1rem;
  border-top: 1px solid rgba(0, 0, 0, .2);
  border-bottom: 1px solid rgba(0, 0, 0, .2);
}
.category-rating {
  display: flex;
  justify-content: space-between;
}
.button-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
button {
  padding-block: .5rem;
  padding-inline: 1rem;
  width: 100%;
}
button:hover {
  cursor: pointer;
}
</style>