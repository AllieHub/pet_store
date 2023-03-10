import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import addReviewStyles from './addReview.module.css'

export function Rating({ rating, setRating }) {
  const ratingStars = () => {
    const stars = []
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= 5; i++) {
      const star = i <= rating ? faStarSolid : faStar
      stars.push(<FontAwesomeIcon
        key={i}
        className={addReviewStyles.icon}
        icon={star}
        onClick={() => setRating(i)}
      />)
    }
    return stars
  }

  return (
    <div className={addReviewStyles.wr_stars}>
      {ratingStars().map((faIcon) => faIcon)}
    </div>
  )
}
