import { combineReducers } from '@reduxjs/toolkit'
import { authReducer } from './slices/authSlice'
import { cartReducer } from './slices/cartSlice'
import { favoritesReducer } from './slices/favoritesSlice'
import { filterReducer } from './slices/filterSlice'

export const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  filter: filterReducer,
  favorites: favoritesReducer,
})
