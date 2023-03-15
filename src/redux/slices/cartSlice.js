import { createSlice } from '@reduxjs/toolkit'
import { initState } from '../initState'

const cartSlice = createSlice({
  name: 'cart',
  initialState: initState.cart,
  reducers: {
    addProductCart(state, action) {
      const { id, price, discount } = action.payload
      const product = state.find((el) => el.id === id)
      if (product) {
        product.count += 1
        product.price = price
        product.discount = discount
      } else {
        state.push({
          id, count: 1, isChecked: true, price, discount,
        })
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
    removeSelectedProductsCart(state) {
      return state.filter((product) => !product.isChecked)
    },
    changeIsChecked(state, action) {
      const { id, isChecked } = action.payload
      const product = state.find((el) => el.id === id)
      if (product) {
        product.isChecked = isChecked
      }
    },
    changeAllChecked(state, action) {
      const isChecked = action.payload
      state.forEach((el) => { el.isChecked = isChecked })
    },
    changePriceDicount(state, action) {
      const { id, price, discount } = action.payload
      const product = state.find((el) => el.id === id)
      if (product) {
        product.count += 1
        product.price = price
        product.discount = discount
      }
    },
  },
})

export const {
  addProductCart, decrementProductCart, removeProductCart, removeAllProductsCart, changeIsChecked,
  changeAllChecked, removeSelectedProductsCart, changePriceDicount,
} = cartSlice.actions

export const getCartSelector = (state) => state.cart

export const cartReducer = cartSlice.reducer
