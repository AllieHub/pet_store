import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import { usePetStoreContext } from '../../contexts/PetStoreContextProvider'
import headerStyles from './header.module.css'

export function Header() {
  const { isAuth } = usePetStoreContext()

  const loginButtons = () => {
    if (isAuth) {
      return (
        <li>
          <NavLink
            className={({ isActive }) => classNames({ [headerStyles.headerLink]: isActive })}
            to="/logout"
          >
            Выйти
          </NavLink>
        </li>
      )
    }
    return (
      <>
        <li>
          <NavLink
            className={({ isActive }) => classNames({ [headerStyles.headerLink]: isActive })}
            to="/signin"
          >
            Войти
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => classNames({ [headerStyles.headerLink]: isActive })}
            to="/signup"
          >
            Зарегистрироваться
          </NavLink>
        </li>
      </>
    )
  }

  return (
    <header className={headerStyles.header_wr}>
      <nav>
        <ul className={headerStyles.ul_list}>
          <li>
            <NavLink
              className={({ isActive }) => classNames({ [headerStyles.headerLink]: isActive })}
              to="/"
            >
              Главная страница
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => classNames({ [headerStyles.headerLink]: isActive })}
              to="/products"
            >
              Товары
            </NavLink>
          </li>

          {loginButtons()}
        </ul>
      </nav>
    </header>
  )
}
