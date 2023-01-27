import classNames from 'classnames'
import { Link, NavLink } from 'react-router-dom'
import petShopLogo from '../images/corgi_s.png'
import favorite from '../images/icon-favorite.png'
import shopCart from '../images/icon-shop-cart.png'
import search from '../images/icon-search.png'
import profile from '../images/icon-profile.png'
import { usePetStoreContext } from '../../contexts/PetStoreContextProvider'
import headerStyles from './header.module.css'

export function Header() {
  const { isAuth } = usePetStoreContext()

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

        <div className={headerStyles.search}>
          <img className={headerStyles.icon} src={search} alt="favorite" />
          <input
            className={headerStyles.input}
            placeholder="Найти"
            type="search"
            name=""
            maxLength="300"
          />
        </div>

        <div className={headerStyles.right_container}>
          <Link to="/">
            <img className={headerStyles.icon} src={favorite} alt="favorite" />
          </Link>

          <Link to="/">
            <img className={headerStyles.icon} src={shopCart} alt="shop-cart" />
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
