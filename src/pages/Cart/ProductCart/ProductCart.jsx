import { useDispatch } from 'react-redux'
import {
  addProductCart, changeIsChecked, decrementProductCart, removeProductCart,
}
  from '../../../redux/slices/cartSlice'
// import { FavoritesProductsIcon } from '../../ProductCard/FavoritesProductsIcon'
import productCartStyles from './productCart.module.css'

export function ProductCart(props) {
  const {
    pictures, name, price, wight, id, count, stock, isChecked,
  } = props

  const dispatch = useDispatch()

  const removeFromCartHandler = () => {
    dispatch(removeProductCart(id))
  }
  const incrementProductHandler = () => {
    if (count < stock) {
      dispatch(addProductCart(id))
    }
  }
  const decrementProductHandler = () => {
    dispatch(decrementProductCart(id))
  }

  const checkedHandler = () => {
    dispatch(changeIsChecked({ id, isChecked: !isChecked }))
  }

  return (
    <div className={productCartStyles.Wr}>
      <div className={productCartStyles.input}>
        <input checked={isChecked} onChange={checkedHandler} type="checkbox" />
      </div>
      <div className={productCartStyles.productWr}>
        <img
          src={pictures}
          alt="Фото товара отсутствует"
          width="180"
        />

      </div>

      <div className={productCartStyles.info}>
        <h3>{name}</h3>
        <p>{wight}</p>
        <p>
          В наличии:&nbsp;
          {stock}
          &nbsp;шт.
        </p>
        <div className={productCartStyles.buttons}>
          <button
            type="button"
            onClick={removeFromCartHandler}
          >
            Удалить из корзины
          </button>
          <button
            type="button"
          >
            Добавить в избранное
          </button>
        </div>
      </div>

      <div className={productCartStyles.count_buttons_wr}>
        <div className={productCartStyles.count_buttons}>
          <button type="button" onClick={decrementProductHandler}>
            <i className={productCartStyles.button_minus}>&minus;</i>
          </button>
          <input
            readOnly
            className={productCartStyles.count_input}
            value={count}
            max={stock}
            min={1}
            type="number"
          />

          <button type="button" onClick={incrementProductHandler}>
            <i className={productCartStyles.button_plus}>&#43;</i>
          </button>
        </div>
      </div>

      <div className={productCartStyles.price}>
        <p>
          {price}
          &nbsp;₽
        </p>
      </div>

    </div>
  )
}
