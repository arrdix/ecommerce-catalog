<template>
  <nav
    class="navbar"
    @mouseover="collapse" 
    @mouseout="collapse" 
  >
    <div class="navbar-overlay">
      <div class="nav-header">
        <div class="nav-item">
          <i class="nav-logo bi bi-person-circle fs-2"></i>
          <p 
            class="nav-title item-title fs-4 fw-bold" 
            :class="{ collapse: isCollapse === true }"
          >
            Core Initative
          </p>
        </div>
        <div class="line"></div>
        <a 
          class="nav-item clickable"
          @click="renderCart"  
        >
          <i class="bi bi-bag-dash fs-2"></i>
          <p 
            class="item-title fs-5 fw-regular" 
            :class="{ collapse: isCollapse === true }"
          >
            Cart
          </p>
        </a>
        <a 
          class="nav-item clickable"
          @click="renderProducts"
        >
          <i class="bi bi-shop-window fs-2"></i>
          <p 
            class="item-title fs-5 fw-regular" 
            :class="{ collapse: isCollapse === true }"
          >
            Products
          </p>
        </a>
      </div>
      <div class="nav-footer">
        <div v-if="currentIndex"  class="nav-item">
          <i class="bi bi-info-circle-fill fs-2"></i>
          <p 
            class="item-title fs-5 fw-bold"
            :class="{ collapse: isCollapse === true }"
          >
            Product ID: {{ currentIndex }}
          </p>
        </div>
      </div>
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
      return this.$store.getters.getCurrentIndex
    },
  }
}
</script>

<style scoped>
.navbar {
  width: 100%;
  padding-block: 2rem;
  background-color: var(--white);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
  position: relative;
}
.navbar-overlay {
  width: 10rem;
  height: 90%;
  position: absolute;
  padding-inline: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
}
.nav-header, .nav-footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1rem;
}
.nav-item {
  width: 100%;

  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
}
.nav-logo {
  border-bottom: 2px solid rgba(0, 0, 0, .3);
  padding-bottom: 2rem;
}
.nav-title {
  padding-bottom: 2rem;
}
.clickable {
  transform: translateX(0);
  transition: all .3s ease;
  opacity: 1;
}
.clickable:hover {
  cursor: pointer;
  transform: translateX(5%);
  transition: all .3s ease;
  opacity: .8;
}
.item-title {
  width: 100%;
  opacity: 0;
  transition: all .3s ease;
}
.collapse {
  opacity: 1;
  transition: all .3s ease .4s;
}
.bi {
  line-height: 1;
  color: var(--charcoal)
}
</style>