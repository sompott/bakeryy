<template>
  <div class="category">
    <div class="header">
      <img src="../assets/logo.jpg" alt="Logo" class="logo">
      <h1>Category</h1>
    </div>

    <div class="category-items">
      <div v-for="(item, index) in categoryItems" :key="index" class="category-item">
        <img :src="item.imageURL" :alt="item.name" class="item-image">
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
import breadImage from '../assets/food.png';
import cookieImage from '../assets/cookie.png';
import cakeImage from '../assets/cake.png';
export default {
  
  data() {
    return {
      categoryItems: [
        {
          name: 'Bread1',
          description: 'ขนมปัง',
          imageURL : breadImage,
        },

        {
          name: 'Cake',
          description: 'เค้ก',
          imageURL: cakeImage,
        },

        {
          name: 'Cookie',
          description: 'คุกกี้',
          imageURL: cookieImage,
        },

        {
          name: 'Croissant',
          description: 'ครัวซอง',
          image: '@/assets/krapao.jpg',
        },

        {
          name: 'Eclairs',
          description: 'เอแคลร์',
          image: '@/assets/padthai.jpg',
        },

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
      alert(`คุณคลิกที่รายการ: ${this.categoryItems[index].name}`);
    },
  },
};
</script>

<style scoped>
.item-image{
  width: 60px;
  height: 60px;
  margin-right: 10px;

}
.category {
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

.category-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.category-item {
  background-color: #dfc5a4;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 10px;
  padding: 15px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center; /* จัดให้อยู่ตรงกลางแนวนอน */
}

.category-image {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
}

.item-details {
  text-align: center; /* จัดให้อยู่ตรงกลางแนวนอน */
  flex-grow: 1; /* ขยายเต็มพื้นที่ที่เหลือในกรอบ */
  display: flex;
  flex-direction: column;
  justify-content: center; /* จัดให้อยู่ตรงกลางแนวตั้ง */
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
  align-self: center; /* จัดให้ปุ่มอยู่ตรงกลางในกรอบ */
}

button:hover {
  background-color: #e8ac97;
}
</style>

