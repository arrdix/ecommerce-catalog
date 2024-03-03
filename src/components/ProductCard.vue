<template>
  <duo-card v-if="product">
    <p class="testa"></p>
    <template v-slot:image>
      <img class="product-image" :src="`${product.image}`" alt="">
    </template>

    <template v-slot:title>
      <h1 
        class="product-title fw-extra-bold fs-1"
        :class="selectTheme"
      >
        {{ product.title }}
      </h1>
    </template>

    <template v-slot:category>
      <h2 class="product-category fw-semibold fs-4">{{ product.category }}</h2>
    </template>

    <template v-slot:rating>
      <div class="product-rating">
        <h2 class="fw-medium fs-4">{{ product.rating.rate }}/5</h2>
        <rating-box :theme="theme"/>
      </div>
    </template>

    <template v-slot:description>
      <h3 class="product-description fw-regular fs-4">
        {{ minimizeDescription(product.description) }}
        <span>
          <a
            v-if="!isMinimized"
            @click="readMore"
            class="read-more"
          >
            (Read more)
          </a>
        </span>
      </h3>
    </template>

    <template v-slot:price>
      <h2 
        class="product-price fw-extra-bold fs-2"
        :class="selectTheme"
      >
        ${{ product.price }}
      </h2>
    </template>

    <template v-slot:first-button>
      <custom-button
        :text="buyProductText"
        :fill="true"
        :theme="theme"
        @buttonClicked="buyProduct(product)"
      />
    </template>

    <template v-slot:second-button>
      <custom-button
        :text="nextProductText"
        :theme="theme"
        @buttonClicked="nextProduct"
      />
    </template>
  </duo-card>
</template>

<script>
import DuoCard from './DuoCard.vue';
import CustomButton from './CustomButton.vue';
import RatingBox from './RatingBox.vue';

export default {
  components: {
    DuoCard,
    CustomButton,
    RatingBox
  },

  data() {
    return {
      buyProductText: 'Buy Product',
      nextProductText: 'Next Product',
      isMinimized: false,
    }
  },

  props: {
    product: {
      type: Object,
      required: true
    },
    theme: {
      type: String,
      required: false
    }
  },

  methods: {
    readMore() {
      this.isMinimized = true
    },

    nextProduct() {
      this.$store.dispatch('fetch')
    },

    buyProduct(product) {
      this.$store.commit('setInCart', product)
      this.$emit('addedToCart')
    },

    minimizeDescription(desc) {
      const splitted = desc.split('')
      const maxChars = 300

      if (!this.isMinimized && splitted.length > maxChars) {
        let newDesc = []

        for (let i = 0; i <= maxChars; i++) {
          newDesc.push(splitted[i])
        }

        newDesc.push('...')
        return newDesc.join('')
      }
      
      this.isMinimized = true
      return desc
    },
  },

  computed: {
    selectTheme() {
      return {
        'theme-men': this.theme === 'men',
        'theme-women': this.theme === 'women',
      }
    },
  }
}
</script>

<style scoped>
.product-image {
  width: 90%;
  height: 90%;
  object-fit: contain;
}
.product-rating {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
}
.read-more {
  color: var(--link);
}
.read-more:hover {
  cursor: pointer;
  opacity: 75%;
}
</style>