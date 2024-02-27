<template>
  <div class="toast-container">
    <div class="toast fs-4 fw-light">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.toast-container {
  width: 100%;
  position: absolute;

  display: flex;
  justify-content: center;
}
.toast {
  margin: 2rem;
  padding: 1rem;
  width: 30%;
  border-radius: 10px;
  background-color: var(--charcoal);
  color: var(--white);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px;

  display: flex;
  justify-content: center;
}
</style>