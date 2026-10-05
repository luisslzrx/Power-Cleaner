import { ref } from 'vue'

const savedFavorites = localStorage.getItem('favorites')
const favorites = ref(savedFavorites ? JSON.parse(savedFavorites) : [])

const saveLocalFavorites = () => {
  localStorage.setItem('favorites', JSON.stringify(favorites.value))
}

export function useFavorites() {
  const isFavorite = (productId) => {
    return favorites.value.some((item) => item.id === productId)
  }

  const toggleFavorite = (product) => {
    const index = favorites.value.findIndex((item) => item.id === product.id)
    if (index > -1) {
      favorites.value.splice(index, 1)
    } else {
      favorites.value.push(product)
    }
    saveLocalFavorites()
  }

  return {
    favorites,
    isFavorite,
    toggleFavorite,
  }
}
