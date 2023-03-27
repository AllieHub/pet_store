import { createSlice } from '@reduxjs/toolkit'
import { initState } from '../initState'

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initState.favorites,
  reducers: {
    // eslint-disable-next-line consistent-return
    changeStatusFavourites(state, action) {
      const id = action.payload
      const product = state.find((productId) => productId === id)
      if (product) {
        return state.filter((productId) => productId !== id)
      }
      state.push(id)
    },
  },
})

export const { changeStatusFavourites } = favoritesSlice.actions

export const getFavoritesSelector = (state) => state.favorites

export const favoritesReducer = favoritesSlice.reducer
