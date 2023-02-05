import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  token: '',
}

const authSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setToken(state, action) {
      state.isAuth = true
      state.token = action.payload
    },
    clearToken() {
      return initialState
    },
  },
})

export const { setToken, clearToken } = authSlice.actions

// export const getTokenSelector = (state) => state.auth.token

export const getAuthStatusSelector = (state) => state.auth.isAuth

export const authReducer = authSlice.reducer
