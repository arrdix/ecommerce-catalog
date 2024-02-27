<template>
  <div class="wrapper">
    <div class="duo">
      <div class="duo-image">
        <slot name="image"></slot>
      </div>
      <div class="duo-detail">
        <div class="duo-title">
          <slot name="title"></slot>
        </div>
        <div class="duo-category-rating">
          <slot name="category"></slot>
          <slot name="rating"></slot>
        </div>
        <div class="duo-description">
          <slot name="description"></slot>
        </div>
        <div class="duo-price">
          <slot name="price"></slot>
        </div>
        <div class="button-wrapper">
          <slot name="first-button"></slot>
          <slot name="second-button"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
.duo {
  box-sizing: border-box;
  background-color: var(--white);
  width: 85%;
  height: 85%;
  padding: 5rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 20px;
  
  display: flex;
  gap: 3rem;
}
.duo-image {
  flex: 40%;

  display: flex;
  justify-content: center;
  align-items: center;
}
.duo-detail {
  flex: 60%;
  height: 100%;

  display: flex;
  flex-direction: column;
}
.duo-title {
  margin-bottom: auto;
}
.duo-category-rating {
  padding-block: 1rem;
  display: flex;
  justify-content: space-between;
}
.duo-description {
  padding-block: 1rem;
  border-top: 1px solid rgba(0, 0, 0, .2);
  border-bottom: 1px solid rgba(0, 0, 0, .2);
  height: 100%;
  overflow: auto;

  display: flex;
  justify-content: center;
  align-items: start;
}
.duo-price {
  padding-block: 1rem;
  margin-top: auto;
}
.button-wrapper {
  margin-top: auto;

  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
</style>