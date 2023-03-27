import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import CartIconStyles from './cartIcon.module.css'
import { getCartSelector } from '../../../redux/slices/cartSlice'

export function CartIcon() {
  const cart = useSelector(getCartSelector)

  return (
    <NavLink
      to="/cart"
      className={
        ({ isActive }) => classNames(
          CartIconStyles.wr_span,
          { [CartIconStyles.headerLink]: isActive },
        )
      }
    >
      <FontAwesomeIcon className={CartIconStyles.icon} icon={faCartShopping} />
      <span>{cart.length}</span>
    </NavLink>
  )
}
