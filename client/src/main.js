import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // ตรวจสอบการนำเข้า Vue Router ให้ถูกต้อง

createApp(App).use(router).mount('#app')

