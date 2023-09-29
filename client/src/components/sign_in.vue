<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <div class="text-center">
              <img src="@/assets/usericon.jpg" alt="Logo" class="img-fluid mx-auto d-block" style="width: 150px; height: 150px; border-radius: 50%;">

             </div>
            <h2 class="text-center mb-4">Wellcome to Bakery Lover</h2>
            <form @submit.prevent="sign_in">
              <div class="form-group">
                <input type="email" class="form-control" placeholder="User Name" v-model="username" required>
              </div>
              <div class="form-group">
                <input type="password" class="form-control" placeholder="Password" v-model="password" required>
              </div>
              <button v-on:click="navigateTo('/mainwep')">Log In</button>

              <div class="text-center mt-3">
              </div>
              <hr>
              <div class="text-center">
                <button @click="navigateToSignUp">Sign Up</button>
                




              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {

  navigateToSignUp() {
    this.$router.push('/signup');

    },
    navigateTo(route){
      this.$router.push(route)
    }
  }
};
</script>

<style>
/* ตั้งค่าสีหลักและสีรองของหน้าเว็บ */
:root {
  --primary-color: #3498db; /* สีหลัก */
  --secondary-color: #e74c3c; /* สีรอง */
}

/* ส่วนของคอนเทนเนอร์หลัก */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* ส่วนของการ์ดหลัก */
.card {
  width: 700px;
  margin: 0 auto;
  border: none;
  padding: 20px;
  box-shadow: 0px 0px 10px 0px rgba(114, 97, 59, 0.2);
  background-color: #fff; /* สีของการ์ดเป็นสีขาว */
  border-radius: 15px;
  text-align: center; /* จัดเนื้อหาตามศูนย์ */
}

/* ส่วนของส่วนเนื้อหาในการ์ด */
.card-body {
  padding: 20px;
}

/* ส่วนของกล่องข้อมูล (form) */
.form-group {
  margin-bottom: 20px;
}

.form-control {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}

/* ปุ่มสีหลัก */
.btn-primary {
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  transition: background-color 0.3s; /* เพิ่มการเปลี่ยนสีเมื่อโฮเวอร์ */
}

.btn-primary:hover {
  background-color: var(--secondary-color);
  cursor: pointer;
}
</style>
