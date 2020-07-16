<template>
  <div class="home">
    <Todos />
    <Notes />
  </div>
</template>

<script>
import Todos from "../components/Todos";
import Notes from "../components/Notes";

export default {
  name: "Home",
  components: { Todos, Notes },
};
</script>
