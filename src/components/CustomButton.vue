<template>
  <button
    @click="click"
    :class="selectTheme"
    class="custom-button fw-semibold"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    fill: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
    }
  },

  methods: {
    click() {
      this.$emit('buttonClicked')
      this.$store.dispatch('fetch')
    }
  },

  computed: {
    selectTheme() {
      if (this.fill) {
        return {
          'theme-men fill': this.theme === 'men',
          'theme-women fill': this.theme === 'women',
        }
      }

      if (this.theme) {
        return {
        'theme-men': this.theme === 'men',
        'theme-women': this.theme === 'women',
        }
      }

      return 'theme-default fill'
    }
  }
}
</script>

<style scoped>
.custom-button {
  width: 100%;
  padding-block: .5rem;
  padding-inline: 1rem;
  border-radius: 5px;
  opacity: 100%;
  transition: opacity .3s ease;
}
.custom-button:hover {
  cursor: pointer;
  opacity: 75%;
  transition: opacity .3s ease;
}
</style>