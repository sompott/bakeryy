<template>
    <div class="eclairs">
      <div class="header">
        <img src="@/assets/logo.png" alt="Logo" class="logo">
        <h1>Eclairs</h1>
      </div>
  
      <div class="eclairs-items">
        <div v-for="(item, index) in EclairsItems" :key="index" class="eclairs-item">
          <img :src="item.image" :alt="item.name" class="item-image">
          <div class="item-details">
            <h2>{{ item.name }}</h2>
            <p>{{ item.description }}</p>
  
            <!-- เพิ่มปุ่ม "คลิก" ด้านล่าง -->
            <button @click="handleClick(index)">คลิก</button>
  
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        EclairsItems: [
          {
            name: 'Pie',
            description: 'พาย',
            image: '@/assets/padthai.jpg',
          },
  
          {
            name: 'Mustasd',
            description: 'มัสตาร์ด',
            image: '@/assets/padthai.jpg',
          },
          // เพิ่มรายการอาหารเพิ่มเติมตามต้องการ
        ],
      };
    },
    methods: {
      handleClick(index) {
        // ทำอย่างอื่น ๆ เมื่อคลิกปุ่ม "คลิก" ด้านล่าง เช่น แสดงรายละเอียดเพิ่มเติม
        // ในตัวอย่างนี้เราแค่แสดงข้อความอย่างง่าย
        alert(`คุณคลิกที่รายการ: ${this.eclairsItems[index].name}`);
      },
    },
  };
  </script>
  
  <style scoped>
.croissant {
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 20px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.logo {
  width: 60px;
  height: 60px;
  margin-right: 10px;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}

.eclairs-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.eclairs-item {
  background-color: #dfc5a4;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 10px;
  padding: 15px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.item-wrapper {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item-image {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
}

.item-details {
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h2 {
  font-size: 18px;
  margin: 0;
}

p {
  font-size: 14px;
  margin: 5px 0;
}

.item-price {
  font-size: 16px;
  font-weight: bold;
  color: #007aff;
}

button {
  background-color: #9f8c67;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
  margin-top: 10px;
  align-self: center;
}

button:hover {
  background-color: #e8ac97;
}
</style>