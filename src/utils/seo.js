/**
 * Utilidad para actualización dinámica de etiquetas SEO, Open Graph y Twitter Cards.
 */
export function updateSEO({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
} = {}) {
  const defaultTitle = 'Power Cleaner | Productos y Artículos de Limpieza'
  const defaultDescription =
    'Descubre Power Cleaner, tu tienda de productos y artículos de limpieza. Encuentra soluciones de calidad de nuestra marca y otras marcas para cada necesidad.'
  const defaultKeywords =
    'Power Cleaner, productos de limpieza, artículos de limpieza, tienda de productos de limpieza'

  const finalTitle = title || defaultTitle
  const finalDescription = description || defaultDescription
  const finalKeywords = keywords || defaultKeywords
  const finalUrl = url || (typeof window !== 'undefined' ? window.location.href : '')

  if (typeof document !== 'undefined') {
    // 1. Título de la pestaña
    document.title = finalTitle

    // Función auxiliar para actualizar o crear meta tags
    const setMetaTag = (attribute, name, content) => {
      if (!content) return
      let tag = document.querySelector(`meta[${attribute}="${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attribute, name)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    // 2. Metadescripción estándar
    setMetaTag('name', 'description', finalDescription)

    // 3. Palabras clave estándar
    setMetaTag('name', 'keywords', finalKeywords)

    // 4. Open Graph (Facebook, WhatsApp, LinkedIn, Slack)
    setMetaTag('property', 'og:title', finalTitle)
    setMetaTag('property', 'og:description', finalDescription)
    setMetaTag('property', 'og:url', finalUrl)
    setMetaTag('property', 'og:type', type)
    if (image) {
      setMetaTag('property', 'og:image', image)
    }

    // 5. Twitter Cards
    setMetaTag('name', 'twitter:card', image ? 'summary_large_image' : 'summary')
    setMetaTag('name', 'twitter:title', finalTitle)
    setMetaTag('name', 'twitter:description', finalDescription)
    if (image) {
      setMetaTag('name', 'twitter:image', image)
    }

    // 6. Enlace Canónico
    if (finalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
      }
      canonical.setAttribute('href', finalUrl)
    }
  }
}

