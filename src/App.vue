<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Carrito from './components/Carrito.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
</script>

<template>
  <Header />
  <div class="app-container">
    <router-view />
  </div>
  <Footer />
  <Carrito />
  <WhatsAppButton />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=HK+Grotesk:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: 'HK Grotesk', sans-serif;
}

.app-container {
  min-height: calc(100vh - 200px);
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
