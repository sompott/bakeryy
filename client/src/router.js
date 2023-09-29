import { createRouter, createWebHistory } from 'vue-router'
import SignIn from './components/sign_in.vue'
import SignUp from './components/sign_up.vue'
import PostUser from './components/post.vue'
import MainWep from './components/mainwep.vue'
import Note from './components/note.vue'
import Category from './components/category.vue'
import Bread from './components/bread.vue'
import Cake from './components/cake.vue'
import Cookie from './components/cookie.vue'
import Croissant from './components/croissant.vue'
import Eclairs from './components/eclairs.vue'
import Mustasd from './components/mustasd.vue'
import Pie from './components/pie.vue'

const routes = [
  { path: '/', name: 'signin', component: SignIn }, // ใช้ชื่อ signin สำหรับหน้า sign_in
  { path: '/signup', name: 'signup', component: SignUp }, // ใช้ชื่อ signup สำหรับหน้า sign_up
  { path: '/post', name: 'post', component: PostUser }, // ใช้ชื่อ signup สำหรับหน้า sign_up
  { path: '/mainwep', name: 'mainwep', component: MainWep },
  { path: '/note', name: 'note', component: Note },
  { path: '/category', name: 'category', component: Category },
    { path: '/bread', name: 'bread', component: Bread },
    { path: '/cake', name: 'cake', component: Cake },
    { path: '/cookie', name: 'cookie', component: Cookie },
    { path: '/eclairs', name: 'eclairs', component: Eclairs },
    { path: '/mustasd', name: 'mustasd', component: Mustasd },
    { path: '/pie', name: 'pie', component: Pie },

  // เพิ่มเส้นทางอื่นๆ ตามที่คุณต้องการ
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
