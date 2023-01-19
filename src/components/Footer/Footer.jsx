import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import footerStyles from './footer.module.css'

export function Footer() {
  return (
    <footer className={footerStyles.footer_wr}>
      <nav>
        <ul className={footerStyles.ul_list}>
          <li>
            <NavLink
              className={({ isActive }) => classNames({ [footerStyles.footerLink]: isActive })}
              to="/"
            >
              Главная страница
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => classNames({ [footerStyles.footerLink]: isActive })}
              to="/products"
            >
              Каталог
            </NavLink>
            <NavLink
              className={({ isActive }) => classNames({ [footerStyles.footerLink]: isActive })}
              to="#"
            >
              Акции
            </NavLink>
            <NavLink
              className={({ isActive }) => classNames({ [footerStyles.footerLink]: isActive })}
              to="#"
            >
              Новости
            </NavLink>
            <NavLink
              className={({ isActive }) => classNames({ [footerStyles.footerLink]: isActive })}
              to="#"
            >
              Отзывы
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
