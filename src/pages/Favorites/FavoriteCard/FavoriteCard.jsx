import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux'
import { faHeartCircleMinus, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { useQuery } from '@tanstack/react-query'
import { changeStatusFavourites } from '../../../redux/slices/favoritesSlice'
import favoriteStyles from './favoriteCard.module.css'
import { addProductCart } from '../../../redux/slices/cartSlice'
import { privateFetch } from '../../../utils/privateFetch'

export function FavoriteCard({ productId }) {
  const dispatch = useDispatch()

  const changeStatusFavouritesHandler = () => {
    dispatch(changeStatusFavourites(productId))
  }

  const {
    data, isLoading, isError, error,
  } = useQuery({
    queryKey: [productId],
    queryFn: () => privateFetch(`products/${productId}`),
    onError: (err) => {
      if (err.status === 404) {
        changeStatusFavouritesHandler()
      }
    },
  })

  if (isLoading) {
    return <div>Идет загрузка</div>
  }

  if (isError) {
    return <div className={favoriteStyles.error}>{error.message}</div>
  }

  const {
    pictures, name, price, wight, stock, discount,
  } = data

  const addToCartHandler = () => {
    dispatch(addProductCart({ id: productId, price, discount }))
  }

  return (
    <div className={favoriteStyles.wr_card}>

      <div className={favoriteStyles.wr_icons}>

        <div className={classNames(favoriteStyles.wr_icon, favoriteStyles.icon_info)}>
          <Link
            className={favoriteStyles.detail_button}
            to={`/products/${productId}`}
          >
            <FontAwesomeIcon className={favoriteStyles.icon} icon={faCircleInfo} />
          </Link>
          <span className={favoriteStyles.clue}>Подробнее о товаре</span>
        </div>

        <div className={classNames(favoriteStyles.wr_icon, favoriteStyles.icon_heart)}>
          <FontAwesomeIcon
            onClick={changeStatusFavouritesHandler}
            className={favoriteStyles.icon}
            icon={faHeartCircleMinus}
          />
          <span className={favoriteStyles.clue}>Удалить из избранного</span>
        </div>

      </div>

      <div className={favoriteStyles.productWr}>
        <img
          src={pictures}
          alt="Фото товара отсутствует"
          width="180"
        />
      </div>

      <div className={favoriteStyles.info}>
        <h3>{name}</h3>
        <p>{wight}</p>
        <p>{price}</p>
        <p>
          В наличии:&nbsp;
          {stock}
          &nbsp;шт.
        </p>
        <div className={favoriteStyles.buttons}>
          <button
            type="button"
            onClick={addToCartHandler}
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  )
}
