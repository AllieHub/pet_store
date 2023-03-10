import * as Yup from 'yup'

export const validatorAddReview = () => (
  Yup.object({
    text: Yup.string()
      .min(10, 'Должно быть не менее 10 символов')
      .max(200, 'Должно быть не более 200 символов')
      .required(''),
  })
)
