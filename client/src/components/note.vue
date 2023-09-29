<template>
  <div class="note-app">
    <header>
      <h1>Note</h1>
    </header>
    <main>
      <div class="note-list">
        <div v-for="(note, index) in notes" :key="index" class="note">
          <p>{{ note }}</p>
          <button @click="deleteNote(index)">ลบ</button>
        </div>
      </div>
    </main>
    <div class="note-form">
      <textarea v-model="newNote" placeholder="เพิ่มโน๊ตใหม่"></textarea>
      <button @click="addNote">บันทึก</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: [],
      newNote: "",
    };
  },
  methods: {
    addNote() {
      if (this.newNote.trim() !== "") {
        this.notes.push(this.newNote);
        this.newNote = "";
      }
    },
    deleteNote(index) {
      this.notes.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.note-app {
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 20px;
}

header {
  background-color: rgb(177, 156, 123);
  color: #fff;
  padding: 0.5px;
  font-size: 15px;
  font-weight: bold;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.note-list {
  max-height: calc(100vh - 200px); /* ปรับสูงสุดให้เต็มหน้าจอยกเว้นส่วนอื่น */
  overflow-y: auto; /* เพิ่มการสกอลล์บาร์เวลาเนื้อหายาว */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.note {
  background-color: #ffe79a;
  border: 1px solid #dad0d0;
  border-radius: 10px;
  padding: 15px;
  margin: 20px 0;
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(149, 110, 32, 0.883);
}

.note p {
  margin: 0;
}

.note-form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

textarea {
  width: 300px;
  height: 150px;
  padding: 10px;
  border: 1px solid #d1c5c5;
  border-radius: 10px;
  margin-bottom: 10px;
  resize: none;
}

button {
  background-color: #df896f;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #aeaaec;
}
</style>
