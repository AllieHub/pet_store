import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import petShopLogo from '../images/corgi_s.png'
import headerStyles from './header.module.css'
import { getAuthStatusSelector } from '../../redux/slices/authSlice'
import { CartIcon } from './CartIcon/CartIcon'
import { FavouritesHeaderIcon } from './FavouritesIcon/FavouritesHeaderIcon'

export function Header() {
  const isAuth = useSelector(getAuthStatusSelector)

  const loginButtons = () => {
    if (isAuth) {
      return (
        <NavLink
          className={({ isActive }) => classNames({ [headerStyles.headerLink]: isActive })}
          to="/logout"
        >
          Выйти
        </NavLink>
      )
    }
    return (
      <>
        <NavLink
          className={({ isActive }) => classNames({ [headerStyles.headerLink]: isActive })}
          to="/signin"
        >
          Войти
        </NavLink>

        <NavLink
          className={({ isActive }) => classNames({ [headerStyles.headerLink]: isActive })}
          to="/signup"
        >
          Зарегистрироваться
        </NavLink>
      </>
    )
  }

  return (
    <header className={headerStyles.wr}>
      <nav className={headerStyles.nav}>
        <div className={headerStyles.logo}>
          <NavLink
            className={({ isActive }) => classNames({ [headerStyles.headerLink]: isActive })}
            to="/"
          >
            <img src={petShopLogo} alt="" />
            <p>На главную</p>
          </NavLink>
        </div>

        <div className={headerStyles.right_container}>

          <FavouritesHeaderIcon />

          <CartIcon />

          <NavLink to="user">
            <FontAwesomeIcon className={headerStyles.icon} icon={faUser} />
          </NavLink>

          {loginButtons()}
        </div>

      </nav>
    </header>
  )
}
