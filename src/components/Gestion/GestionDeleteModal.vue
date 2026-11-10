<template>
  <Teleport to="body">
    <div class="fixed inset-0 z-[9999] overflow-y-auto font-sans">
      <!-- Backdrop oscuro -->
      <div
        class="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        @click="$emit('close')"
      ></div>

      <!-- Modal centrado -->
      <div class="min-h-full flex items-center justify-center p-4">
        <div
          class="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden z-10 p-6 sm:p-7 text-center"
          @click.stop
        >
          <!-- Ícono de advertencia -->
          <div class="w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>

          <h3 class="text-lg font-bold text-slate-900 mb-1">
            ¿Eliminar este producto?
          </h3>
          <p class="text-xs text-slate-500 mb-5">
            Esta acción eliminará el producto permanentemente del catálogo y ya no estará disponible en la tienda.
          </p>

          <!-- Tarjeta resumen del producto a eliminar -->
          <div v-if="product" class="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 mb-5 text-left flex items-center gap-3">
            <div class="w-12 h-12 rounded-xl overflow-hidden bg-white border border-slate-200 shrink-0 flex items-center justify-center">
              <img
                v-if="product.image"
                :src="product.image"
                :alt="product.name"
                class="w-full h-full object-cover"
              />
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            <div class="flex-1 min-w-0">
              <p class="text-xs font-bold text-slate-900 truncate">{{ product.name }}</p>
              <div class="flex items-center gap-2 mt-0.5 text-[11px] text-slate-500">
                <span>ID: #{{ product.id }}</span>
                <span>•</span>
                <span class="font-extrabold text-slate-800">${{ product.price }}</span>
              </div>
            </div>
          </div>

          <!-- Alerta de error -->
          <div v-if="errorMessage" class="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 text-left">
            {{ errorMessage }}
          </div>

          <!-- Botones de Acción -->
          <div class="flex items-center justify-center gap-3">
            <button
              type="button"
              :disabled="isDeleting"
              @click="$emit('close')"
              class="flex-1 py-2.5 px-4 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="button"
              :disabled="isDeleting"
              @click="handleDelete"
              class="flex-1 py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-md active:scale-98 disabled:opacity-50 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <svg
                v-if="isDeleting"
                class="animate-spin h-3.5 w-3.5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>{{ isDeleting ? 'Eliminando...' : 'Sí, eliminar' }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../../supabase'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['close', 'deleted'])

const isDeleting = ref(false)
const errorMessage = ref('')

const handleDelete = async () => {
  if (!props.product?.id) return
  isDeleting.value = true
  errorMessage.value = ''

  try {
    const { error } = await supabase
      .from('productos')
      .delete()
      .eq('id', props.product.id)

    if (error) throw error

    emit('deleted', props.product.id)
  } catch (err) {
    console.error('Error al eliminar producto:', err)
    if (err.code === '42501' || err.message?.includes('row-level security')) {
      errorMessage.value =
        'Error de permisos (RLS 42501). La tabla "productos" requiere una política en Supabase que permita eliminar a usuarios autenticados.'
    } else {
      errorMessage.value = err.message || 'No se pudo eliminar el producto.'
    }
  } finally {
    isDeleting.value = false
  }
}
</script>

