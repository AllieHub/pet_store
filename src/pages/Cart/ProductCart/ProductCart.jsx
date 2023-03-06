import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { Modal } from '../../../components/Modal/Modal'
import {
  addProductCart, changeIsChecked, decrementProductCart, removeProductCart,
}
  from '../../../redux/slices/cartSlice'
import productCartStyles from './productCart.module.css'
import { FavoritesProductsIcon } from '../../ProductCard/FavoritesProductsIcon'

export function ProductCart(props) {
  const {
    pictures, name, price, wight, id, count, stock, isChecked,
  } = props

  const [isDeleteModalOpen, setisDeleteModalOpen] = useState(false)

  const closeDeleteModalHandler = () => {
    setisDeleteModalOpen(false)
  }

  const openDeleteModalHandler = () => {
    setisDeleteModalOpen(true)
  }

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
    <>
      <Modal isOpen={isDeleteModalOpen} closeHandler={closeDeleteModalHandler}>
        <p>
          Вы уверены, что хотите удалить
          {' '}
          <b>
            &quot;
            {name}
            &quot;
          </b>
          ?
        </p>
        <div className={productCartStyles.wr_modal_buttons}>
          <button onClick={closeDeleteModalHandler} type="button">Нет</button>
          <button onClick={removeFromCartHandler} type="button">Удалить</button>
        </div>
      </Modal>

      <div className={productCartStyles.wr}>
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
              className={classNames(productCartStyles.icons_button, productCartStyles.icon_trash)}
              type="button"
              onClick={openDeleteModalHandler}
            >
              <FontAwesomeIcon className={productCartStyles.icon} icon={faTrashCan} />
              <span className={productCartStyles.clue}>Удалить товар из корзины</span>
            </button>
            <button
              className={classNames(productCartStyles.icons_button, productCartStyles.icon_heart)}
              type="button"
            >
              <FavoritesProductsIcon id={id} />
              <span className={productCartStyles.clue}>Добавить в избранное</span>
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
    </>

  )
}
