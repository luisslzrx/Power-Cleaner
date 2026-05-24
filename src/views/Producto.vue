<template>
  <section class="w-full bg-white py-10 font-sans">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-2 gap-14 items-start">
        <!-- LEFT: Galería -->
        <div class="flex flex-col gap-4">
          <!-- Imagen principal -->
          <div
            class="relative rounded-2xl bg-blue-50 flex items-center justify-center overflow-hidden"
            style="min-height: 360px"
          >
            <img
              :src="productImage"
              :alt="productName"
              class="object-contain h-72 w-auto drop-shadow-md"
            />
          </div>

          <!-- Miniaturas con flechas -->
          <div class="flex items-center gap-3">
            <!-- Flecha izquierda -->
            <button
              class="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0 hover:border-blue-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <!-- Thumbnails -->
            <div class="flex items-center gap-3 flex-1">
              <div
                class="rounded-xl bg-blue-50 flex items-center justify-center overflow-hidden cursor-pointer transition-all border-2 flex-1"
                style="height: 90px"
              >
                <img :src="productImage" :alt="productName" class="h-16 object-contain" />
              </div>
            </div>

            <!-- Flecha derecha -->
            <button
              class="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0 hover:border-blue-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <!-- RIGHT: Info -->
        <div class="flex flex-col gap-5 pt-2">
          <!-- Título + badge variante -->
          <div class="flex items-start justify-between gap-4">
            <h1 class="text-2xl font-bold text-gray-900 leading-snug">{{ productName }}</h1>
            <span
              class="flex-shrink-0 text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-lg"
            >
              Estándar
            </span>
          </div>

          <!-- Subtítulo -->
          <p class="text-sm text-gray-400 -mt-3">Envío en 2 días · 1 año de garantía</p>

          <!-- Estrellas + reviews -->
          <div class="flex items-center gap-2">
            <div class="flex items-center gap-0.5">
              <svg
                v-for="s in 5"
                :key="s"
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.074 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.285-3.957z"
                />
              </svg>
            </div>
            <span class="text-sm font-bold text-gray-700">4.5</span>
            <span class="text-sm text-gray-400">de 392 reseñas</span>
          </div>

          <!-- Precio -->
          <div class="flex items-baseline gap-1">
            <span class="text-2xl text-gray-500 font-light">$</span>
            <span class="text-4xl font-extrabold text-gray-900">{{ productPrice }}</span>
          </div>

          <!-- Features list -->
          <ul class="flex flex-col gap-2.5">
            <li class="flex items-center gap-2.5 text-sm text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-blue-500 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Devolución gratuita
            </li>
            <li class="flex items-center gap-2.5 text-sm text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-blue-500 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Chat con nosotros 24 horas
            </li>
            <li class="flex items-center gap-2.5 text-sm text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-blue-500 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Viene con empaque incluido
            </li>
            <li class="flex items-center gap-2.5 text-sm text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-blue-500 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Garantía de 1 año
            </li>
          </ul>

          <!-- Avatares + vendidos -->
          <div class="flex items-center gap-2">
            <!-- Avatares apilados -->
            <div class="flex items-center -space-x-2">
              <div
                class="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                style="background: #f97316"
              >
                A
              </div>
              <div
                class="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                style="background: #3b82f6"
              >
                B
              </div>
              <div
                class="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                style="background: #10b981"
              >
                C
              </div>
              <div
                class="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                style="background: #8b5cf6"
              >
                D
              </div>
              <div
                class="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                style="background: #ec4899"
              >
                E
              </div>
            </div>
            <p class="text-sm text-gray-700">
              <span class="font-bold text-gray-900">1,241</span>
              vendidos en las últimas 24 horas
            </p>
          </div>

          <!-- Descripción del producto -->
          <div>
            <h2 class="text-lg font-semibold text-gray-700 mb-2">Descripción</h2>
            <p class="text-gray-600 leading-relaxed">{{ productDescription }}</p>
          </div>

          <!-- Botones CTA -->
          <div class="flex items-center gap-3 mt-1">
            <button
              class="flex-1 text-white text-sm font-bold py-3 rounded-xl transition-all hover:opacity-90"
              style="background: #1d4e89"
            >
              Comprar ahora
            </button>
            <button
              class="flex-1 text-blue-600 text-sm font-semibold py-3 rounded-xl border border-blue-200 bg-blue-50 hover:bg-blue-100 transition-all"
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Importa ref (variables reactivas) y onMounted (hook que corre al montar el componente)
import { ref, onMounted } from 'vue'
// Importa useRoute para acceder a los parámetros de la URL actual
import { useRoute } from 'vue-router'
// Importa el cliente de Supabase para hacer consultas a la base de datos
import { supabase } from '../supabase'

// Obtiene la ruta actual (contiene params, query, etc.)
const route = useRoute()
// Variable reactiva para el nombre del producto, inicia con texto de espera
const productName = ref('Cargando...')
// Variable reactiva para el precio del producto, inicia con texto de espera
const productPrice = ref('Cargando...')
// Variable reactiva para la imagen del producto, inicia con texto de espera
const productImage = ref('Cargando...')
// Variable reactiva para la descripción del producto, inicia con texto de espera
const productDescription = ref('Cargando...')

// Se ejecuta automáticamente cuando el componente termina de montarse en el DOM
onMounted(async () => {

  // Consulta a Supabase: tabla "productos", trae "name", "price", "image" y "description", donde id coincida con el de la URL, espera un solo resultado
  const { data, error } = await supabase
    .from('productos') // tabla a consultar
    .select('name, price, image, description') // columnas que quieres traer
    .eq('id', route.params.id) // filtra por el id de la URL
    .single() // espera exactamente un registro

  // Si hay error muestra mensaje de error, si no asigna todos los datos (o "No encontrado" si son null)
  if (error) {
    productName.value = 'Error al cargar'
    productPrice.value = 'Error al cargar'
    productImage.value = 'Error al cargar'
    productDescription.value = 'Error al cargar'
  } else {
    productName.value = data?.name ?? 'No encontrado'
    productPrice.value = data?.price ? `$${data.price}` : 'No disponible'
    productImage.value = data?.image ?? '/src/assets/images/productos.webp'
    productDescription.value = data?.description ?? 'Sin descripción disponible'
  }
})
</script>
