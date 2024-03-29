import './assets/style/base.css'
import './assets/style/animation.css'

import { createApp } from 'vue'
import { store } from './store/store.js'
import App from './App.vue'

const app = createApp(App)

app.use(store)
app.mount('#app')
