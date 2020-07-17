<template>
  <div class="todos-container">
    <label for="sort">Сортировать карточки по:</label>
    <select v-model="selectFilter" class="select-filter" id="sort">
      <option>Имени</option>
      <option>Статусу</option>
      <option>Дате</option>
    </select>
    <div v-for="todo in filteredTodos" :key="todo.id" class="single-todo">
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
        <div v-if="todo.completed === true">
          <Check />
        </div>
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
          <button @click="toggleOverlay" class="btn btn-overlay">Отмена</button>
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
  computed: {
    ...mapGetters(["allTodos"]),
    filteredTodos: function() {
      // сортировка по имени
      if (this.selectFilter === "Имени") {
        return [...this.allTodos].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      } else if (this.selectFilter === "Статусу") {
        return [...this.allTodos].sort((a, b) => a.completed - b.completed);
      } else {
        return this.allTodos;
      }
    }
  },
  data() {
    return {
      deleteOverlay: false,
      deleteId: "",
      selectFilter: ""
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
    }
  },
  created() {
    this.getTodos();
  }
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
  background-color: var(--bg-accent);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
.single-todo {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background-color: var(--bg-accent);
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
  color: var(--text-color);
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
  margin-right: 1rem;
  cursor: pointer;
  color: var(--accent);
}

select {
  background-color: var(--bg);
  color: var(--accent);
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  outline: none;
  padding: 0.4rem;
}

.btn-delete {
  background: none;
  color: var(--accent);
}
.btn-delete:hover {
  color: darkred;
}

.btn-overlay:hover {
  background-color: var(--text-color);
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
