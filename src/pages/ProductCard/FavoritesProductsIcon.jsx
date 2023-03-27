import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { faHeart as faHearSolid } from '@fortawesome/free-solid-svg-icons'
import { changeStatusFavourites, getFavoritesSelector } from '../../redux/slices/favoritesSlice'
import ProductCardStyles from './ProductCard.module.css'

export function FavoritesProductsIcon({ id }) {
  const favorites = useSelector(getFavoritesSelector)

  const dispatch = useDispatch()

  const changeStatusFavouritesHandler = () => {
    dispatch(changeStatusFavourites(id))
  }
  const isFavorite = !!favorites.find((productId) => productId === id)
  if (isFavorite) {
    return (
      <FontAwesomeIcon
        onClick={changeStatusFavouritesHandler}
        className={ProductCardStyles.icon}
        icon={faHearSolid}
      />

    )
  }
  return (
    <FontAwesomeIcon
      onClick={changeStatusFavouritesHandler}
      className={ProductCardStyles.icon}
      icon={faHeart}
    />
  )
}
