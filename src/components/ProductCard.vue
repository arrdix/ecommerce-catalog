<template>
  <duo-card v-if="product">
    <template v-slot:image>
      <img class="product-image" :src="`${product.image}`" alt="">
    </template>
    <template v-slot:title>
      <h1 class="product-title fw-extra-bold fs-1">{{ product.title }}</h1>
    </template>
    <template v-slot:category>
      <h2 class="product-category fw-medium fs-3">{{ product.category }}</h2>
    </template>
    <template v-slot:rating>
      <h2 class="product-rating fw-medium fs-3">{{ product.rating.rate }}/5</h2>
    </template>
    <template v-slot:description>
      <h3 class="product-description fw-regular fs-4">{{ product.description }}</h3>
    </template>
    <template v-slot:price>
      <h2 class="product-price fw-extra-bold fs-2">${{ product.price }}</h2>
    </template>
    <template v-slot:first-button>
      <custom-button
        :text="buyProductText"
        :fill="true"
      />
    </template>
    <template v-slot:second-button>
      <custom-button
        :text="nextProductText"
      />
    </template>
  </duo-card>
</template>

<script>
import DuoCard from './DuoCard.vue';
import CustomButton from './CustomButton.vue';

export default {
  components: {
    DuoCard,
    CustomButton
  },

  data() {
    return {
      buyProductText: 'Buy Product',
      nextProductText: 'Next Product'
    }
  },

  computed: {
    product() {
      return this.$store.getters.getProduct
    }
  }
}
</script>

<style>
.product-image {
  width: 270px;
  height: 310px;
}
</style>