import classNames from 'classnames'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import petShopLogo from '../images/corgi_s.png'
import favorite from '../images/icon-favorite.png'
import shopCart from '../images/icon-shop-cart.png'
import profile from '../images/icon-profile.png'
import headerStyles from './header.module.css'
import { Search } from '../Search/Search'
import { getAuthStatusSelector } from '../../redux/slices/authSlice'

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
          <Link
            className={({ isActive }) => classNames({ [headerStyles.headerLink]: isActive })}
            to="/"
          >
            <img src={petShopLogo} alt="" />
            <p>На главную</p>
          </Link>
        </div>

        <Search />

        <div className={headerStyles.right_container}>
          <Link to="/">
            <img className={headerStyles.icon} src={favorite} alt="favorite" />
          </Link>

          <Link to="/cart" className={headerStyles.wr_span}>
            <img className={headerStyles.icon} src={shopCart} alt="shop-cart" />
            <span />
          </Link>

          <Link to="/">
            <img className={headerStyles.icon} src={profile} alt="shop-cart" />
          </Link>

          {loginButtons()}
        </div>

      </nav>
    </header>
  )
}
