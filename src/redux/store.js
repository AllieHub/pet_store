import { configureStore } from '@reduxjs/toolkit'
import { REDUX_LS_KEY } from './constants'
import { getInitState } from './initState'
import { rootReducer } from './rootReducer'
// import { filterReducer } from './slices/cartSlice'

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: getInitState(),
})

store.subscribe(() => {
  window.localStorage.setItem(REDUX_LS_KEY, JSON.stringify(store.getState()))
})
