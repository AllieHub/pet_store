import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { Loader } from '../../Loader/Loader'
import { getCartSelector } from '../../redux/slices/cartSlice'
import { privateFetch } from '../../utils/privateFetch'
import { ProductCart } from './ProductCart/ProductCart'
import cartStyles from './cart.module.css'

export function Cart() {
  const cart = useSelector(getCartSelector)

  const { data: products, isLoading } = useQuery({
    queryKey: ['cart', cart],
    queryFn: () => Promise.all(cart.map(
      (product) => privateFetch(`products/${product.id}`),
    )),
  })

  console.log(cart)

  if (isLoading) {
    return <Loader />
  }
  if (cart.length) {
    return (
      <div className={cartStyles.cartWr}>
        <div className={cartStyles.cart_tabs}>
          <div>
            <h2>Корзина</h2>
            <p>
              {cart.length}
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
                    Общая сумма:
                    <span />
                  </p>
                  <p>
                    Цена с учетом скидок:
                    <span />
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
    </div>

  )
}
