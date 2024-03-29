import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import { getFavoritesSelector } from '../../../redux/slices/favoritesSlice'
import favouritesStyles from './favouritesIcon.module.css'

export function FavouritesHeaderIcon() {
  const favorites = useSelector(getFavoritesSelector)

  if (favorites.length) {
    return (
      <NavLink
        to="favorites"
        className={
          ({ isActive }) => classNames(
            favouritesStyles.wr_span,
            { [favouritesStyles.headerLink]: isActive },
          )
        }
      >
        <FontAwesomeIcon className={favouritesStyles.icon} icon={faHeartSolid} />
      </NavLink>
    )
  }
  return (
    <NavLink to="favorites">
      <FontAwesomeIcon className={favouritesStyles.icon} icon={faHeart} />
    </NavLink>
  )
}
