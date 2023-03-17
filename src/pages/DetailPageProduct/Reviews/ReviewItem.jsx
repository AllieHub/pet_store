/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import reviewsStyles from './reviews.module.css'
import { DeleteReview } from './DeleteReview'

export function ReviewItem(props) {
  const {
    author, created_at, rating, text, updated_at, productId, id, refetch,
  } = props
  // console.log({ props })

  const ratingStars = () => {
    const stars = []
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < rating; i++) {
      stars.push(<FontAwesomeIcon className={reviewsStyles.icon} icon={faStarSolid} />)
    }
    return stars
  }

  return (
    <div className={reviewsStyles.wr}>

      <div className={reviewsStyles.info}>

        <div className={reviewsStyles.details}>
          <div className={reviewsStyles.author}>
            <h3>Автор:&nbsp;</h3>
            <p>{author.name}</p>
          </div>

          <div className={reviewsStyles.raiting}>
            <h3>Рейтинг:&nbsp;</h3>
            {ratingStars()}
          </div>
        </div>

        <div className={reviewsStyles.edit}>
          <DeleteReview
            productId={productId}
            reviewId={id}
            authorId={author._id}
            refetch={refetch}
          />
        </div>

      </div>

      <div className={reviewsStyles.dates}>
        <div className={reviewsStyles.created}>
          <h3>Создано:&nbsp;</h3>
          <p>{new Date(created_at).toUTCString()}</p>
        </div>

        <div className={reviewsStyles.updated}>
          <h3>Обновлено:&nbsp;</h3>
          <p>{new Date(updated_at).toUTCString()}</p>
        </div>
      </div>

      <div className={reviewsStyles.review}>
        <h3>Отзыв:&nbsp;</h3>
        <p>{text}</p>
      </div>

    </div>
  )
}
