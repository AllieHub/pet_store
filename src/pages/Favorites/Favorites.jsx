import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Loader } from '../../Loader/Loader'
import { getFavoritesSelector } from '../../redux/slices/favoritesSlice'
import { privateFetch } from '../../utils/privateFetch'
import { FavoriteCard } from './FavoriteCard/FavoriteCard'
import favoritesStyles from './favorites.module.css'

export function Favorites() {
  const favorites = useSelector(getFavoritesSelector)

  const queryKey = useMemo(() => favorites.reduce(
    (prevState, { id }) => prevState + id,
    'favorites',
  ), [favorites])

  const {
    data: favoriteProducts, isLoading, isError, error,
  } = useQuery({
    queryKey: [queryKey],
    queryFn: () => Promise.all(favorites.map(
      (productId) => privateFetch(`products/${productId}`),
    )),
  })

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <div className={favoritesStyles.error}>{error.message}</div>
  }
  if (favorites.length) {
    return (
      <div>
        <h2>Избранные товары</h2>
        <div className={favoritesStyles.wr_items}>
          {favoriteProducts.map((
            { _id: id, ...props },
          ) => <FavoriteCard key={id} id={id} {...props} />)}
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
