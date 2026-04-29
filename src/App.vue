<script setup>
</script>

<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.app-container {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
}
</style>
