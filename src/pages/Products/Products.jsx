import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
// import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Loader } from '../../Loader/Loader'
import { getAuthStatusSelector } from '../../redux/slices/authSlice'
import { privateFetch } from '../../utils/privateFetch'
import { ProductCard } from '../ProductCard/ProductCard'
import productsStyles from './Products.module.css'

export function Products() {
  const isAuth = useSelector(getAuthStatusSelector)

  // const search = useSelector(getSearchSelector)

  // const { data: products, isLoading, isError } = useQuery({
  //   queryKey: getQueryKey(search),
  //   queryFn: () => fetch(`https://api.react-learning.ru/products?query=${search}`)
  // .then((res) => res.json()),
  // })

  // if (isError) return <p>ОШИБКА</p>

  // if (isLoading) {
  //   return <Loader />
  // }

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      navigate('/signin')
    }
  }, [isAuth])

  const { data, isLoading } = useQuery({
    queryKey: ['ProductsFetch'],
    queryFn: () => privateFetch('products'),
  })

  if (isLoading) {
    return <Loader />
  }

  const { products } = data

  return (
    <div>
      <h2>Наши продукты</h2>
      <div className={productsStyles.CardsWr}>
        {products.map(({ _id: id, ...otherProps }) => <ProductCard key={id} {...otherProps} />)}
      </div>
    </div>
  )
}
