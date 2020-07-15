<template>
  <div class="overlay">
    <form v-on:submit.prevent="submitNote" class="overlay-content">
      <div>Добавить группу</div>
      <!-- название группы -->
      <input type="text" v-model="title" placeholder="Заголовок" required />
      <input
        v-on:keydown.enter.prevent="addTodo"
        type="text"
        v-model="todo"
        placeholder="Задание"
      />
      <!-- добавить задание -->
      <button type="button" @click="addTodo" class="btn btn-todo">
        Добавить задание
      </button>
      <div v-if="this.showNotification === true" class="notification">
        {{ this.notification }}
      </div>
      <div class="form-btns-container">
        <button type="submit" class="btn btn-todo">
          Сохранить
        </button>
        <router-link to="/">
          <button type="button" class="btn btn-todo btn-cancel">
            Отмена
          </button>
        </router-link>
      </div>

      <!-- preview -->
      <div class="preview">
        <h3 class="preview-title">{{ this.title }}</h3>
        задания:
        <div v-for="todo in todos" :key="todo.id" class="preview-task">
          {{ todo.title }}
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";
import { mapActions } from "vuex";

export default {
  name: "AddNote",
  data() {
    return {
      showForm: false,
      title: "",
      todo: "",
      notification: "",
      showNotification: false,
      todos: [],
    };
  },
  methods: {
    ...mapActions(["addNote"]),
    addTodo() {
      // Проверка наличия задания и whitespace
      if (this.todo.trim()) {
        this.todos.push({
          id: uuid(),
          title: this.todo,
          completed: false,
        });
        this.todo = "";
      } else {
        this.notification = "Пожалуйста введите задание";
        this.showNotification = true;
      }
    },
    submitNote() {
      //check for whitespaces name
      if (this.title.trim()) {
        const newNote = {
          id: uuid(),
          title: this.title,
          todos: this.todos,
        };
        this.addNote(newNote);
        this.$router.push("/");
      } else {
        this.notification = "Пожалуйста, введите заголовок";
        this.showNotification = true;
      }
    },
  },
};
</script>

<style scoped>
.btn-todo {
  margin-bottom: 2rem;
  padding: 0.5rem;
  font-size: 1rem;
}
.btn-cancel {
  margin: 0rem 1rem;
}
.btn-cancel:hover {
  background-color: var(--dark-green);
  color: var(--mint);
}
</style>
