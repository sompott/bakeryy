import { createRouter, createWebHistory } from 'vue-router'
import SignIn from './components/sign_in.vue'
import SignUp from './components/sign_up.vue'

const routes = [
  { path: '/signin', name: 'signin', component: SignIn }, // ใช้ชื่อ signin สำหรับหน้า sign_in
  { path: '/signup', name: 'signup', component: SignUp }, // ใช้ชื่อ signup สำหรับหน้า sign_up
  // เพิ่มเส้นทางอื่นๆ ตามที่คุณต้องการ
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
