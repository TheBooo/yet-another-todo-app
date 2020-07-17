<template>
  <div class="note-container">
    <h1>Перенести {{ todo.title }} в...</h1>
    <div v-for="(note, i) in allNotes" :key="note.id">
      <div v-if="note.id !== prevNote.id" @click="moveTodo(i)" class="note-title">{{ note.title }}</div>
    </div>
    <router-link to="/">
      <button class="btn btn-cancel">Отмена</button>
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Move",
  computed: mapGetters(["allNotes"]),
  data() {
    return {
      todo: {},
      prevNote: {}
    };
  },
  methods: {
    ...mapActions(["getNotes", "updateNote"]),
    moveTodo(i) {
      this.prevNote.todos = this.prevNote.todos.filter(
        todo => todo.id !== this.todo.id
      );
      const updatedNote = this.allNotes[i];
      updatedNote.todos.unshift(this.todo);
      this.updateNote(updatedNote);
      this.updateNote(this.prevNote);
      this.$router.push("/");
    }
  },
  created() {
    this.todo = this.$route.params.todo;
    this.prevNote = this.$route.params.note;
    this.getNotes();
  }
};
</script>

<style scoped>
.note-title {
  margin: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  color: var(--accent);
  transition: var(--transition);
}
.note-title:hover {
  color: var(--text-color);
  transform: scale(1.1);
}
.btn-cancel {
  padding: 0.5rem;
  background-color: var(--bg);
  color: var(--text-color);
}
.btn-cancel:hover {
  background-color: var(--accent);
}
</style>
