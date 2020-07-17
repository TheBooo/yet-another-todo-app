<template>
  <div class="notes-container">
    <div v-for="note in allNotes" :key="note.id" class="note-container">
      <router-link :to="{ name: 'Edit', params: { id: note.id, note } }">
        <button class="btn btn-note btn-edit">
          <PlaylistEdit />
        </button>
      </router-link>
      <!-- title -->
      <h1 class="note-title">{{ note.title }}</h1>
      <!-- delete btn-->
      <button @click="confirmDelete(note.id)" class="btn btn-note btn-delete">
        <Delete />
      </button>
      <!-- todos -->
      <div
        v-for="todo in note.todos"
        :key="todo.id"
        class="single-todo"
        :class="{ 'is-completed': todo.completed }"
      >
        {{ todo.title }}
        <Check v-if="todo.completed === true" />
      </div>
    </div>

    <!-- подтверждение удаления -->
    <div v-if="deleteOverlay === true" class="overlay">
      <div class="overlay-content">
        <div>Вы уверены, что хотите удалить эту группу?</div>
        <div>
          <button @click="removeNote" class="btn btn-overlay">Удалить</button>
          <button @click="toggleOverlay" class="btn btn-overlay">Отмена</button>
        </div>
      </div>
    </div>
    <!-- -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import PlaylistEdit from "vue-material-design-icons/PlaylistEdit";
import Delete from "vue-material-design-icons/Delete";
import Check from "vue-material-design-icons/Check";

export default {
  name: "Notes",
  computed: mapGetters(["allNotes"]),
  data() {
    return {
      deleteOverlay: false,
      deleteNoteId: {}
    };
  },
  components: {
    PlaylistEdit,
    Delete,
    Check
  },
  methods: {
    ...mapActions(["getNotes", "deleteNote"]),
    toggleOverlay() {
      this.deleteOverlay = !this.deleteOverlay;
      this.deleteNoteId = {};
    },
    confirmDelete(id) {
      this.toggleOverlay();
      this.deleteNoteId = id;
    },
    removeNote() {
      this.deleteNote(this.deleteNoteId);
      this.toggleOverlay();
    }
  },
  created() {
    this.getNotes();
  }
};
</script>

<style scoped>
.notes-container {
  margin: 2rem auto;
}

.btn-note {
  position: absolute;
  top: 10px;
  background: none;
  color: var(--accent);
}
.btn-note:hover {
  color: var(--text-color);
}
.btn-edit {
  left: 10px;
}
.btn-delete {
  right: 10px;
}
.btn-delete:hover {
  color: darkred;
}

.single-todo {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  padding: 0.5rem;
  font-size: 1.3rem;
  background-color: var(--bg-accent);
}

@media (max-width: 992px) {
  .note-container {
    width: 100%;
  }
  .single-todo {
    flex-direction: column;
    font-size: 1rem;
  }
  h1 {
    font-size: 1.5rem;
  }
}
</style>
