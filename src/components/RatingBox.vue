<template>
  <div class="rating-container">
    <span 
      v-html="rating" 
      class="rating-box"
      :class="selectTheme"
    />
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      required: false
    }
  },
  
  methods: {
    createRatingBox(rate) {
      let rating = []
      const circle = '<i class="bi bi-circle"></i>'
      const solidCircle = '<i class="bi bi-circle-fill"></i>'

      for (let i = 0; i < rate; i++) {
        rating.push(solidCircle)
      }

      for (let i = 0; i < 5 - rate; i++) {
        rating.push(circle)
      }

      return rating
    },
  },

  computed: {
    rating() {
      const product = this.$store.getters.getProduct
      const roundRate = Math.round(product.rating.rate)
      const ratingBox = this.createRatingBox(roundRate)
      
      return ratingBox.join('')
    },

    selectTheme() {
      return {
        'theme-men': this.theme === 'men',
        'theme-women': this.theme === 'women',
      }
    }
  }
}
</script>

<style scoped>
.rating-box {
  display: flex;
  gap: 2px;
  line-height: .5;
}
</style>