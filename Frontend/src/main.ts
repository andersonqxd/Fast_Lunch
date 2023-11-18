
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/router'





const app = createApp(App)
app.use(router)

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"

// import { createPinia } from 'pinia'
// app.use(createPinia())