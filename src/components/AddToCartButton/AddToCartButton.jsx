import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addProductCart, getCartSelector } from '../../redux/slices/cartSlice'

export function AddToCartButton({ productId, price, discount }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector(getCartSelector)
  const isAdded = !!cart.find((e) => e.id === productId)

  const addToCartHandler = () => {
    dispatch(addProductCart({ id: productId, price, discount }))
  }

  if (isAdded) {
    return (
      <button
        type="button"
        onClick={() => navigate('/cart')}
      >
        Перейти в корзину
      </button>
    )
  }
  return (
    <button
      type="button"
      onClick={addToCartHandler}
    >
      Добавить в корзину
    </button>
  )
}
