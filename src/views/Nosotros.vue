<script setup>
import Somos from '@/components/Nosotros/Somos.vue'
import Mision from '@/components/Nosotros/Mision.vue'
import BannerNosotros from '@/components/Nosotros/BannerNosotros.vue'
import FranquiciasBloque from '@/components/Nosotros/FranquiciasBloque.vue'
import ModalidadesDeVenta from '@/components/Nosotros/ModalidadesDeVenta.vue'
import Diferenciadores from '@/components/Nosotros/Diferenciadores.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <BannerNosotros />
    <Somos class="my-16" />
    <Diferenciadores class="my-16" />
    <Mision class="my-16" />
    <FranquiciasBloque class="my-16" />
    <ModalidadesDeVenta class="my-16" />
  </div>
</template>
