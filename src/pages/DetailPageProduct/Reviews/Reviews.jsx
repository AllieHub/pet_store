/* eslint-disable camelcase */
import { useQuery } from '@tanstack/react-query'
import reviewsStyles from './reviews.module.css'
import { privateFetch } from '../../../utils/privateFetch'
import { Loader } from '../../../Loader/Loader'
import { ReviewItem } from './ReviewItem'
import { AddReview } from '../AddReview/AddReview'

export function Reviews({ productId }) {
  const url = `products/review/${productId}`

  const {
    data, isLoading, isError, error, refetch,
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

  if (data.length) {
    return (
      <div className={reviewsStyles.reviews_wr}>
        <AddReview productId={productId} refetch={refetch} />
        <h2>Отзывы о товаре</h2>
        {data.map(({ _id, ...props }) => (
          <ReviewItem
            key={_id}
            id={_id}
            {...props}
            productId={productId}
            refetch={refetch}
          />
        ))}
      </div>
    )
  }
  return (
    <div className={reviewsStyles.reviews_wr}>
      <h2>Отзывы о товаре</h2>
      <p>Отзывов еще нет, ваш отзыв может стать первым.</p>
      <AddReview productId={productId} refetch={refetch} />
    </div>

  )
}
