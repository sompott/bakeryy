<template>
  <div class="post-form">
    <h2>Post on Instagram</h2>
    <input type="text" v-model="caption" placeholder="Write a caption...">
    <!-- เพิ่ม input ประเภท "file" -->
    <input type="file" @change="handleImageUpload" accept="image/*">
    <!-- เพิ่มปุ่มสำหรับอัปโหลดรูปภาพ -->
    <button @click="uploadImage">Upload Image</button>
    <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image">
    <button @click="postImage">Post</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      caption: '',
      imageUrl: '',
      selectedImage: null, // เพิ่มตัวแปรเก็บรูปภาพที่เลือก
    };
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedImage = file; // เก็บรูปภาพที่เลือกในตัวแปร
        this.imageUrl = URL.createObjectURL(file);
      }
    },
    uploadImage() {
      // ทำงานเมื่อปุ่ม "Upload Image" ถูกคลิก
      // ในที่นี้คุณสามารถส่งรูปภาพไปยังเซิร์ฟเวอร์หรือทำการอัปโหลดด้วยวิธีอื่น ๆ ตามที่คุณต้องการ
      console.log('Uploading Image:', this.selectedImage);
    },
    postImage() {
      // ส่งข้อมูลรูปภาพและคำบรรยายไปยังเซิร์ฟเวอร์หรือทำการบันทึกตามที่คุณต้องการ
      console.log('Caption:', this.caption);
      console.log('Image URL:', this.imageUrl);
      // ทำงานเพิ่มเติมที่นี่ เช่น ส่งข้อมูลไปยัง API หรือบันทึกในฐานข้อมูล
    },
  },
};
</script>


<style scoped>

/* ส่วนที่ไม่ได้รับผลจาก scoped */
html, body {
  height: 100%;
  margin: 700;
  padding: 0;
  overflow: hidden;
}
.post-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input[type="file"] {
  display: none;
}

img {
  max-width: 100%;
  margin-top: 10px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}
</style>
<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.post-form {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* ข้อมูลอื่น ๆ ใน style ของคุณ */
</style>

