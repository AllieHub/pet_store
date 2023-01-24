import { useMutation } from '@tanstack/react-query'

const request = async ({ url, body }) => fetch(`https://api.react-learning.ru/${url}`, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(body),
}).then(async (res) => {
  if (res.status >= 400) {
    const { message } = await res.json()
    throw new Error(message || 'Неизвестная ошибка')
  }
  return res.json()
})

export const useMutateSignup = () => useMutation({
  mutationFn: (body) => request({ url: 'signup', body }),
})
