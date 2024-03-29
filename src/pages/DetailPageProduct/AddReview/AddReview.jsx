/* eslint-disable no-underscore-dangle */
import { useMutation } from '@tanstack/react-query'
import {
  ErrorMessage, Form, Formik,
} from 'formik'
import { useState } from 'react'
import { privateFetch } from '../../../utils/privateFetch'
import addReviewStyles from './addReview.module.css'
import { FormikControl } from './FormikFiles/FormikControl'
import { Rating } from './Rating'
import { validatorAddReview } from './validatorAddReview'

const initialValues = {
  text: '',
}

export function AddReview({ productId, refetch }) {
  const [rating, setRating] = useState(5)

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

  const onSubmitHandler = (value, { resetForm }) => {
    mutate({ ...value, rating })
    resetForm({ values: '' })
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
            {/* <textarea  name="text" placeholder="Текст вашего отзыва здесь..."></textarea> */}
            <FormikControl
              control="textarea"
              name="text"
              placeholder="Текст вашего отзыва здесь..."
            />
            <ErrorMessage component="p" className="error" name="text" />
          </div>
          <div className={addReviewStyles.wr_buttons}>
            <button disabled={isLoading} type="submit">Добавить отзыв</button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
