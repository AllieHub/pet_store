import classNames from 'classnames'
import { Link, NavLink } from 'react-router-dom'
import footerStyles from './footer.module.css'
import petShopLogo from '../images/corgi_s.png'
import instagram from '../images/icon-instagram.png'
import telegram from '../images/icon-telegram.png'
import viber from '../images/icon-viber.png'
import whatsapp from '../images/icon-whatsapp.png'
import vk from '../images/icon-vk.png'

export function Footer() {
  return (
    <footer className={footerStyles.footer_wr}>
      <nav>
        <ul className={footerStyles.ul_list}>
          <li>
            <Link
              className={({ isActive }) => classNames({ [footerStyles.footerLink]: isActive })}
              to="/"
            >
              <img src={petShopLogo} alt="" />
            </Link>
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

          <li>
            <NavLink
              className={({ isActive }) => classNames({ [footerStyles.footerLink]: isActive })}
              to="#"
            >
              Оплата и доставка
            </NavLink>
            <NavLink
              className={({ isActive }) => classNames({ [footerStyles.footerLink]: isActive })}
              to="#"
            >
              Часто спрашивают
            </NavLink>
            <NavLink
              className={({ isActive }) => classNames({ [footerStyles.footerLink]: isActive })}
              to="#"
            >
              Обратная связь
            </NavLink>
            <NavLink
              className={({ isActive }) => classNames({ [footerStyles.footerLink]: isActive })}
              to="#"
            >
              Контакты
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => classNames({ [footerStyles.footerLink]: isActive })}
              to="#"
            >
              Мы на связи
            </NavLink>
            <NavLink
              className={({ isActive }) => classNames({ [footerStyles.footerLink]: isActive })}
              to="#"
            >
              8(999) 99-99-99
            </NavLink>
            <NavLink
              className={({ isActive }) => classNames({ [footerStyles.footerLink]: isActive })}
              to="#"
            >
              petstore@mail.com
            </NavLink>
            <div className={footerStyles.social}>
              <a href="#1">
                <img className={footerStyles.icon_social} src={instagram} alt="instagram" />
              </a>
              <a href="#1">
                <img className={footerStyles.icon_social} src={telegram} alt="telegram" />
              </a>
              <a href="#1">
                <img className={footerStyles.icon_social} src={viber} alt="viber" />
              </a>
              <a href="#1">
                <img className={footerStyles.icon_social} src={whatsapp} alt="whatsapp" />
              </a>
              <a href="#1">
                <img className={footerStyles.icon_social} src={vk} alt="vk" />
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
