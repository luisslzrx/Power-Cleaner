<template>
  <div ref="menuContainer" class="relative">
    <!-- Botón de categorías -->
    <div
      class="flex items-center gap-2 pr-6 border-r border-gray-200 cursor-pointer flex-shrink-0 hover:opacity-70 transition-opacity"
      @click="toggleMenu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <span class="text-sm font-medium text-gray-700">Categorías</span>
    </div>

    <!-- Menú desplegable -->
    <div
      v-if="isOpen"
      class="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 min-w-[600px]"
    >
      <div class="flex">
        <!-- Columna de categorías principales -->
        <div class="w-1/2 border-r border-gray-100">
          <div class="p-4">
            <p class="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">
              Departamentos
            </p>
            <div class="flex flex-col gap-1">
              <button
                v-for="department in departments"
                :key="department"
                class="text-left text-sm px-3 py-2 rounded-lg transition-colors"
                :class="
                  selectedDepartment === department
                    ? 'bg-power-primary text-white font-semibold'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                "
                @click="goToDepartment(department)"
                @mouseenter="selectDepartment(department)"
              >
                {{ department }}
              </button>
            </div>
          </div>
        </div>

        <!-- Columna de subcategorías -->
        <div class="w-1/2">
          <div class="p-4">
            <p class="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Categorías</p>
            <div class="flex flex-col gap-1">
              <button
                v-for="category in availableCategories"
                :key="category"
                class="text-left text-sm px-3 py-2 rounded-lg transition-colors bg-gray-50 text-gray-600 hover:bg-gray-100"
                @click="goToCategory(category)"
              >
                {{ category }}
              </button>
              <div v-if="availableCategories.length === 0" class="text-sm text-gray-400 py-2">
                No hay categorías disponibles
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../../supabase'

const router = useRouter()
const menuContainer = ref(null)
const isOpen = ref(false)
const selectedDepartment = ref(null)
const departments = ref([])
const products = ref([])

const availableCategories = computed(() => {
  if (!selectedDepartment.value) return []
  return [
    ...new Set(
      products.value
        .filter((product) => product.department === selectedDepartment.value)
        .map((product) => product.category)
        .filter(Boolean),
    ),
  ]
})

const getDepartments = async () => {
  const { data, error } = await supabase.from('productos').select('department, category')

  if (error) {
    console.error(error)
    return
  }

  products.value = data || []
  departments.value = [...new Set(data.map((item) => item.department).filter(Boolean))]

  if (departments.value.length > 0) {
    selectedDepartment.value = departments.value[0]
  }
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const selectDepartment = (department) => {
  selectedDepartment.value = department
}

const goToCategory = (category) => {
  isOpen.value = false

  router.push({
    path: '/tienda',
    query: {
      department: selectedDepartment.value,
      category: category,
    },
  })
}

const goToDepartment = (department) => {
  isOpen.value = false

  router.push({
    path: '/tienda',
    query: {
      department: department,
    },
  })
}

const handleClickOutside = (event) => {
  if (menuContainer.value && !menuContainer.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  getDepartments()
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
