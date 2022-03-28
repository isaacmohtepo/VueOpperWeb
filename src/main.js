import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import { createApp } from 'vue'
import '@/assets/css/custom.css'
import router from './router'

import App from './App.vue';

createApp(App).use(router).mount('#app')

