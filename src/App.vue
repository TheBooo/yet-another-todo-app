<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>


<script>
import Header from "./components/layout/Header";

export default {
  components: { Header }
};
</script>

<style>
:root {
  --dark-green: #363924;
  --yellow: #b7b280;
  --dark-mint: #88ab88;
  --mint: #a1d2b4;
  --grey: #9dbcaa;
  --transition: all 0.3s ease-in-out;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: var(--main-cursive-font);
  line-height: 1.4;
  letter-spacing: 0.1rem;
}
a {
  text-decoration: none;
}

.btn {
  cursor: pointer;
  padding: 0.2rem;
  margin: 0.2rem;
  background-color: var(--mint);
  color: var(--dark-green);
  transition: var(--transition);
  border: none;
  border-radius: 0.3rem;
}
.btn:hover {
  background-color: var(--yellow);
  color: var(--dark-green);
}
</style>
