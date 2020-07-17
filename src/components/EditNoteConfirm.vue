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
        <button type="button" class="btn btn-control" @click="$emit('addTodo', newTodo)">Добавить</button>
        <button type="button" class="btn btn-control" @click="$emit('cancel')">Отмена</button>
      </div>
    </form>

    <!-- удалить группу -->
    <div class="overlay-content" v-if="action === 'deleteNote'">
      Вы уверены, что хотите удалить данную группу?
      <div>
        <button class="btn btn-control" @click="$emit('deleteNote')">Подтвердить</button>
        <button class="btn btn-control" @click="$emit('cancel')">Отмена</button>
      </div>
    </div>

    <!-- удалить карточку из группы -->
    <div class="overlay-content" v-if="action === 'deleteTodo'">
      Вы уверены, что хотите удалить данную карточку?
      <div>
        <button class="btn btn-control" @click="$emit('deleteTodo')">Подтвердить</button>
        <button class="btn btn-control" @click="$emit('cancel')">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditNoteConfirm",
  props: {
    action: String
  },
  data() {
    return {
      newTodo: ""
    };
  }
};
</script>

<style scoped>
.btn-control {
  font-size: 1.2rem;
  margin: 1rem;
  padding: 0.5rem;
}
</style>
