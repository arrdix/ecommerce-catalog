<template>
  <nav class="navbar">
    <div class="nav-item">
      <i class="nav-logo bi bi-person-circle fs-2"></i>
    </div>
    <div class="line"></div>
    <a 
      class="nav-item clickable"
      @click="renderCart"  
    >
      <i class="bi bi-bag-dash fs-2"></i>
      <p 
        v-if="cartCounter"
        class="cart-counter fs-6"
      >
        {{ cartCounter }}
      </p>
    </a>
    <a 
      class="nav-item clickable"
      @click="renderProducts"
    >
      <i class="bi bi-shop-window fs-2"></i>
    </a>
    <div v-if="currentIndex"  class="nav-item">
      <p class="nav-item fs-4 fw-black">
        {{ currentIndex }}
      </p>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    }
  },

  methods: {
    collapse() {
      this.$emit('hover')
      this.isCollapse = !this.isCollapse
      console.log(this.isCollapse)
    },

    renderCart() {
      this.$emit('renderCart')
    },
    
    renderProducts() {
      this.$emit('renderProducts')
    }
  },

  computed: {
    currentIndex() {
      const index = this.$store.getters.getCurrentIndex
      
      if (index < 1) {
        return 20
      }

      return index
    },

    cartCounter() {
      return this.$store.getters.getInCart.length
    }
  }
}
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 100%;
  padding-block: 3rem;
  padding-inline: 1rem;
  background-color: var(--white);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1rem;
}
.nav-item {
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-item:last-child {
  margin-top: auto;
}
.cart-counter {
  position: absolute;
  bottom: 10px;
  left: 15px;
  width: 20px;
  height: 20px;
  color: var(--white);
  background-color: var(--charcoal);
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-logo {
  border-bottom: 2px solid rgba(0, 0, 0, .3);
  padding-bottom: 2rem;
}
.bi {
  line-height: 1;
  color: var(--charcoal)
}
.clickable {
  transform: scale(1);
  transition: all .3s ease;
}
.clickable:hover {
  cursor: pointer;
  transform: scale(1.15);
  transition: all .3s ease;
}
</style>