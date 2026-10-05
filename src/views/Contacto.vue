<script setup>
import Contactanos from '@/components/Contacto/Contactanos.vue'
import Contactanos2 from '@/components/Contacto/Contactanos2.vue'
import BannerContacto from '@/components/Contacto/BannerContacto.vue'
import Preguntas from '@/components/Contacto/Preguntas.vue'
import Franquicias from '@/components/Inicio/Franquicias.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <BannerContacto />
    <Contactanos class="my-16" />
    <Contactanos2 />
    <Preguntas class="my-16" />
    <Franquicias class="my-16" />
  </div>
</template>
