<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="max-w-7xl mx-auto px-4 md:px-6 my-20">
    <!-- Header -->
    <div class="flex items-center justify-between mb-2">
      <h2 class="text-xl md:text-2xl font-bold text-power-primary">
        Explora nuestras <span class="text-power-accent">sucursales</span>
      </h2>
    </div>
    <div class="w-full h-px bg-slate-200 mb-10"></div>

    <!-- Main Container -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      <!-- Left Column: Interactive Map -->
      <div class="lg:col-span-7 xl:col-span-8 relative min-h-[400px] lg:min-h-[600px] flex">
        <div
          id="map-container"
          class="w-full h-[400px] lg:h-auto min-h-full rounded-2xl overflow-hidden shadow-lg border border-slate-100 transition-all duration-300 z-10"
        ></div>
      </div>

      <!-- Right Column: Detail Card & Location List -->
      <div class="lg:col-span-5 xl:col-span-4 flex flex-col justify-between gap-6">
        <!-- Selected Showroom Details Panel -->
        <div
          v-if="selectedShowroom"
          class="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm flex flex-col justify-between transition-all duration-500 hover:shadow-md"
        >
          <div>
            <div class="flex items-center gap-2 mb-4">
              <span
                class="px-2.5 py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider bg-power-primary/10 text-power-primary rounded-full"
              >
                {{ selectedShowroom.city }}
              </span>
              <span class="text-[10px] md:text-xs text-slate-400">• Showroom Oficial</span>
            </div>

            <h3
              class="text-xl md:text-2xl font-bold text-power-primary mb-6 transition-all duration-300"
            >
              {{ selectedShowroom.name }}
            </h3>

            <!-- Info Items -->
            <div class="space-y-5 mb-8">
              <!-- Address -->
              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0 text-power-secondary border border-slate-100 shadow-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    Dirección
                  </p>
                  <p class="text-sm text-slate-700 leading-relaxed mt-0.5">
                    {{ selectedShowroom.address }}
                  </p>
                </div>
              </div>

              <!-- Hours -->
              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0 text-power-secondary border border-slate-100 shadow-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    Horario de Atención
                  </p>
                  <p class="text-sm text-slate-700 leading-relaxed mt-0.5">
                    {{ selectedShowroom.hours }}
                  </p>
                </div>
              </div>

              <!-- Phone -->
              <div v-if="selectedShowroom.phone" class="flex items-start gap-4">
                <div
                  class="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0 text-power-secondary border border-slate-100 shadow-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    Teléfono
                  </p>
                  <p class="text-sm text-slate-700 leading-relaxed mt-0.5">
                    <a
                      :href="'tel:' + selectedShowroom.phone.replace(/\s+/g, '')"
                      class="hover:text-power-accent transition-colors font-medium"
                    >
                      {{ selectedShowroom.phone }}
                    </a>
                  </p>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0 text-power-secondary border border-slate-100 shadow-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    Correo Electrónico
                  </p>
                  <p class="text-sm text-slate-700 leading-relaxed mt-0.5">
                    <a
                      :href="'mailto:' + selectedShowroom.email"
                      class="hover:text-power-accent transition-colors font-medium"
                    >
                      {{ selectedShowroom.email }}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Get Directions Button -->
          <a
            :href="selectedShowroom.googleMapsUrl"
            target="_blank"
            class="w-full bg-power-primary text-white hover:bg-power-accent hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-bold tracking-wide rounded-xl py-3.5 px-6 text-center shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 text-xs"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            CÓMO LLEGAR
          </a>
        </div>

        <!-- Vertical List of Showrooms -->
        <div class="flex flex-col gap-3">
          <h4 class="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1">
            EXPLORAR SUCURSALES
          </h4>

          <div class="space-y-2.5 max-h-[260px] overflow-y-auto pr-1 custom-scrollbar">
            <div
              v-for="showroom in showrooms"
              :key="showroom.id"
              @click="selectShowroom(showroom.id)"
              class="group flex items-center justify-between p-4 bg-white border rounded-xl cursor-pointer transition-all duration-300 hover:shadow-sm"
              :class="[
                selectedShowroomId === showroom.id
                  ? 'border-power-accent bg-power-accent/[0.02] shadow-sm'
                  : 'border-slate-200 hover:border-power-secondary/60 hover:bg-slate-50/50',
              ]"
            >
              <div class="flex flex-col gap-1 pr-4">
                <span
                  class="text-sm font-bold transition-colors duration-300"
                  :class="[
                    selectedShowroomId === showroom.id
                      ? 'text-power-accent'
                      : 'text-power-primary group-hover:text-power-secondary',
                  ]"
                >
                  {{ showroom.name }}
                </span>
                <span class="text-xs text-slate-400 line-clamp-1">
                  {{ showroom.address }}
                </span>
              </div>

              <div class="flex-shrink-0">
                <div
                  class="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                  :class="[
                    selectedShowroomId === showroom.id
                      ? 'bg-power-accent text-white scale-105'
                      : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600',
                  ]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2.5"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Showrooms Data
const showrooms = [
  {
    id: 1,
    name: 'Sucursal San Agustín',
    city: 'Jalisco',
    address: 'Av. Ramon Corona 45640, 45640 San Agustín, Jal.',
    hours: 'Lunes a Sábado: 10:00 AM - 8:00 PM | Domingo: 11:00 AM - 6:00 PM',
    phone: '',
    email: 'ventas@powercleanergroup.com',
    coords: [20.575, -103.453],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=20.5750,-103.4530',
  },
  {
    id: 2,
    name: 'Sucursal Cristóbal Colón',
    city: 'Jalisco',
    address: 'Av. Cristobal Colon 6146, Santa María Tequepexpan, 45601 San Pedro Tlaquepaque, Jal.',
    hours: 'Lunes a Sábado: 10:00 AM - 8:00 PM | Domingo: 11:00 AM - 6:00 PM',
    phone: '',
    email: 'ventas@powercleanergroup.com',
    coords: [20.6002, -103.4],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=20.6002,-103.4000',
  },
  {
    id: 3,
    name: 'Sucursal Playa Santiago',
    city: 'Colima',
    address: 'Blvd. Miguel de la Madrid 10801, Playa Santiago, 28160 Manzanillo, Col.',
    hours: 'Lunes a Sábado: 9:00 AM - 7:00 PM | Domingo: Cerrado',
    phone: '+52 314 100 7071',
    email: 'ventas@powercleanergroup.com',
    coords: [19.1126, -104.3571],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=19.1126,-104.3571',
  },
  {
    id: 4,
    name: 'Sucursal Valle de las Garzas II',
    city: 'Colima',
    address: 'Av Elías Zamora 270, Valle de Las Garzas, II, 28219 Manzanillo, Col.',
    hours: 'Lunes a Sábado: 9:00 AM - 7:00 PM | Domingo: Cerrado',
    phone: '+52 314 100 7071',
    email: 'ventas@powercleanergroup.com',
    coords: [19.0958, -104.3025],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=19.0958,-104.3025',
  },
  {
    id: 5,
    name: 'Sucursal Valle de las Garzas IV',
    city: 'Colima',
    address: 'Av Elías Zamora 918, IV, 28219 Manzanillo, Col.',
    hours: 'Lunes a Sábado: 9:00 AM - 7:00 PM | Domingo: Cerrado',
    phone: '+52 314 688 3620',
    email: 'ventas@powercleanergroup.com',
    coords: [19.1001, -104.2985],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=19.1001,-104.2985',
  },
  {
    id: 6,
    name: 'Sucursal Sevilla del Río',
    city: 'Colima',
    address: 'Felipe Sevilla del Río 366, Lomas de Circunvalación, 28010 Colima, Col.',
    hours: 'Lunes a Sábado: 9:00 AM - 7:00 PM | Domingo: Cerrado',
    phone: '+52 312 111 5362',
    email: 'ventas@powercleanergroup.com',
    coords: [19.2523, -103.7122],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=19.2523,-103.7122',
  },
  {
    id: 7,
    name: 'Sucursal Av. Tecnológico',
    city: 'Colima',
    address: 'Av Tecnológico 30, La Cajita del Agua, 28975 Cdad. de Villa de Álvarez, Col.',
    hours: 'Lunes a Sábado: 9:00 AM - 7:00 PM | Domingo: Cerrado',
    phone: '+52 312 245 4500',
    email: 'ventas@powercleanergroup.com',
    coords: [19.2625, -103.738],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=19.2625,-103.7380',
  },
  {
    id: 8,
    name: 'Sucursal Emilio Carranza',
    city: 'Colima',
    address: 'Emilio Carranza 332, Centro, 28000 Colima, Col.',
    hours: 'Lunes a Sábado: 9:00 AM - 7:00 PM | Domingo: Cerrado',
    phone: '+52 312 298 0737',
    email: 'ventas@powercleanergroup.com',
    coords: [19.244, -103.7171],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=19.2440,-103.7171',
  },
  {
    id: 9,
    name: 'Sucursal Benito Juárez',
    city: 'Colima',
    address: 'Av. Benito Juárez 794, Campo Real, 28984 Cdad. de Villa de Álvarez, Col.',
    hours: 'Lunes a Sábado: 9:00 AM - 7:00 PM | Domingo: Cerrado',
    phone: '+52 312 107 7087',
    email: 'ventas@powercleanergroup.com',
    coords: [19.2647, -103.7378],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=19.2647,-103.7378',
  },
  {
    id: 10,
    name: 'Sucursal Quesería',
    city: 'Colima',
    address: 'C. Josefa O. de Domínguez 29, Centro, 28510 Quesería, Col.',
    hours: 'Lunes a Sábado: 9:00 AM - 7:00 PM | Domingo: Cerrado',
    phone: '+52 312 167 3097',
    email: 'ventas@powercleanergroup.com',
    coords: [19.3867, -103.5739],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=19.3867,-103.5739',
  },
  {
    id: 11,
    name: 'Sucursal Maclovio Herrera',
    city: 'Colima',
    address: 'Av. Maclovio Herrera 202, Magisterial, 28030 Colima, Col.',
    hours: 'Lunes a Sábado: 9:00 AM - 7:00 PM | Domingo: Cerrado',
    phone: '',
    email: 'ventas@powercleanergroup.com',
    coords: [19.2536, -103.7277],
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=19.2536,-103.7277',
  },
]

// State
const selectedShowroomId = ref(1)
const selectedShowroom = computed(() => {
  return showrooms.find((s) => s.id === selectedShowroomId.value)
})

// Leaflet Map References
let mapInstance = null
const markersMap = new Map()

// Create Custom Interactive Marker Icon (styled via Tailwind variables)
const createMarkerIcon = (isActive) => {
  return L.divIcon({
    className: 'custom-marker-wrapper',
    html: `
      <div class="relative flex items-center justify-center" style="width: 32px; height: 32px;">
        ${
          isActive
            ? `
          <div class="absolute w-10 h-10 rounded-full bg-[#C1121F]/25 animate-ping" style="animation-duration: 2s;"></div>
        `
            : ''
        }
        <div class="w-8 h-8 rounded-full border-2 bg-white flex items-center justify-center shadow-lg transition-all duration-300 ${
          isActive ? 'border-[#C1121F] scale-110' : 'border-[#0A2342] hover:scale-105'
        }">
          <div class="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
            isActive ? 'bg-[#C1121F]' : 'bg-[#0A2342]'
          }">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  })
}

// Map interactions
const selectShowroom = (id) => {
  selectedShowroomId.value = id
}

// Watch selected showroom to fly to center and update marker styles
watch(selectedShowroomId, (newId) => {
  // Update marker icons
  markersMap.forEach((marker, showroomId) => {
    marker.setIcon(createMarkerIcon(showroomId === newId))
  })

  // flyTo coordinates
  const showroom = showrooms.find((s) => s.id === newId)
  if (showroom && mapInstance) {
    mapInstance.flyTo(showroom.coords, 14, {
      animate: true,
      duration: 1.5,
    })
  }
})

// Lifecycle hooks
onMounted(() => {
  nextTick(() => {
    const initialShowroom = showrooms[0]

    // Initialize Map
    mapInstance = L.map('map-container', {
      zoomControl: false,
      attributionControl: true,
    }).setView(initialShowroom.coords, 14)

    // Add CartoDB Voyager Tile Layer (elegant color style)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20,
    }).addTo(mapInstance)

    // Custom positioned zoom control at bottom right
    L.control
      .zoom({
        position: 'bottomright',
      })
      .addTo(mapInstance)

    // Add Showroom Markers
    showrooms.forEach((showroom) => {
      const isActive = showroom.id === selectedShowroomId.value
      const marker = L.marker(showroom.coords, {
        icon: createMarkerIcon(isActive),
      }).addTo(mapInstance)

      marker.on('click', () => {
        selectShowroom(showroom.id)
      })

      markersMap.set(showroom.id, marker)
    })

    // Workaround to ensure Leaflet renders correctly after parent reflows
    setTimeout(() => {
      if (mapInstance) {
        mapInstance.invalidateSize()
      }
    }, 200)
  })
})

onBeforeUnmount(() => {
  // Cleanup Leaflet instance to prevent memory leaks and container errors
  if (mapInstance) {
    mapInstance.remove()
    mapInstance = null
  }
  markersMap.clear()
})
</script>

<style scoped>
/* Custom styled scrollbar for the vertical list */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 9999px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Premium Leaflet styles overrides */
:deep(.leaflet-container) {
  font-family: inherit;
  background-color: #f8fafc;
}
:deep(.leaflet-bar) {
  border: none !important;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.05),
    0 2px 4px -2px rgb(0 0 0 / 0.05) !important;
  border-radius: 12px !important;
  overflow: hidden;
}
:deep(.leaflet-bar a) {
  background-color: #ffffff !important;
  color: #0a2342 !important;
  border: 1px solid #f1f5f9 !important;
  transition: all 0.2s ease;
  width: 38px !important;
  height: 38px !important;
  line-height: 38px !important;
  font-size: 16px !important;
  font-weight: 500 !important;
}
:deep(.leaflet-bar a:hover) {
  background-color: #f8fafc !important;
  color: #c1121f !important;
}
:deep(.leaflet-control-attribution) {
  background: rgba(255, 255, 255, 0.75) !important;
  backdrop-filter: blur(8px);
  padding: 3px 8px !important;
  border-top-left-radius: 10px;
  font-size: 9px !important;
  color: #64748b !important;
  border: 1px solid rgba(241, 245, 249, 0.5);
  border-right: none;
  border-bottom: none;
}
:deep(.leaflet-control-attribution a) {
  color: #1d4e89 !important;
  text-decoration: none;
}
:deep(.leaflet-control-attribution a:hover) {
  text-decoration: underline;
}

/* Avoid focus outline on map clicking */
:deep(.leaflet-container :focus) {
  outline: none;
}
</style>
