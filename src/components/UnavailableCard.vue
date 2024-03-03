<template>
  <solo-card>
    <template v-slot:solo-image>
      <img class="solo-image" src="../assets/unavailable.jpg" alt="unavailable background">
    </template>
    
    <template v-slot:solo-absolute>
      <h1 class="unavailable-message fw-regular fs-3">This product is unavailable to show.</h1>
      <custom-button
        :text="nextProductText"
        @buttonClicked="nextProduct"
      />
    </template>
  </solo-card>
</template>

<script>
import SoloCard from './SoloCard.vue';
import CustomButton from './CustomButton.vue';

export default {
  components: {
    SoloCard,
    CustomButton
  },

  data() {
    return {
      nextProductText: 'Next Product'
    }
  },

  methods: {
    nextProduct() {
      this.$store.dispatch('fetch')
    }
  }
}
</script>

<style scoped>
.solo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.unavailable-message {
  margin-bottom: .5rem;
}
</style>