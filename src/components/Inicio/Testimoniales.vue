<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="bg-gray-100 py-8 md:py-16">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- Header row -->
      <div class="flex items-center justify-between mb-6 md:mb-8">
        <h2 class="text-lg md:text-2xl font-bold text-gray-800">Lo que dicen nuestros clientes</h2>

        <!-- Nav arrows -->
        <div class="flex items-center gap-3">
          <button
            @click="prevTestimonials"
            class="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 bg-white hover:border-power-blue transition-colors flex items-center justify-center shadow-sm text-gray-500 active:scale-95"
            aria-label="Testimonial anterior"
          >
            <IconChevronLeft class="w-3 h-3 md:w-4 md:h-4" />
          </button>
          <button
            @click="nextTestimonials"
            class="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 bg-white hover:border-power-blue transition-colors flex items-center justify-center shadow-sm text-gray-500 active:scale-95"
            aria-label="Siguiente testimonial"
          >
            <IconChevronRight class="w-3 h-3 md:w-4 md:h-4" />
          </button>
        </div>
      </div>

      <!-- Cards grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <!-- Card 1 (Always visible, index 1) -->
        <div
          :key="testimonials[currentIndex].name"
          class="animate-fade-in relative bg-white rounded-2xl p-6 md:p-8 shadow-sm overflow-hidden"
        >
          <!-- Left teal border accent -->
          <div
            class="absolute left-0 top-6 md:top-8 bottom-6 md:bottom-8 w-1 bg-power-blue rounded-full"
          ></div>

          <!-- Quote text -->
          <p class="text-gray-600 text-xs md:text-sm leading-relaxed pl-4 mb-6 md:mb-8">
            {{ testimonials[currentIndex].text }}
          </p>

          <!-- Author -->
          <div class="flex items-center gap-3">
            <img
              :src="testimonials[currentIndex].avatar"
              :alt="testimonials[currentIndex].name"
              class="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
            />
            <div>
              <p class="text-xs md:text-sm font-semibold text-gray-800">
                {{ testimonials[currentIndex].name }}
              </p>
              <p class="text-[10px] md:text-xs text-gray-400">
                {{ testimonials[currentIndex].role }}
              </p>
            </div>
          </div>

          <!-- Big quote marks decoration -->
          <div
            class="absolute bottom-4 right-6 text-gray-200 text-6xl md:text-8xl font-serif leading-none select-none"
          >
            "
          </div>
        </div>

        <!-- Card 2 (Visible on MD+, index 2) -->
        <div
          :key="testimonials[nextIndex].name"
          class="hidden md:block animate-fade-in relative bg-white rounded-2xl p-6 md:p-8 shadow-sm overflow-hidden"
        >
          <!-- Left teal border accent -->
          <div
            class="absolute left-0 top-6 md:top-8 bottom-6 md:bottom-8 w-1 bg-power-blue rounded-full"
          ></div>

          <!-- Quote text -->
          <p class="text-gray-600 text-xs md:text-sm leading-relaxed pl-4 mb-6 md:mb-8">
            {{ testimonials[nextIndex].text }}
          </p>

          <!-- Author -->
          <div class="flex items-center gap-3">
            <img
              :src="testimonials[nextIndex].avatar"
              :alt="testimonials[nextIndex].name"
              class="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
            />
            <div>
              <p class="text-xs md:text-sm font-semibold text-gray-800">
                {{ testimonials[nextIndex].name }}
              </p>
              <p class="text-[10px] md:text-xs text-gray-400">
                {{ testimonials[nextIndex].role }}
              </p>
            </div>
          </div>

          <!-- Big quote marks decoration -->
          <div
            class="absolute bottom-4 right-6 text-gray-200 text-6xl md:text-8xl font-serif leading-none select-none"
          >
            "
          </div>
        </div>
      </div>

      <!-- Facebook Reviews Link -->
      <div class="mt-6 md:mt-8 text-center">
        <a
          href="https://www.facebook.com/MERICAN.CLEANING.PRODUCTS/reviews/?id=100085014332432&sk=reviews"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 bg-white text-gray-700 text-xs md:text-sm font-medium px-5 md:px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all border border-gray-200 hover:border-gray-300"
        >
          <IconFacebook class="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
          MIRA NUESTRAS OPINIONES EN FACEBOOK
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { IconChevronLeft, IconChevronRight, IconFacebook } from '@/components/Icons'

const testimonials = [
  {
    name: 'Carlos CH',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos',
    role: 'Cliente verificado',
    rating: 5,
    text: 'Excelente lugar con todos los productos que se requieren para el hogar o negocio. ¡100% recomendado! 👌',
  },
  {
    name: 'Paola Vela',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Paola',
    role: 'Cliente verificado',
    rating: 5,
    text: 'Me encantan sus productos, son de muy buena calidad y sus precios son muy buenos. Excelente atención de las chicas de la sucursal Benito Juárez.',
  },
  {
    name: 'Mendoza Ale',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ale',
    role: 'Cliente verificado',
    rating: 5,
    text: 'Muy buenos productos y buena atención al cliente en el turno de la mañana, en la sucursal Emilio Carranza.',
  },
  {
    name: 'Nora Patricia Cantón Lara',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nora',
    role: 'Cliente verificado',
    rating: 5,
    text: 'Muy buen servicio, buenos productos y chicas muy amables.',
  },
  {
    name: 'Francisco Ojeda',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Francisco',
    role: 'Cliente verificado',
    rating: 5,
    text: 'Buenos productos y buen precio.',
  },
]

const currentIndex = ref(0)
const nextIndex = computed(() => (currentIndex.value + 1) % testimonials.length)

const prevTestimonials = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
}

const nextTestimonials = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
