import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: []
  }),
  getters: {
    cartItemCount: state => {
      return state.cart.reduce((total, item) => total + item.quantity, 0)
    }
  },
  actions: {
    addToCart(item) {
      const existingItem = this.cart.find(cartItem => cartItem.id === item.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.cart.push({ ...item, quantity: 1 })
      }
    },
    removeFromCart(itemId) {
      this.cart = this.cart.filter(item => item.id !== itemId)
    },
    clearCart() {
      this.cart = []
    }
  }
})
