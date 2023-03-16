import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FavoritesProductsIcon } from './FavoritesProductsIcon'
import ProductCardStyles from './ProductCard.module.css'
import { AddToCartButton } from '../../components/AddToCartButton/AddToCartButton'

export function ProductCard(props) {
  const {
    pictures, name, price, wight, stock, id, discount,
  } = props

  return (
    <div className={ProductCardStyles.wr}>
      <div className={ProductCardStyles.wr_icon}>
        <FavoritesProductsIcon id={id} />
      </div>

      <div className={ProductCardStyles.h3}>
        <img
          src={pictures}
          alt="Фото товара отсутствует"
          width="180"
        />
        <h3>{name}</h3>
      </div>

      <div>
        <p>
          {price}
          &nbsp;₽
        </p>
        <p>{wight}</p>
        <p>
          {stock}
          &nbsp;шт.
        </p>
      </div>

      <div className={ProductCardStyles.buttons_wr}>
        <AddToCartButton productId={id} price={price} discount={discount} />

        <Link
          className={ProductCardStyles.detail_button}
          to={id}
        >
          <FontAwesomeIcon className={ProductCardStyles.icon} icon={faCircleInfo} />
          <p>Подробнее...</p>
        </Link>

      </div>

    </div>
  )
}
