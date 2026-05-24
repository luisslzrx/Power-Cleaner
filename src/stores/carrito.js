import { ref } from 'vue'

// Estado global del carrito
const isOpen = ref(false)
const items = ref([])

export function useCarrito() {
  const openCarrito = () => {
    isOpen.value = true
  }

  const closeCarrito = () => {
    isOpen.value = false
  }

  const toggleCarrito = () => {
    isOpen.value = !isOpen.value
  }

  const addToCart = (product) => {
    // Verificar si el producto ya está en el carrito
    const existingItem = items.value.find(item => item.id === product.id)
    
    if (existingItem) {
      // Si ya existe, incrementar cantidad
      existingItem.quantity++
    } else {
      // Si no existe, agregarlo con cantidad 1
      items.value.push({
        ...product,
        quantity: 1
      })
    }
    
    // Abrir el carrito automáticamente
    openCarrito()
  }

  const removeFromCart = (productId) => {
    const index = items.value.findIndex(item => item.id === productId)
    if (index > -1) {
      items.value.splice(index, 1)
    }
  }

  const updateQuantity = (productId, newQuantity) => {
    const item = items.value.find(item => item.id === productId)
    if (item) {
      if (newQuantity <= 0) {
        removeFromCart(productId)
      } else {
        item.quantity = newQuantity
      }
    }
  }

  const getTotalItems = () => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return items.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const clearCart = () => {
    items.value = []
  }

  return {
    isOpen,
    items,
    openCarrito,
    closeCarrito,
    toggleCarrito,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
    clearCart
  }
}
