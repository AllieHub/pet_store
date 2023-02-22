import { useDispatch } from 'react-redux'
import { addProductCart } from '../../redux/slices/cartSlice'
import { FavoritesProductsIcon } from './FavoritesProductsIcon'
import ProductCardStyles from './ProductCard.module.css'

export function ProductCard(props) {
  const {
    pictures, name, price, wight, description, stock, id,
  } = props

  const dispatch = useDispatch()

  const addToCartHandler = () => {
    dispatch(addProductCart(id))
  }

  return (
    <div className={ProductCardStyles.wr}>
      <div className={ProductCardStyles.wr_icon}>
        <FavoritesProductsIcon id={id} />
      </div>

      <div>
        <img
          src={pictures}
          alt="Фото товара отсутствует"
          width="180"
        />
        <h3>{name}</h3>
      </div>

      <div>
        <p>
          {price}
          &nbsp;₽
        </p>
        <p>{wight}</p>
        <p>
          {stock}
          &nbsp;шт.
        </p>
        <p>{description}</p>
      </div>

      <div className={ProductCardStyles.buttons_wr}>

        <button
          type="button"
          onClick={addToCartHandler}
        >
          Добавить в корзину
        </button>
      </div>

    </div>
  )
}
