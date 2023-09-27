<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <div class="text-center">
              <img src="/path/src/assets/Usericon.jpg" alt="Logo" class="mb-4" style="width: 150px; height: 150px;">

            </div>
            <h2 class="text-center mb-4">Wellcome to Bakery Lover</h2>
            <form @submit.prevent="sign_in">
              <div class="form-group">
                <input type="email" class="form-control" placeholder="User Name" v-model="username" required>
              </div>
              <div class="form-group">
                <input type="password" class="form-control" placeholder="Password" v-model="password" required>
              </div>
              <button type="submit" class="btn btn-primary btn-block">Log In</button>
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  width: 700px;
  border: none;
  box-shadow: 0px 0px 10px 0px rgba(114, 97, 59, 0.2);
  background-color: rgba(255, 255, 255, 0.9); /* เปลี่ยนสีของกรอบที่นี่และตั้งค่าความโปร่งใสที่นี่ */
  border-radius: 15px; /* ตั้งค่าความโค้งของกรอบที่นี่ */
}




.card-body {
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}

.btn-primary {
  background-color: #61615b;
  color: rgb(255, 255, 255);
  border: none;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
}

.btn-primary:hover {
  background-color: #373023;
  cursor: pointer;
}

</style>