import { useSelector } from 'react-redux'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Loader } from '../../Loader/Loader'
import { getAuthStatusSelector } from '../../redux/slices/authSlice'
import { privateFetch } from '../../utils/privateFetch'
import { FavoritesProductsIcon } from '../ProductCard/FavoritesProductsIcon'
import delailStyles from './detailPageProduct.module.css'
import { Reviews } from './Reviews/Reviews'
import { EditButton } from './EditButton'
import { AddToCartButton } from '../../components/AddToCartButton/AddToCartButton'

export function DetailPageProduct() {
  const { id } = useParams()

  const isAuth = useSelector(getAuthStatusSelector)

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      navigate('/signin')
    }
  }, [isAuth])

  const url = `products/${id}`

  const {
    data, isLoading, isError, error,
  } = useQuery({
    queryKey: [url],
    queryFn: () => privateFetch(url),
  })

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <div className={delailStyles.error}>{error.message}</div>
  }

  // console.log({ data })
  const {
    pictures, name, price, wight, stock, description, discount,
  } = data

  const sale = String(price - (price / 100) * discount).replace('.', ',')

  return (
    <div className={delailStyles.wr}>
      <div className={delailStyles.wr_items}>
        <div className={delailStyles.img}>
          <img
            src={pictures}
            alt="Фото товара отсутствует"
          />
        </div>

        <div className={delailStyles.wr_description}>
          <h3>{name}</h3>

          <div className={delailStyles.discount}>
            {sale}
          &nbsp;₽
            {!!discount && (
              <span className={delailStyles.wr_price}>
                {price}
              </span>
            )}
          </div>

          <p>{wight}</p>
          <p>
            В наличии:&nbsp;
            {stock}
          &nbsp;шт.
          </p>
          <p>
            Описание товара:&nbsp;
            {description}
          </p>
        </div>

        <div className={delailStyles.wr_icon}>
          <FavoritesProductsIcon id={id} />
        </div>
      </div>

      <div className={delailStyles.buttons_wr}>
        <AddToCartButton productId={id} price={price} discount={discount} />
        <EditButton {...data} />

      </div>

      <Reviews productId={id} />

    </div>
  )
}
