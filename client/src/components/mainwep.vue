<template>
  <div>
    <!-- เมนูแท็บ -->
    <nav class="navbar">
      <ul>
        <!-- แท็บหน้าหลัก (main) -->
        <li @click="switchPage('main')" :class="{ active: activePage === 'main' }">
          Main
        </li>

        <!-- โน๊ต (note) -->
        <li @click="switchPage('note')" :class="{ active: activePage === 'note' }">
          Note
        </li>

        <!-- แท็บค้นหา (find) -->
        <li @click="switchPage('find')" :class="{ active: activePage === 'find' }">
          Find
        </li>

        <!-- แท็บอาหาร (food) -->
        <li @click="switchPage('food')" :class="{ active: activePage === 'food' }">
          Food
        </li>

        <!-- เซฟ (save) -->
        <li @click="switchPage('save')" :class="{ active: activePage === 'save' }">
          Save
        </li>

        <!-- โปรไฟล์ (profile) -->
        <li @click="switchPage('profile')" :class="{ active: activePage === 'profile' }">
          Profile
        </li>
      </ul>
    </nav>

    <!-- เนื้อหาหน้าหลัก (main) -->
    <div v-if="activePage === 'main'" class="page-content">
      <h1>Main Page</h1>
      <!-- บันทัดนี้เลยค้าบบบ -->
      <img src="../assets/savenote.png" /> 
      <!-- เนื้อหาหน้าหลักของคุณไปที่นี่ -->
    </div>

    <!-- เนื้อหาหน้าโน๊ต (note) -->
    <div v-if="activePage === 'note'" class="page-content">
      <h1>Note Page</h1>
      <!-- เนื้อหาหน้าหลักของคุณไปที่นี่ -->
    </div>

    <!-- เนื้อหาหน้าค้นหา (find) -->
    <div v-if="activePage === 'find'" class="page-content">
      <h1>Find Page</h1>
      <!-- เนื้อหาหน้าค้นหาของคุณไปที่นี่ -->
    </div>

    <!-- เนื้อหาหน้าอาหาร (food) -->
    <div v-if="activePage === 'food'" class="page-content">
      <h1>Food Page</h1>
      <!-- เนื้อหาหน้าอาหารของคุณไปที่นี่ -->
    </div>

    <!-- เนื้อหาหน้าเซฟ (save) -->
    <div v-if="activePage === 'save'" class="page-content">
      <h1>Save Page</h1>
      <!-- เนื้อหาหน้าหลักของคุณไปที่นี่ -->
    </div>

    <!-- เนื้อหาหน้าโปรไฟล์ (profile) -->
    <div v-if="activePage === 'profile'" class="page-content">
      <h1>Profile Page</h1>
      <!-- เนื้อหาหน้าหลักของคุณไปที่นี่ -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activePage: 'main', // หน้าที่เริ่มต้นเป็นหน้าหลัก (main)
    };
  },
  methods: {
    switchPage(page) {
      this.activePage = page;
    },
  },
};
</script>

<style scoped>
/* สไตล์สำหรับเมนูแท็บ */
.navbar {
  background-image: linear-gradient(rgb(177, 156, 123), rgb(177, 156, 123));
  color: white;
  text-align: center;
  padding: 0px;
}

.navbar ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-between; /* จัดเรียงแท็บให้กระจายเท่ากัน */
  margin: 0;
  padding: 0;
}

.navbar ul li {
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.2s, border 0.2s; /* เพิ่มการเปลี่ยนสีพื้นหลังและเส้นขอบเมื่อ hover */
  flex-grow: 1; /* ทำให้แต่ละแท็บขยายเท่ากัน */
  text-align: center;
  padding: 10px;
  font-weight: bold;
  font-size: 20px; /* เพิ่มขนาดของข้อความ */
}

.navbar ul li.active {
  background-color: #fff; /* เปลี่ยนสีพื้นหลังเมื่อเลือกแท็บ */
  color: #333; /* เปลี่ยนสีข้อความเมื่อเลือกแท็บ */
  border: 1px solid #e0e0e0; /* เพิ่มเส้นขอบเมื่อเลือกแท็บ */
}

.navbar ul li:hover {
  background-color: #eee; /* เปลี่ยนสีพื้นหลังเมื่อโฮเวอร์ */
  border: 1px solid #ccc; /* เพิ่มเส้นขอบเมื่อโฮเวอร์ */
}

.page-content {
  padding: 20px;
}
</style>
