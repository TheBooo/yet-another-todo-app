<template>
  <div class="overlay">
    <form v-on:submit.prevent="submitNote" class="overlay-content">
      <div v-if="showNotification === true" class="notification">
        {{ notification }}
      </div>
      <input type="text" v-model="title" placeholder="Название карточки" />
      <div class="container-btns">
        <button @click="submitNote" type="button" class="btn btn-form">
          Добавить карточку
        </button>
        <router-link to="/">
          <button type="button" class="btn btn-form">Отмена</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
      showNotification: false,
      notification: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    submitNote() {
      //проверка пустой строки
      if (this.title.trim()) {
        const newTodo = {
          id: uuid(),
          title: this.title,
          completed: false,
        };
        this.addTodo(newTodo);
        this.$router.push("/");
      } else {
        this.notification = "Пожалуйста введите название карточки";
        this.showNotification = true;
      }
    },
  },
};
</script>

<style scoped>
.container-btns {
  margin: 1rem;
}
.btn-form {
  padding: 0.5rem;
  font-size: 1rem;
}
</style>
