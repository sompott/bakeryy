<template>
  <div class="signup">
    <div class="centered-content">
      <h2>Sign Up</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username" class="form-label input-label">Username:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="email" class="form-label input-label">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password" class="form-label input-label">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button @click="navigateTo('/')">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      // ทำการส่งข้อมูลการลงทะเบียนไปยังเซิร์ฟเวอร์ หรือดำเนินการอื่น ๆ ตามที่คุณต้องการ
      console.log("Submitted:", this.username, this.email, this.password);
    },
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.signup {
  display: flex;
  flex-direction: column; /* จัดเรียงเนื้อหาแนวตั้ง */
  justify-content: center; /* จัดเนื้อหาแนวนอนตรงกลาง */
  align-items: center; /* จัดเนื้อหาแนวตั้งตรงกลาง */
  margin: auto; /* จัดให้กรอบอยู่ตรงกลางทั้งแนวนอนและแนวตั้ง */
  width: 700px;
  height: 400px; /* กำหนดความสูงเป็น 400px หรือตามที่คุณต้องการ */
  background-color: #fff; /* สีพื้นหลังของ .signup ให้เป็นสีขาว */
  border: 1px solid #e0e0e0; /* เปลี่ยนสีขอบเป็นสีเทา */
  border-radius: 10px; /* ลดค่า border-radius */
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2); /* เพิ่มเงา */
  padding: 30px;
}

.centered-content {
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

.input-label {
  font-weight: bold;
  color: #333; /* สีตัวหนังสือใน label */
}

.rounded-rect-button {
  display: inline-block;
  padding: 15px 20px;
  background-color: #3498db; /* สีพื้นหลังของปุ่ม */
  color: #fff; /* สีตัวหนังสือของปุ่ม */
  border: none;
  border-radius: 5px; /* ค่า border-radius เล็กน้อย */
  cursor: pointer;
  transition: background-color 0.2s;
}

.rounded-rect-button:hover {
  background-color: #2980b9; /* สีพื้นหลังของปุ่มเมื่อ hover */
}

/* ... คุณสมบัติอื่น ๆ ของสไตล์ ... */
</style>
