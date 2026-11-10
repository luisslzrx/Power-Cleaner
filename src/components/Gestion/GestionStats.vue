<template>
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-6 font-sans">
    <!-- Card 1: Total Productos -->
    <div class="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex items-center gap-3.5">
      <div class="w-11 h-11 rounded-xl bg-blue-50 text-power-secondary flex items-center justify-center shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      </div>
      <div>
        <p class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Productos</p>
        <p class="text-xl sm:text-2xl font-extrabold text-slate-800">{{ totalProducts }}</p>
      </div>
    </div>

    <!-- Card 2: Departamentos -->
    <div class="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex items-center gap-3.5">
      <div class="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      </div>
      <div>
        <p class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Departamentos</p>
        <p class="text-xl sm:text-2xl font-extrabold text-slate-800">{{ totalDepartments }}</p>
      </div>
    </div>

    <!-- Card 3: Categorías -->
    <div class="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex items-center gap-3.5">
      <div class="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      </div>
      <div>
        <p class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Categorías</p>
        <p class="text-xl sm:text-2xl font-extrabold text-slate-800">{{ totalCategories }}</p>
      </div>
    </div>

    <!-- Card 4: Sin Imagen -->
    <div
      class="bg-white rounded-2xl p-4 sm:p-5 border shadow-xs flex items-center gap-3.5 transition-colors"
      :class="missingImageCount > 0 ? 'border-amber-200 bg-amber-50/20' : 'border-slate-200/80'"
    >
      <div
        class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
        :class="missingImageCount > 0 ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <div>
        <p class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Sin Fotografía</p>
        <p
          class="text-xl sm:text-2xl font-extrabold"
          :class="missingImageCount > 0 ? 'text-amber-600' : 'text-slate-800'"
        >
          {{ missingImageCount }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  totalProducts: {
    type: Number,
    default: 0,
  },
  totalDepartments: {
    type: Number,
    default: 0,
  },
  totalCategories: {
    type: Number,
    default: 0,
  },
  missingImageCount: {
    type: Number,
    default: 0,
  },
})
</script>

