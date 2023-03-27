import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import { Loader } from '../../Loader/Loader'
import { getFavoritesSelector } from '../../redux/slices/favoritesSlice'
import { FavoriteCard } from './FavoriteCard/FavoriteCard'
import favoritesStyles from './favorites.module.css'

export function Favorites() {
  const favorites = useSelector(getFavoritesSelector)

  if (favorites.length) {
    return (
      <div>
        <h2>Избранные товары</h2>
        <div className={favoritesStyles.wr_items}>
          {favorites.map((productId) => <FavoriteCard key={productId} productId={productId} />)}
        </div>
      </div>
    )
  }
  return (
    <div className={favoritesStyles.wr}>
      <h2>В избранном ничего нет</h2>
      <Link to="/products">
        <button type="button">Продукты</button>
      </Link>
    </div>
  )
}
