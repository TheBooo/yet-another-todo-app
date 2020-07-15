<template>
  <header class="header">
    <img alt="Vue logo" src="../../assets/logo.png" class="logo" />

    <div class="container">
      <button class="btn nav-btn">Добавить карточку</button>
      <button class="btn nav-btn">Добавить группу</button>
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
  background-color: var(--grey);
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
}
</style>