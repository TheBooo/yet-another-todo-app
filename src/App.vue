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

  /**/
  --bg: #242526;
  --bg-accent: #003745;
  --accent: #3698b7;
  --text-color: #dadce1;
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
  background-color: var(--bg);
}
a {
  text-decoration: none;
}
input {
  padding: 1rem;
  margin: 0.2rem;
  font-size: 1.4rem;
  width: 60%;
  border-radius: 0.3rem;
  border: none;
}

.btn {
  cursor: pointer;
  padding: 0.2rem;
  margin: 0.2rem;
  background-color: var(--accent);
  color: var(--bg);
  transition: var(--transition);
  border: none;
  border-radius: 0.3rem;
}
.btn:hover {
  background-color: var(--text-color);
}
.btn-overlay {
  background-color: var(--accent);
  font-size: 1rem;
  margin: 1rem;
  padding: 0.5rem;
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
  background-color: var(--bg-accent);
  color: var(--text-color);
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

.is-completed {
  text-decoration: line-through;
}

.note-container {
  margin: 2rem auto;
  padding: 1rem;
  width: 60%;
  max-width: 1160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-accent);
  color: var(--text-color);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  position: relative;
}

@media (max-width: 992px) {
  .note-container {
    width: 100%;
  }
}
</style>
