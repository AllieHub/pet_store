import { createSlice } from '@reduxjs/toolkit'
import { initState } from '../initState'

const cartSlice = createSlice({
  name: 'cart',
  initialState: initState.cart,
  reducers: {
    addProductCart(state, action) {
      const id = action.payload
      const product = state.find((el) => el.id === id)
      if (product) {
        product.count += 1
      } else {
        state.push({ id, count: 1, isChecked: true })
      }
    },
    decrementProductCart(state, action) {
      const id = action.payload
      const product = state.find((el) => el.id === id)
      if (!product) {
        return
      }
      if (product.count === 1) {
        // eslint-disable-next-line consistent-return
        return state.filter((el) => el.id !== id)
      }
      product.count -= 1
    },
    removeProductCart(state, action) {
      return state.filter((product) => product.id !== action.payload)
    },
    removeAllProductsCart() {
      return []
    },
  },
})

export const {
  addProductCart, decrementProductCart, removeProductCart, removeAllProductsCart,
} = cartSlice.actions

export const getCartSelector = (state) => state.cart

export const cartReducer = cartSlice.reducer
