<template>
  <header class="header">
    <router-link to="/">
      <img alt="Vue logo" src="../../assets/logo.png" class="logo" />
    </router-link>

    <div class="container">
      <router-link :to="{ path: '/add', query: { action: 'addTodo' } }">
        <button class="btn nav-btn">Добавить карточку</button>
      </router-link>

      <router-link :to="{ path: '/add', query: { action: 'addNote' } }">
        <button class="btn nav-btn">Добавить группу</button>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  background-color: var(--bg-accent);
  padding: 0.5rem;
  text-align: center;
}
.logo {
  max-height: 8vh;
  width: auto;
}
.nav-btn {
  margin: 0.2rem 1rem;
  padding: 0.6rem;
  font-size: 1rem;
  font-weight: 600;
}
</style>