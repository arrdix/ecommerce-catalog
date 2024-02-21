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

<style>
.wrapper {
  width: 100%;
  height: 100vh;;

  display: flex;
  justify-content: center;
  align-items: center;
}
.solo {
  background-color: white;
  width: 70%;
  height: 60%;
  padding: 2rem;
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