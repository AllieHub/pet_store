import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import headerStyles from './header.module.css'

export function Header() {
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
        </ul>
      </nav>
    </header>
  )
}
