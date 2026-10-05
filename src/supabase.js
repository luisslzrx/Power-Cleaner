import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rjpvzmtnottuvagzaybe.supabase.co'
const supabaseKey = 'sb_publishable_CU4eG-ONNEhQ398d64TiYg_f_GgEcri'

export const supabase = createClient(supabaseUrl, supabaseKey)

// ==============================================================================
// ⚙️ COMANDO GLOBAL: MOSTRAR SOLO PRODUCTOS CON FOTO
// ==============================================================================
// • true  -> Filtra a nivel global en la base de datos para que SOLO se consulten
//            y muestren en el sitio los productos que tienen foto (campo 'image').
// • false -> Desactiva el filtro y muestra todos los productos (con o sin foto).
//
// 📍 ¿DÓNDE QUITARLO O MODIFICARLO?
// Archivo: src/supabase.js (este mismo archivo)
// Para quitarlo o desactivarlo en el futuro:
// Cambia 'true' por 'false' en la variable SOLO_PRODUCTOS_CON_FOTO de abajo.
// ==============================================================================
export const SOLO_PRODUCTOS_CON_FOTO = true

// Interceptor global de Supabase: aplica el filtro en cualquier consulta a la tabla 'productos'
const originalFrom = supabase.from.bind(supabase)

supabase.from = function (relation) {
  const query = originalFrom(relation)

  if (SOLO_PRODUCTOS_CON_FOTO && relation === 'productos') {
    const originalSelect = query.select.bind(query)
    query.select = function (...args) {
      return originalSelect(...args)
        .not('image', 'is', null)
        .neq('image', '')
    }
  }

  return query
}