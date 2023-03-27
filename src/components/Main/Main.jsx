// import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import mainStyles from './main.module.css'
import Corgi from '../images/corgi_with_food.png'

export function Main() {
  return (
    <div className={mainStyles.main_page}>
      <h3>
        Добро пожаловать в наш интернет-магазин!
        <br />
        Здесь вы найдете все необходимое для своего любимого питомца
      </h3>

      <Link className={mainStyles.link} to="/products">
        <img src={Corgi} alt="" />
        На страницу с товарами &#10149;
      </Link>

    </div>
  )
}
