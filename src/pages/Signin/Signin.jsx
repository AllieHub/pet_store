import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signinValidator } from './validatorSignin'
import signinStyles from './signin.module.css'
import { publicFetch } from '../../utils/publicFetch'
import {
  getAuthStatusSelector, setGroup, setToken, setUserId,
} from '../../redux/slices/authSlice'

const initialValues = {
  email: '',
  password: '',
}

export function Signin() {
  const { mutate } = useMutation({
    mutationFn: (body) => publicFetch('signin', { method: 'POST', body }),
  })

  const isAuth = useSelector(getAuthStatusSelector)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) {
      navigate('/products')
    }
  }, [isAuth])

  const onSubmitHandler = (values) => {
    mutate(values, {
      onSuccess: (data) => {
        dispatch(setToken(data.token))
        dispatch(setGroup(data.data.group))
        // eslint-disable-next-line no-underscore-dangle
        dispatch(setUserId(data.data._id))
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
