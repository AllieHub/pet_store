import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  token: '',
  group: '',
  userId: '',
}

const authSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setToken(state, action) {
      state.isAuth = true
      state.token = action.payload
    },
    setGroup(state, action) {
      state.group = action.payload
    },
    setUserId(state, action) {
      state.userId = action.payload
    },
    clearToken() {
      return initialState
    },
  },
})

export const {
  setToken, setGroup, setUserId, clearToken,
} = authSlice.actions

// export const getTokenSelector = (state) => state.auth.token

export const getAuthStatusSelector = (state) => state.auth.isAuth

export const getGroupSelector = (state) => state.auth.group

export const authReducer = authSlice.reducer
