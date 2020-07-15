<template>
  <div>Add</div>
</template>

<script>
export default {
  name: "Add",
  created() {
    console.log(this.$route.query.action);
  }
};
</script>

<style>
</style>