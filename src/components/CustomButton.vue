<template>
  <button
    @click="click"
    :class="{ fill: fill }"
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
    thene: {
      type: String,
      default: 'gray'
    }
  },

  methods: {
    click() {
      this.$store.dispatch('fetch')
    }
  }
}
</script>

<style>
.custom-button {
  width: 100%;
  padding-block: .5rem;
  padding-inline: 1rem;
  border: 2px solid black;
  border-radius: 5px;
  background-color: white;
  color: black;
}
.custom-button:hover {
  cursor: pointer;
}
.fill {
  background-color: gray;
  color: white;
}
</style>