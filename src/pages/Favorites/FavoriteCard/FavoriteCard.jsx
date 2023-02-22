import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux'
import { faHeartCircleMinus } from '@fortawesome/free-solid-svg-icons'
import { changeStatusFavourites } from '../../../redux/slices/favoritesSlice'
import favoriteStyles from './favoriteCard.module.css'
import { addProductCart } from '../../../redux/slices/cartSlice'

export function FavoriteCard(props) {
  const {
    pictures, name, price, wight, stock, id,
  } = props

  const dispatch = useDispatch()
  const changeStatusFavouritesHandler = () => {
    dispatch(changeStatusFavourites(id))
  }

  const addToCartHandler = () => {
    dispatch(addProductCart(id))
  }
  return (
    <div className={favoriteStyles.wr_card}>
      <div className={favoriteStyles.wr_icon}>
        <FontAwesomeIcon
          onClick={changeStatusFavouritesHandler}
          className={favoriteStyles.icon}
          icon={faHeartCircleMinus}
        />
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
