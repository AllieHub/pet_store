/* eslint-disable jsx-a11y/label-has-associated-control */
// import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
// import { useMemo } from 'react'
import { Link } from 'react-router-dom'
// import { Loader } from '../../Loader/Loader'
import { getCartSelector } from '../../redux/slices/cartSlice'
// import { privateFetch } from '../../utils/privateFetch'
import { ProductCart } from './ProductCart/ProductCart'
import cartStyles from './cart.module.css'
import { SelectAll } from './SelectAll'
import CorgiCart from '../../components/images/corgi_meditate.png'

export function Cart() {
  const cart = useSelector(getCartSelector)

  const getInfo = () => {
    const info = {
      totalCount: 0,
      totalDiscount: 0,
      totalPrice: 0,
    }
    cart.forEach((product) => {
      const {
        count, discount, price, isChecked,
      } = product

      const sale = (price / 100) * discount

      if (isChecked) {
        info.totalCount += count
        info.totalDiscount += (count * sale)
        info.totalPrice += (count * price)
      }
    })
    return info
  }

  const { totalCount, totalDiscount, totalPrice } = getInfo()

  if (cart.length) {
    return (
      <div className={cartStyles.cartWr}>
        <div className={cartStyles.cart_tabs}>
          <div>
            <h2>Корзина</h2>
            <p>
              Выбрано товаров:&nbsp;
              {totalCount}
          &nbsp;шт.
            </p>
          </div>

          <div className={cartStyles.tab_content}>

            <div className={cartStyles.tab_wr}>
              <SelectAll />

              <div className={cartStyles.products_items}>
                {cart.map((
                  {
                    id, count, isChecked, price, discount,
                  },
                ) => (
                  <ProductCart
                    key={id}
                    productId={id}
                    count={count}
                    isChecked={isChecked}
                    price={price}
                    discount={discount}
                  />
                ))}
              </div>
            </div>

            <div className={cartStyles.total_amount_wr}>
              <div className={cartStyles.total_amount}>
                <h2>Условия заказа</h2>
                <p>
                  Общая сумма:&nbsp;
                  <span>
                    {totalPrice}
                      &nbsp;₽
                  </span>
                </p>
                <p>
                  {'Цена с учетом скидок: '}
                  <span>
                    {totalPrice - totalDiscount}
                    &nbsp;₽
                  </span>
                </p>
                <button
                  type="button"
                >
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

    )
  }
  return (
    <div className="cartStyles.cart_empty">
      <h2>Корзина пуста</h2>
      <div>
        <Link to="/products">
          <button type="button">Продукты</button>
        </Link>

        <Link to="/favorites">
          <button type="button">Избранное</button>
        </Link>
      </div>
      <img src={CorgiCart} alt="" />
    </div>
  )
}
