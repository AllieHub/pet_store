// import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import mainStyles from './main.module.css'

export function Main() {
  return (
    <div className={mainStyles.main_page}>
      <h3>
        Добро пожаловать в наш интернет-магазин!
        <br />
        Здесь вы найдете все необходимое для своего любимого питомца
      </h3>
      <nav>
        <ul>
          <li>
            <Link to="/products">
              Товары
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
