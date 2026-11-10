<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Carrito from './components/Carrito.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'

const route = useRoute()
const isGestionRoute = computed(() => route.path.startsWith('/gestion'))
</script>

<template>
  <Header v-if="!isGestionRoute" />
  <div :class="isGestionRoute ? 'w-full min-h-screen' : 'app-container'">
    <router-view />
  </div>
  <Footer v-if="!isGestionRoute" />
  <Carrito v-if="!isGestionRoute" />
  <WhatsAppButton v-if="!isGestionRoute" />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=HK+Grotesk:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'HK Grotesk', sans-serif;
}

html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.app-container {
  min-height: calc(100vh - 200px);
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
