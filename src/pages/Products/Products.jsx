import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePetStoreContext } from '../../contexts/PetStoreContextProvider'
import { Loader } from '../../Loader/Loader'
import { ProductCard } from '../ProductCard/ProductCard'
import './Products.css'

export function Products() {
  const { token, isAuth } = usePetStoreContext()

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      navigate('/signin')
    }
  }, [isAuth])

  const {
    data, isLoading,
  } = useQuery({
    queryKey: ['ProductsFetch', token],
    queryFn: () => fetch('https://api.react-learning.ru/products', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.status >= 400 && response.status < 500) {
        throw new Error(`Вы не авторизованы. Status: ${response.status}`)
      }
      if (response.status >= 500) {
        throw new Error(`Ошибка на сервере. Status: ${response.status}`)
      }
      return response.json()
    }),
  })

  if (isLoading) {
    return <Loader />
  }

  const { products } = data

  return (
    <div>
      <h2>Наши продукты</h2>
      <div className="CardsWr">
        {products.map(({ _id: id, ...otherProps }) => <ProductCard key={id} {...otherProps} />)}
      </div>
    </div>
  )
}
