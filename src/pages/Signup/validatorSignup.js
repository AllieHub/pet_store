import * as Yup from 'yup'

export const signupValidator = () => (
  Yup.object({
    email: Yup.string()
      .email('Введен некоректный email адрес')
      .required('Обязательное поле'),
    group: Yup.string()
      .max(3, 'sm9')
      .required('Обязательное поле'),
    password: Yup.string()
      .min(5, 'Не менее пяти символов')
      .max(10, 'Не более восьми символов')
      .required('Обязательное поле'),
  })
)
