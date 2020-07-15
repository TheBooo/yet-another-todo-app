<template>
  <div>
    <AddTodo v-if="this.$route.query.action === 'addTodo'" />
    <AddNote v-if="this.$route.query.action === 'addNote'" />
  </div>
</template>

<script>
import AddTodo from "../components/AddTodo";
import AddNote from "../components/AddNote";

export default {
  name: "Add",
  components: { AddTodo, AddNote },
};
</script>

<style></style>
