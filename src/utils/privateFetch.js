import { store } from '../redux/store'

export const privateFetch = async (url, fetchProps = {}) => {
  const { token } = store.getState().auth
  const { body, headers, ...otherProps } = fetchProps
  return fetch(`https://api.react-learning.ru/${url}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      authorization: `Bearer ${token}`,
      ...headers,
    },
    body: JSON.stringify(body),
    ...otherProps,
  }).then(async (res) => {
    if (res.status >= 400) {
      const { message } = await res.json()
      throw new Error(message || 'Неизвестная ошибка')
    }
    return res.json()
  })
}
