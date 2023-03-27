/* eslint-disable react/destructuring-assignment */
import addReviewStyles from '../addReview.module.css'

export function TextError(props) {
  return (
    <div className={addReviewStyles.error}>
      {props.children}
    </div>
  )
}
