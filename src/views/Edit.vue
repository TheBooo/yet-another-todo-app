<template>
  <div><EditNote v-bind:noteId="this.$route.params.id" /></div>
</template>

<script>
import EditNote from "../components/EditNote";

export default {
  components: { EditNote },
};
</script>

<style scoped></style>
