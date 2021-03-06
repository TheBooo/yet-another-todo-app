<template>
  <div class="note-container">
    <h1 class="note-title">{{ note.title }}</h1>
    <div v-for="(todo, i) in note.todos" :key="todo.id" class="single-todo">
      <div class="todo-checkbox">
        <input
          type="checkbox"
          :checked="todo.completed === true"
          @click="markAsCompleted(i)"
          :id="todo.id"
        />
        <label :for="todo.id">Завершено</label>
      </div>
      <!-- title -->
      <div class="todo-title" v-bind:class="{ 'is-completed': todo.completed }">
        {{ todo.title }}
        <div v-if="todo.completed === true"></div>
      </div>

      <!-- delete -->
      <div>
        <router-link :to="{ name: 'Move', params: { note, todo } }">
          <button class="btn">
            <FileMove />
          </button>
        </router-link>

        <button @click="deleteTodoConfirmation(i)" class="btn btn-delete">
          <Delete />
        </button>
      </div>
    </div>

    <button @click="addTodoConfirmation" class="btn btn-control">
      Добавить карточку
    </button>

    <!-- control buttons -->
    <div class="buttons-container">
      <button
        @click="deleteNoteConfirmation"
        class="btn btn-control btn-cancel"
      >
        Удалить карточку
        <Delete />
      </button>
      <button @click="saveChanges" class="btn btn-control">
        Сохранить изменения
        <ContentSave />
      </button>
      <router-link to="/">
        <button class="btn btn-control btn-cancel">
          Выйти
          <Logout />
        </button>
      </router-link>
    </div>
    <!-- end of control buttons -->

    <!-- -->
    <EditNoteConfirm
      v-if="showOverlay === true"
      v-bind:action="action"
      v-on:cancel="toggleOverlay()"
      v-on:addTodo="addTodo"
      v-on:deleteNote="removeNote"
      v-on:deleteTodo="deleteTodo"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { v4 as uuid } from "uuid";

import EditNoteConfirm from "./EditNoteConfirm";

import Delete from "vue-material-design-icons/Delete";
import FileMove from "vue-material-design-icons/FileMove";
import Logout from "vue-material-design-icons/Logout";
import ContentSave from "vue-material-design-icons/ContentSave";

export default {
  name: "EditNote",
  components: { EditNoteConfirm, Delete, FileMove, Logout, ContentSave },
  computed: mapGetters(["singleNote"]),
  props: {
    noteId: {
      type: String,
    },
  },
  data() {
    return {
      note: {},
      showOverlay: false,
      action: "",
      deleteTodoNum: "",
    };
  },
  methods: {
    ...mapActions(["getNotes", "updateNote", "deleteNote"]),
    toggleOverlay() {
      this.showOverlay = !this.showOverlay;
    },
    // добавить карточку
    addTodoConfirmation() {
      this.action = "addTodo";
      this.toggleOverlay();
    },
    addTodo(todo) {
      // проверка whitespace'ов
      if (todo.trim()) {
        const newTodo = {
          id: uuid(),
          title: todo,
          completed: false,
        };
        this.note.todos.unshift(newTodo);
        this.toggleOverlay();
      }
    },
    //картчока выполнена
    markAsCompleted(i) {
      this.note.todos[i].completed = !this.note.todos[i].completed;
    },
    //удаление карточки
    deleteTodoConfirmation(i) {
      this.deleteTodoNum = i;
      this.action = "deleteTodo";
      this.toggleOverlay();
    },
    deleteTodo() {
      this.note.todos.splice(this.deleteTodoNum, 1);
      this.toggleOverlay();
    },

    // сохранение изменений
    saveChanges() {
      this.updateNote(this.note);
      this.$router.push("/");
    },

    // удаление группы
    deleteNoteConfirmation() {
      this.action = "deleteNote";
      this.toggleOverlay();
    },
    removeNote() {
      this.deleteNote(this.noteId);
      this.$router.push("/");
    },
  },
  created() {
    this.getNotes();
    this.note = this.singleNote(this.noteId);
  },
};
</script>

<style scoped>
.btn-control {
  background-color: var(--accent);
  margin: 0.5rem;
  font-size: 1rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-control:hover {
  background-color: var(--text-color);
}
.buttons-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.single-todo {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  background-color: var(--bg-accent);
  margin: 1rem;
  padding: 0.5rem;
}
.todo-title {
  font-size: 1.4rem;
}
.todo-checkbox {
  display: flex;
  align-items: center;
}
input[type="checkbox"] {
  width: 10px;
  height: 10px;
}
label {
  margin: 0.2rem;
  cursor: pointer;
}
@media (max-width: 992px) {
  .single-todo {
    width: 100%;
    flex-direction: column;
  }
  .buttons-container {
    flex-wrap: wrap;
  }
}
</style>
