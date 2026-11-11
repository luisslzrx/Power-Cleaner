<template>
  <div>
    <CaracteristicasProducto :id="route.params.id" @loaded="handleLoaded" />

    <ProductReviews :product-id="route.params.id" />

    <ProductosSimilares
      v-if="productCategory"
      :category="productCategory"
      :current-product-id="route.params.id"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import CaracteristicasProducto from '@/components/Producto/CaracteristicasProducto.vue'
import ProductReviews from '@/components/Producto/ProductReviews.vue'
import ProductosSimilares from '@/components/Producto/ProductosSimilares.vue'
import { updateSEO } from '@/utils/seo'

const route = useRoute()
const productCategory = ref('')

const handleLoaded = (product) => {
  productCategory.value = product?.category || product?.categoria || ''

  if (
    product &&
    product.name &&
    product.name !== 'Error al cargar' &&
    product.name !== 'No encontrado'
  ) {
    // 1. Título dinámico con variante si existe
    const variantSuffix =
      product.variant_name && product.variant_name !== 'Única'
        ? ` (${product.variant_name})`
        : ''
    const seoTitle = `${product.name}${variantSuffix} | Power Cleaner`

    // 2. Metadescripción dinámica optimizada para motores de búsqueda (máx. ~155 caracteres)
    let seoDescription = ''
    if (product.description && product.description !== 'Sin descripción disponible') {
      const cleanDesc = product.description.replace(/\s+/g, ' ').trim()
      seoDescription = cleanDesc.length > 155 ? `${cleanDesc.slice(0, 152)}...` : cleanDesc
    } else {
      const priceText = product.price ? ` por $${product.price} MXN` : ''
      seoDescription = `Compra ${product.name}${variantSuffix}${priceText} en Power Cleaner. Calidad y rendimiento en productos de limpieza con envío a todo México.`
    }

    // 3. Palabras clave dinámicas con nombre, categoría y departamento
    const keywordsArray = [
      product.name,
      product.category,
      product.department,
      'Power Cleaner',
      `comprar ${product.name}`,
      'productos de limpieza',
      'artículos de limpieza',
    ].filter(Boolean)

    const seoKeywords = [...new Set(keywordsArray)].join(', ')

    // 4. Aplicar etiquetas SEO (Title, Description, Keywords, Open Graph, Twitter Cards y Canonical)
    updateSEO({
      title: seoTitle,
      description: seoDescription,
      keywords: seoKeywords,
      image: product.image || undefined,
      url: window.location.href,
      type: 'product',
    })
  }
}

// Reset al cambiar de producto
watch(
  () => route.params.id,
  () => {
    productCategory.value = ''
    updateSEO({
      title: 'Cargando producto... | Power Cleaner',
      description:
        'Consulta detalles, precios y presentaciones de productos de limpieza en Power Cleaner.',
    })
  },
)
</script>
