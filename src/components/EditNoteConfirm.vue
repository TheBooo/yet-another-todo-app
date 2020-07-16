<template>
  <div class="overlay">
    <form
      v-on:submit.prevent="$emit('add-todo', newTodo)"
      class="overlay-content"
      v-if="action === 'addTodo'"
    >
      Добавить карточку
      <input type="text" v-model="newTodo" />
      <div>
        <button
          type="button"
          class="btn btn-control"
          @click="$emit('addTodo', newTodo)"
        >
          Add
        </button>
        <button type="button" class="btn btn-control" @click="$emit('cancel')">
          Cancel
        </button>
      </div>
    </form>

    <!-- delete note confirmation -->
    <div class="overlay-content" v-if="action === 'deleteNote'">
      Are you sure you want to
      {{ action }}?
      <div>
        <button class="btn btn-control" @click="$emit('deleteNote')">
          Confirm
        </button>
        <button class="btn btn-control" @click="$emit('cancel')">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditNoteConfirm",
  props: {
    action: String,
  },
  data() {
    return {
      newTodo: "",
    };
  },
};
</script>

<style scoped>
.btn-control {
  font-size: 1.2rem;
  margin: 1rem;
  padding: 0.5rem;
}
</style>
