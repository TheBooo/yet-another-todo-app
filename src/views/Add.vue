<template>
  <div>
    <AddTodo v-if="this.$route.query.action === 'addTodo'" />
  </div>
</template>

<script>
import AddTodo from "../components/AddTodo";

export default {
  name: "Add",
  components: { AddTodo }
};
</script>

<style>
</style>