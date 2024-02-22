// TODO: fix read more issue

<template>
  <duo-card v-if="product">
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
      <h2 class="product-rating fw-medium fs-4">{{ product.rating.rate }}/5</h2>
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

export default {
  components: {
    DuoCard,
    CustomButton
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
      this.isMinimized = false
      this.$store.dispatch('fetch')
    },

    minimizeDescription(desc) {
      const splitted = desc.split('')
      const maxChars = 150

      if (!this.isMinimized && splitted.length > maxChars) {
        let newDesc = []

        for (let i = 0; i <= maxChars; i++) {
          newDesc.push(splitted[i])
        }

        // this.isMinimized = true
        return newDesc.join('')
      } 

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
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.read-more {
  color: var(--link);
}
.read-more:hover {
  cursor: pointer;
  opacity: 75%;
}
</style>