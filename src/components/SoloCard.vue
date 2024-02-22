<template>
  <div class="wrapper">
    <div class="solo">
      <slot name="solo-image"></slot>
      <div class="solo-content">
        <slot name="solo-content"></slot>
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
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}
.solo {
  box-sizing: border-box;
  background-color: var(--white);
  width: 85%;
  height: 85%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 20px;
  overflow: hidden;
  
  display: flex;
  justify-content: center;
  align-items: center;
}
.solo-content {
  position: absolute;
  width: 35%;

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>