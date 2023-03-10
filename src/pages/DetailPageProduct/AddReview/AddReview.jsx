/* eslint-disable no-underscore-dangle */
import { useMutation } from '@tanstack/react-query'
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import { useState } from 'react'
import { privateFetch } from '../../../utils/privateFetch'
// import { privateFetch } from '../../../utils/privateFetch'
import addReviewStyles from './addReview.module.css'
import { Rating } from './Rating'
import { validatorAddReview } from './validatorAddReview'

const initialValues = {
  text: '',
}

export function AddReview({ productId, refetch }) {
  const [rating, setRating] = useState(5)

  // eslint-disable-next-line no-unused-vars
  const { mutate, isLoading } = useMutation({
    mutationFn: (body) => privateFetch(
      `products/review/${productId}`,
      { method: 'POST', body },
    ),
    onSuccess: () => {
      alert('Отзыв успешно добавлен')
      refetch()
    },
    onError: (error) => {
      alert(error.message)
    },
  })

  const onSubmitHandler = (value) => {
    mutate({ ...value, rating })
  }

  return (
    <div className={addReviewStyles.wr}>
      <h2>Добавить отзыв:</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validatorAddReview}
        onSubmit={onSubmitHandler}
      >
        <Form className={addReviewStyles.wr_form}>
          <div className={addReviewStyles.field}>
            <p>Рейтинг</p>
            <Rating rating={rating} setRating={setRating} />
          </div>

          <div className={addReviewStyles.field}>
            <p>Текст отзыва:</p>
            {/* <textarea  name="text" placeholder="Текст вашего отзыва здесь..."></textarea> */}
            <Field name="text" placeholder="Текст вашего отзыва здесь..." type="text" rows="6" />
            <ErrorMessage component="p" className="error" name="text" />
          </div>
          <div className={addReviewStyles.wr_buttons}>
            <button disabled={isLoading} type="submit">Добавить отзыв</button>
            {/* <button type="button" onClick={onCancel}>Отмена</button> */}
          </div>
        </Form>
      </Formik>
    </div>
  )
}
