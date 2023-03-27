import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Loader } from '../../Loader/Loader'
import { getAuthStatusSelector } from '../../redux/slices/authSlice'
import { getSearchSelector } from '../../redux/slices/filterSlice'
import { privateFetch } from '../../utils/privateFetch'
import { FILTER_QUERY_NAME, getFilteredProducts } from '../Filters/constants'
import { ProductCard } from '../ProductCard/ProductCard'
import productsStyles from './ProductsList.module.css'
import { getQueryKey } from './utils'

export function ProductList() {
  const isAuth = useSelector(getAuthStatusSelector)

  const search = useSelector(getSearchSelector)

  const navigate = useNavigate()

  const [searchParams] = useSearchParams()

  const currentFilterNameFromQuery = searchParams.get(FILTER_QUERY_NAME)

  useEffect(() => {
    if (!isAuth) {
      navigate('/signin')
    }
  }, [isAuth])

  const {
    data = [], isLoading, isError, error,
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

  // const { products } = data
  const products = getFilteredProducts(data.products, currentFilterNameFromQuery)
  if (products.length) {
    return (
      <div className={productsStyles.wr}>
        <div>
          <button className={productsStyles.wr_button} type="button">
            <Link to="/addnewproduct">
              Добавить свой товар
            </Link>
          </button>

          <h2>Наши товары</h2>
          <div className={productsStyles.wr_cards}>
            {products.map(({ _id: id, ...props }) => <ProductCard key={id} id={id} {...props} />)}
          </div>
        </div>
      </div>
    )
  }
  return (
    <h3>По вашему запросу ничего не найдено</h3>
  )
}
