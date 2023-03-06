/* eslint-disable camelcase */
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import reviewsStyles from './reviews.module.css'
import { privateFetch } from '../../../utils/privateFetch'
import { Loader } from '../../../Loader/Loader'
import { ReviewItem } from './ReviewItem'

export function Reviews() {
  // const {
  //   author, created_at, rating, text, updated_at,
  // } = props
  // console.log({ props })

  const { id } = useParams()

  const url = `products/review/${id}`

  const {
    data, isLoading, isError, error,
  } = useQuery({
    queryKey: [url],
    queryFn: () => privateFetch(url),
  })

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <div className={reviewsStyles.error}>{error.message}</div>
  }

  return (
    <div className={reviewsStyles.reviews_wr}>
      <h2>Отзывы о товаре</h2>
      {data.map(({ _id, ...props }) => <ReviewItem key={_id} id={_id} {...props} />)}
    </div>
  )
}
