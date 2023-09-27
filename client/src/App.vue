<template>
  <sign_in msg="Welcome to Your Vue.js App"/>
  <router-view/>
</template>

<script>
import sign_in from './components/sign_in.vue'



export default {
  name: 'App',
  components: {
    sign_in
  }
}
</script>,




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background-image: url('assets/logo.jpg'); /* ระบุ URL ของรูปภาพที่คุณต้องการใช้ */
  background-size: cover; /* ปรับขนาดรูปภาพให้เต็มพื้นที่ #app */
  background-repeat: no-repeat; /* ไม่รูปภาพซ้ำซ้อน */
  background-attachment: fixed; /* รูปภาพไม่เลื่อนพร้อมการเลื่อนหน้า */
}
</style>