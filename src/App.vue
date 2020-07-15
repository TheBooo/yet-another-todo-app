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
  line-height: 1.2;
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

.overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  /*background: rgba(0, 61, 124, 0.9);*/
  background: rgba(0, 43, 54, 0.85);
  z-index: 20;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.overlay-content {
  z-index: 21;
  background-color: var(--dark-mint);
  padding: 1rem;
  width: 90%;
  max-width: 1024px;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
