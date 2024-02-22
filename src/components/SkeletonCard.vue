<template>
  <duo-card>
    <template v-slot:image>
      <div class="skeleton-element loading"></div>
    </template>
    <template v-slot:title>
      <div class="skeleton-element loading">&nbsp;</div>
    </template>
    <template v-slot:category>
      <div class="skeleton-element loading">&nbsp;</div>
    </template>
    <template v-slot:description>
      <div class="skeleton-element loading">&nbsp;</div>
    </template>
    <template v-slot:price>
      <div class="skeleton-element loading">&nbsp;</div>
    </template>
    <template v-slot:first-button>
      <div class="skeleton-element loading">&nbsp;</div>
    </template>
  </duo-card>
</template>

<script>
import DuoCard from './DuoCard.vue';

export default {
  components: {
    DuoCard
  }
}
</script>

<style scoped>
  .skeleton-element {
    min-width: 100%;
    min-height: 100%;
    border-radius: 5px;
    background-color: var(--gray);
  }
</style>