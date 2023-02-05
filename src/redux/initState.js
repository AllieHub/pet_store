import { REDUX_LS_KEY } from './constants'

export const initState = {
  auth: {
    isAuth: false,
    token: '',
  },
  filter: {
    search: '',
  },
}
export const getInitState = () => {
  const dataFromLS = window.localStorage.getItem(REDUX_LS_KEY)
  const data = dataFromLS && JSON.parse(dataFromLS)
  return { ...initState, ...data }
}
