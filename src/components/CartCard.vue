<template>
  <solo-card>
    <template v-slot:solo-content>
      <div class="cart-container">
        <div class="cart-header fw-extra-bold fs-1">
          <i class="bi bi-bag-dash-fill"></i>
          Cart
        </div>
        <div class="cart-content">
          <transition name="cart" mode="out-in">
            <div 
              v-if="inCartProduct.length === 0" 
              class="empty"
            >
              Your cart is empty.
            </div>
            <transition-group 
              v-else 
              tag="div" 
              name="item" 
            >
              <div 
                class="product-item"
                v-for="inCart of inCartProduct"  
                :key="inCart.id"
              >
                <input 
                  class="checkbox" 
                  type="checkbox" 
                  :value="inCart"
                  v-model="checkedProducts"
                >
                <img class="product-image" :src="inCart.image" alt="">
                <div class="product-detail">
                  <div class="detail-header">
                    <h1 class="fw-extra-bold fs-3">{{ inCart.title }}</h1>
                    <h2 class="fw-medium fs-4">{{ inCart.category }}</h2>
                  </div>
                  <h1 class="fw-extra-bold fs-2">${{ inCart.price }}</h1>
                </div>
              </div>
            </transition-group>
          </transition>
        </div>
        <div class="cart-footer">
          <div class="cart-total">
            <p class="fw-regular">Total: <span class="fw-bold">${{ total }}</span></p>
          </div>
          <div class="cart-button">
            <custom-button 
              :text="removeText"
              :fill="true"
              @click="checkout"
            />
            <custom-button 
              :text="checkoutText"
              @click="checkout"
            />
          </div>
        </div>
      </div>
    </template>
  </solo-card>
</template>

<script>
import SoloCard from './SoloCard.vue';
import CustomButton from './CustomButton.vue';

export default {
  components: {
    SoloCard,
    CustomButton
  },

  data() {
    return {
      checkoutText: 'Checkout',
      removeText: 'Remove',
      checkedProducts: []
    }
  },

  methods: {
    checkout() {
      if (this.checkedProducts.length) {
        this.$store.commit('updateInCart', this.checkedProducts)
        this.$emit('productPurchased')
      } else {
        this.$emit('cartIsEmpty')
      }

      this.checkedProducts = []
    }
  },

  computed: {
    inCartProduct() {
      return this.$store.getters.getInCart
    },

    total() {
      let totalPrice = 0

      for (const checkedProduct of this.checkedProducts) {
        totalPrice += checkedProduct.price
      }

      return totalPrice
    }
  }
}
</script>

<style scoped>
.cart-container {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cart-header {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-block: 1.5rem;
  padding-inline: 2rem;
  flex: 10%;
  gap: .5rem;
  align-items: start;
  color: var(--charcoal);
}
.cart-content {
  position: relative;
  flex: 80%;
  padding-inline: 2rem;
  overflow: auto;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
}
.cart-content .empty {
  padding-block: 2rem;
}
.product-item {
  height: 35%;
  padding-block: 2rem;
  border-bottom: 2px solid rgba(0, 0, 0, .1);
  display: flex;
  align-items: start;
  gap: 2rem;
}
input.checkbox {
  width: 25px;
  height: 25px;
}
input.checkbox:hover {
  cursor: pointer;
}
.product-image {
  width: 100px;
  height: 150px;
  object-fit: scale-down;
  object-position: top;
}
.product-detail {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
}
.cart-footer {  
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  flex: 10%;
}
.cart-total {
  width: 100%;
  padding-block: .25rem;
  padding-inline: 2rem;
  border-bottom: 2px solid rgba(0, 0, 0, .2);

  display: flex;
  justify-content: end;
}
.cart-button {
  width: 40%;
  padding-block: 1rem;
  padding-inline: 2rem;

  display: flex;
  justify-content: end;
  gap: 1rem;
}
.bi::before {
  line-height: 0.5 !important; 
}
.bi {
  line-height: 0.4 !important; 
}
.item-enter-from,
.item-leave-to {
  opacity: 0;
  transform: translateX(-50%);
}
.item-enter-active {
  transition: all .3s ease-in-out;
}
.item-leave-active {
  transition: all .3s ease-in-out;
  position: absolute;
}
.item-move {
  transition: all .3s ease-in-out .3s;
}
.cart-enter-from {
  opacity: 0;
  transform: translateY(10%);
}
.cart-leave-to {
  opacity: 0;
  transform: translateX(-50%);
}
.cart-enter-active,
.cart-leave-active {
  transition: all .3s ease-in-out;
}
</style>