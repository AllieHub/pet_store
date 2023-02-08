import { useDispatch } from 'react-redux'
import { removeProductCart } from '../../../redux/slices/cartSlice'
import productCart from './productCart.module.css'

export function ProductCart(props) {
  const {
    pictures, name, price, wight, id, count, stock, isChecked,
  } = props

  const dispatch = useDispatch()

  const removeFromCartHandler = () => {
    dispatch(removeProductCart(id))
  }

  return (
    <div className={productCart.Wr}>
      <div className={productCart.input}>
        <input defaultChecked={isChecked} type="checkbox" id="scales" name="scales" />
        {/* <label htmlFor="scales">Scales</label> */}
      </div>
      <div className={productCart.productWr}>
        <img
          src={pictures}
          alt="Фото товара отсутствует"
          width="180"
        />

      </div>

      <div className={productCart.info}>
        <h3>{name}</h3>
        <p>{wight}</p>
        <p>
          В наличии:&nbsp;
          {stock}
          &nbsp;шт.
        </p>
        <div className={productCart.buttons}>
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

      <div className={productCart.count_buttons_wr}>
        <div className={productCart.count_buttons}>
          <button type="button"><i className={productCart.button_minus}>&minus;</i></button>
          <input
            className={productCart.count_input}
            value={count}
            max={stock}
            min={1}
            type="number"
          />

          <button type="button"><i className={productCart.button_plus}>&#43;</i></button>
        </div>
      </div>

      <div className={productCart.price}>
        <p>
          {price}
          &nbsp;₽
        </p>
      </div>

    </div>
  )
}
