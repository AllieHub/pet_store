/* eslint-disable camelcase */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import reviewsStyles from './reviews.module.css'

export function ReviewItem(props) {
  const {
    author, created_at, rating, text, updated_at,
  } = props
  // console.log({ props })

  const raitingStars = () => {
    const rows = []
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < rating; i++) {
      rows.push(<FontAwesomeIcon className={reviewsStyles.icon} icon={faStarSolid} />)
    }
    return rows
  }

  return (
    <div className={reviewsStyles.wr}>

      <div className={reviewsStyles.info}>

        <div className={reviewsStyles.author}>
          <h3>Автор:&nbsp;</h3>
          <p>{author.name}</p>
        </div>

        <div className={reviewsStyles.raiting}>
          <h3>Рейтинг:&nbsp;</h3>
          {raitingStars()}
        </div>

      </div>

      <div className={reviewsStyles.info}>
        <div className={reviewsStyles.created}>
          <h3>Создано:&nbsp;</h3>
          <p>{created_at}</p>
        </div>

        <div className={reviewsStyles.updated}>
          <h3>Обновлено:&nbsp;</h3>
          <p>{updated_at}</p>
        </div>
      </div>

      <div className={reviewsStyles.review}>
        <h3>Отзыв:&nbsp;</h3>
        <p>{text}</p>
      </div>

    </div>
  )
}
