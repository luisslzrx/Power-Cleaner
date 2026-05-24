<script setup>
import Contactanos from '@/components/Contacto/Contactanos.vue'
import BannerContacto from '@/components/Contacto/BannerContacto.vue'
import Preguntas from '@/components/Contacto/Preguntas.vue'
import Franquicias from '@/components/Inicio/Franquicias.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <BannerContacto />
    <Contactanos class="my-16" />
    <Preguntas class="my-16" />
    <Franquicias class="my-16" />
  </div>
</template>
