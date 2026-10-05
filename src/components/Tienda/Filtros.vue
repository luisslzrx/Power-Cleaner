<template>
  <!-- Barra lateral de filtros para versión de escritorio y barra superior para móviles -->
  <aside class="lg:order-last order-first">
    <div class="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm sticky top-24">
      <h3 class="text-sm font-bold text-gray-800 mb-4">Filtrar productos</h3>

      <!-- FILTRO: Departamento -->
      <div class="mb-5">
        <p class="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Departamento</p>

        <div class="flex flex-col gap-2">
          <!-- Botón de opción por defecto para mostrar todos los departamentos -->
          <button
            class="text-left text-sm px-3 py-2 rounded-xl transition-colors"
            :class="
              selectedDepartment === 'all'
                ? 'bg-power-primary text-white font-semibold'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            "
            @click="clearDepartment"
          >
            Todos
          </button>

          <!-- Renderizado dinámico de los departamentos únicos cargados de los productos -->
          <button
            v-for="department in departments"
            :key="department"
            class="text-left text-sm px-3 py-2 rounded-xl transition-colors"
            :class="
              selectedDepartment === department
                ? 'bg-power-primary text-white font-semibold'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            "
            @click="selectDepartment(department)"
          >
            {{ department }}
          </button>
        </div>
      </div>

      <!-- FILTRO: Categoría -->
      <div>
        <p class="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Categoría</p>

        <div class="flex flex-col gap-2 max-h-[350px] overflow-y-auto pr-1.5 custom-scrollbar">
          <!-- Botón de opción por defecto para mostrar todas las categorías -->
          <button
            class="text-left text-sm px-3 py-2 rounded-xl transition-colors shrink-0"
            :class="
              selectedCategory === 'all'
                ? 'bg-power-primary text-white font-semibold'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            "
            @click="clearCategory"
          >
            Todas
          </button>

          <!-- Renderizado dinámico de las categorías filtradas según el departamento activo -->
          <button
            v-for="category in availableCategories"
            :key="category"
            class="text-left text-sm px-3 py-2 rounded-xl transition-colors shrink-0"
            :class="
              selectedCategory === category
                ? 'bg-power-primary text-white font-semibold'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            "
            @click="selectCategory(category)"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
// Definición de las propiedades (props) que recibe este componente desde el componente padre (Productos.vue)
defineProps({
  // Departamento seleccionado actualmente (ej. 'Productos de Limpieza')
  selectedDepartment: {
    type: String,
    required: true,
  },
  // Categoría seleccionada actualmente (ej. 'Escobas')
  selectedCategory: {
    type: String,
    required: true,
  },
  // Listado total de departamentos únicos cargados de la base de datos
  departments: {
    type: Array,
    required: true,
  },
  // Listado de categorías disponibles que corresponden al departamento seleccionado
  availableCategories: {
    type: Array,
    required: true,
  },
})

// Declaración de eventos que este componente puede emitir hacia el componente padre
const emit = defineEmits([
  'select-department',
  'select-category',
  'clear-department',
  'clear-category',
])

// Funciones para emitir la selección o el restablecimiento de filtros al componente padre
const selectDepartment = (department) => {
  emit('select-department', department)
}

const selectCategory = (category) => {
  emit('select-category', category)
}

const clearDepartment = () => {
  emit('clear-department')
}

const clearCategory = () => {
  emit('clear-category')
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #cbd5e1;
  border-radius: 9999px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #94a3b8;
}
</style>
