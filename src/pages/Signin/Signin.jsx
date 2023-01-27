import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signinValidator } from './validatorSignin'
import signinStyles from './signin.module.css'
import { usePetStoreContext } from '../../contexts/PetStoreContextProvider'

const initialValues = {
  email: '',
  password: '',
}

const onRequest = async (values) => {
  const response = await fetch('https://api.react-learning.ru/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  })
  const objData = await response.json()
  if (response.status >= 400) {
    throw new Error(objData.message || 'Неизвестная ошибка')
  }
  return objData
}

export function Signin() {
  const { mutate } = useMutation({ mutationFn: (values) => onRequest(values) })
  const { setToken, isAuth } = usePetStoreContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) {
      navigate('/products')
    }
  }, [isAuth])

  const onSubmitHandler = (values) => {
    mutate(values, {
      onSuccess: (data) => {
        setToken(data.token)
      },
      onError: (error) => {
        alert(error.message)
      },
    })
  }

  return (
    <div className={signinStyles.signin_wrapper}>
      <h1>Авторизоваться</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={signinValidator}
        onSubmit={onSubmitHandler}
      >
        <Form className={signinStyles.form_signin}>
          <Field name="email" placeholder="mail@mail.com" type="email" />
          <ErrorMessage component="p" className="error" name="email" />

          <Field name="password" placeholder="Введите пароль" type="password" />
          <ErrorMessage component="p" className="error" name="password" />

          <button type="submit">Войти</button>
        </Form>
      </Formik>
    </div>
  )
}
