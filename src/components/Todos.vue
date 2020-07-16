<template>
  <div class="todos-container">
    <div v-for="todo in allTodos" :key="todo.id" class="single-todo">
      <!-- checkbox  -->
      <div class="todo-checkbox">
        <input
          type="checkbox"
          :checked="todo.completed === true"
          @click="markAsCompleted(todo)"
          :id="todo.id"
        />
        <label :for="todo.id">Завершено</label>
      </div>

      <!-- title -->
      <div class="todo-title" :class="{ 'is-completed': todo.completed }">
        {{ todo.title }}
        <div v-if="todo.completed === true"><Check /></div>
      </div>

      <!-- delete -->
      <button @click="confirmDelete(todo.id)" class="btn btn-delete">
        <Delete />
      </button>
    </div>

    <!-- подтверждение удаления -->
    <div v-if="deleteOverlay === true" class="overlay">
      <div class="overlay-content">
        <div>Вы уверены, что хотите удалить эту карточку?</div>
        <div>
          <button @click="removeTodo" class="btn btn-overlay">Удалить</button>
          <button @click="toggleOverlay" class="btn btn-overlay ">
            Отмена
          </button>
        </div>
      </div>
    </div>
    <!-- -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Delete from "vue-material-design-icons/Delete";
import Check from "vue-material-design-icons/Check";

export default {
  name: "Todos",
  components: { Delete, Check },
  computed: mapGetters(["allTodos"]),
  data() {
    return {
      deleteOverlay: false,
      deleteId: "",
    };
  },
  methods: {
    ...mapActions(["getTodos", "updateTodo", "deleteTodo"]),
    toggleOverlay() {
      this.deleteId = "";
      this.deleteOverlay = !this.deleteOverlay;
    },
    markAsCompleted(todo) {
      todo.completed = !todo.completed;
      this.updateTodo(todo);
    },
    confirmDelete(id) {
      this.toggleOverlay();
      this.deleteId = id;
    },
    removeTodo() {
      this.deleteTodo(this.deleteId);
      this.toggleOverlay();
    },
  },
  created() {
    this.getTodos();
  },
};
</script>

<style scoped>
.todos-container {
  margin: 2rem auto;
  padding: 1rem;
  width: 60%;
  max-width: 1160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--mint);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
.single-todo {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: var(--yellow);
  margin: 1rem;
  padding: 1rem;
}

.todo-title {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-size: 1.4rem;
  font-weight: 600;
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

.btn-delete {
  background: none;
  color: var(--dark-green);
}
.btn-delete:hover {
  color: darkred;
}

.btn-overlay {
  background-color: var(--yellow);
  font-size: 1rem;
  margin: 1rem;
  padding: 0.5rem;
}
.btn-overlay:hover {
  background-color: var(--mint);
}

@media (max-width: 992px) {
  .todos-container {
    width: 100%;
  }
  .single-todo {
    flex-direction: column;
  }
}
</style>
