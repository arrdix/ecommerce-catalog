<template>
  <solo-card>
    <template v-slot:solo-image>
      <img class="solo-image" src="../assets/unavailable.jpg" alt="">
    </template>
    <template v-slot:solo-content>
      <h1 class="unavailable-message fw-regular fs-3">This product is unavailable to show</h1>
      <custom-button
        :text="nextProductText"
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
  }
}
</script>

<style scoped>
.solo-image {
  opacity: 10%;
}
.unavailable-message {
  margin-bottom: .5rem;
}
</style>