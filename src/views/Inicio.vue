<script setup>
import Hero from '@/components/Inicio/Hero.vue'
import Bar from '@/components/Inicio/Bar.vue'
import ProductosDestacados from '@/components/Inicio/ProductosDestacados.vue'
import Subcategorias from '@/components/Inicio/Subcategorias.vue'
import Testimoniales from '@/components/Inicio/Testimoniales.vue'
import ProductosRecientes from '@/components/Inicio/ProductosRecientes.vue'
import Beneficios from '@/components/Inicio/Beneficios.vue'
import Categorias from '@/components/Inicio/Categorias.vue'
import Franquicias from '@/components/Inicio/Franquicias.vue'
import ProductosMayoreo from '@/components/Inicio/ProductosMayoreo.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <Hero />
    <Bar />
    <ProductosDestacados class="my-16" />
    <Categorias class="my-16" />
    <ProductosRecientes class="my-16" />
    <Testimoniales class="my-16" />
    <Subcategorias class="my-16" />
    <Franquicias class="my-16" />
    <ProductosMayoreo class="my-16" />
    <Beneficios class="my-16" />
  </div>
</template>
