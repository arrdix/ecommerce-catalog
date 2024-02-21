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
  height: 100vh;;

  display: flex;
  justify-content: center;
  align-items: center;
}
.duo {
  background-color: white;
  width: 70%;
  height: 60%;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 20px;
  
  display: flex;
  gap: 2rem;
}
.duo-image {
  flex: 40%;

  display: flex;
  justify-content: center;
  align-items: center;
}
.duo-image img {
  width: 270px;
  height: 310px;
}
.duo-detail {
  flex: 60%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.duo-description {
  padding-block: 1rem;
  border-top: 1px solid rgba(0, 0, 0, .2);
  border-bottom: 1px solid rgba(0, 0, 0, .2);
  max-height: 130px;
  overflow: auto;
}
.duo-category-rating {
  display: flex;
  justify-content: space-between;
}
.button-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
</style>