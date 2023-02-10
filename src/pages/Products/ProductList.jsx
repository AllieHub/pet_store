import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Loader } from '../../Loader/Loader'
import { getAuthStatusSelector } from '../../redux/slices/authSlice'
import { getSearchSelector } from '../../redux/slices/filterSlice'
import { privateFetch } from '../../utils/privateFetch'
import { ProductCard } from '../ProductCard/ProductCard'
import productsStyles from './ProductList.module.css'
import { getQueryKey } from './utils'

export function ProductList() {
  const isAuth = useSelector(getAuthStatusSelector)

  const search = useSelector(getSearchSelector)

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      navigate('/signin')
    }
  }, [isAuth])

  const {
    data, isLoading, isError, error,
  } = useQuery({
    queryKey: getQueryKey(search),
    queryFn: () => privateFetch(`products?query=${search}`),
  })

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <div>{error.message}</div>
  }

  const { products } = data

  return (
    <div className={productsStyles.Wr}>
      <h2>Наши продукты</h2>
      <div className={productsStyles.CardsWr}>
        {products.map(({ _id: id, ...props }) => <ProductCard key={id} id={id} {...props} />)}
      </div>
    </div>
  )
}
