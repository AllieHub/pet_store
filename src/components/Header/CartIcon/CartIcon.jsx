import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CartIconStyles from './cartIcon.module.css'
import shopCart from '../../images/icon-shop-cart.png'
import { getCartSelector } from '../../../redux/slices/cartSlice'

export function CartIcon() {
  const cart = useSelector(getCartSelector)
  //   console.log(useSelector(getCartSelector))

  return (
    <Link to="/cart" className={CartIconStyles.wr_span}>
      <img className={CartIconStyles.icon} src={shopCart} alt="shop-cart" />
      <span>{cart.length}</span>
    </Link>
  )
}
