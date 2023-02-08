import { useDispatch } from 'react-redux'
import { addProductCart } from '../../redux/slices/cartSlice'
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
    <div className={ProductCardStyles.Wr}>
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
      </div>
      <p>{description}</p>
      <button
        type="button"
        onClick={addToCartHandler}
      >
        В корзину
      </button>
    </div>
  )
}
