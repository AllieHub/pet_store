import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import { Loader } from '../../Loader/Loader'
import { getCartSelector } from '../../redux/slices/cartSlice'
import { privateFetch } from '../../utils/privateFetch'
import { ProductCart } from './ProductCart/ProductCart'
import cartStyles from './cart.module.css'

export function Cart() {
  const cart = useSelector(getCartSelector)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['cart', cart],
    queryFn: () => Promise.all(cart.map(
      (product) => privateFetch(`products/${product.id}`),
    )),
  })

  const products = useMemo(() => data?.map((product) => {
    // eslint-disable-next-line no-underscore-dangle
    const { count, isChecked } = cart.find(({ id }) => id === product._id)
    return { ...product, count, isChecked }
  }) || [], [data, cart])

  const getInfo = () => {
    const info = {
      count: 0,
      discount: 0,
      totalPrice: 0,
    }
    products?.forEach((product) => {
      const { count, discount, price } = product
      info.count += count
      info.discount += (count * discount)
      info.totalPrice += (count * price)
    })
    return info
  }
  const { count, discount, totalPrice } = useMemo(getInfo, [products])
  // const getCount = () => {
  //   let count = 0
  //   cart.forEach((e) => {
  //     count += e.count
  //   })
  //   return count
  // }

  // const getTotalPrice = () => {
  //   let totalPrice = 0
  //   cart.forEach((e) => {
  //     totalPrice += (e.count * e.price)
  //   })
  //   return totalPrice
  // }
  // const getDiscount = () => {
  //   let discount = 0
  //   cart.forEach((e) => {
  //     discount += (e.count * e.discount)
  //   })
  //   return discount
  // }

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <div>Error</div>
  }

  if (cart.length) {
    return (
      <div className={cartStyles.cartWr}>
        <div className={cartStyles.cart_tabs}>
          <div>
            <h2>Корзина</h2>
            <p>
              Количество товаров:&nbsp;
              {count}
          &nbsp;шт.
            </p>
          </div>

          <div className={cartStyles.tab_content}>

            <div className={cartStyles.products_list}>
              <div className={cartStyles.choose_all}>
                <div />
                <input type="checkbox" id="scales" name="scales" />
                <p>Выбрать все</p>
              </div>
              <div className={cartStyles.products_items}>
                {products.map((
                  { _id: id, ...props },
                ) => <ProductCart key={id} id={id} {...props} />)}
              </div>
            </div>

            <div className={cartStyles.total_amount_wr}>
              <div className={cartStyles.total_amount}>
                <div className={cartStyles.total_amount_content}>
                  <h2>Условия заказа</h2>
                  <p>
                    Общая сумма:&nbsp;
                    <span>
                      {totalPrice}
                      &nbsp;₽
                    </span>
                  </p>
                  <p>
                    Цена с учетом скидок:&nbsp;
                    <span>
                      {totalPrice - discount}
                    &nbsp;₽
                    </span>
                  </p>

                </div>
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
    <div>
      <h2>Корзина пуста</h2>
      <button
        type="button"
      >
        Продукты
      </button>
      <button
        type="button"
      >
        Избранное
      </button>
    </div>

  )
}
