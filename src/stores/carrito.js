import { ref } from 'vue'
import { supabase } from '../supabase'

const savedCart = localStorage.getItem('cart')

const isOpen = ref(false)
const items = ref(savedCart ? JSON.parse(savedCart) : [])

const saveLocalCart = () => {
  localStorage.setItem('cart', JSON.stringify(items.value))
}

const getUser = async () => {
  const { data } = await supabase.auth.getUser()
  return data.user
}

const saveItemToSupabase = async (product) => {
  const user = await getUser()
  if (!user) return

  const { data: existing } = await supabase
    .from('user_carts')
    .select('*')
    .eq('user_id', user.id)
    .eq('product_id', product.id)
    .maybeSingle()

  if (existing) {
    await supabase
      .from('user_carts')
      .update({
        quantity: product.quantity,
      })
      .eq('id', existing.id)
  } else {
    await supabase.from('user_carts').insert({
      user_id: user.id,
      product_id: product.id,
      quantity: product.quantity,
    })
  }
}

const removeItemFromSupabase = async (productId) => {
  const user = await getUser()
  if (!user) return

  await supabase.from('user_carts').delete().eq('user_id', user.id).eq('product_id', productId)
}

const clearSupabaseCart = async () => {
  const user = await getUser()
  if (!user) return

  await supabase.from('user_carts').delete().eq('user_id', user.id)
}

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

  const addToCart = async (product) => {
    const existingItem = items.value.find((item) => item.id === product.id)

    if (existingItem) {
      existingItem.quantity++
      await saveItemToSupabase(existingItem)
    } else {
      const newItem = {
        ...product,
        quantity: 1,
      }

      items.value.push(newItem)
      await saveItemToSupabase(newItem)
    }

    saveLocalCart()
    openCarrito()
  }

  const removeFromCart = async (productId) => {
    const index = items.value.findIndex((item) => item.id === productId)

    if (index > -1) {
      items.value.splice(index, 1)
      saveLocalCart()
      await removeItemFromSupabase(productId)
    }
  }

  const updateQuantity = async (productId, newQuantity) => {
    const item = items.value.find((item) => item.id === productId)

    if (!item) return

    if (newQuantity <= 0) {
      await removeFromCart(productId)
      return
    }

    item.quantity = newQuantity
    saveLocalCart()
    await saveItemToSupabase(item)
  }

  const getTotalItems = () => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return items.value.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const clearCart = async () => {
    items.value = []
    saveLocalCart()
    await clearSupabaseCart()
  }

  const loadUserCart = async () => {
    const user = await getUser()
    if (!user) return

    const { data, error } = await supabase
      .from('user_carts')
      .select(
        `
        quantity,
        productos (
          id,
          name,
          price,
          image,
          description,
          discount,
          department,
          category
        )
      `,
      )
      .eq('user_id', user.id)

    if (error) {
      console.error('Error al cargar carrito:', error)
      return
    }

    items.value = data.map((cartItem) => ({
      ...cartItem.productos,
      quantity: cartItem.quantity,
    }))

    saveLocalCart()
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
    clearCart,
    loadUserCart,
  }
}
