import {
  Formik, Form, ErrorMessage, Field,
} from 'formik'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useMutation } from '@tanstack/react-query'
import { signupValidator } from './validatorSignup'
import signupStyles from './signup.module.css'
import { getAuthStatusSelector } from '../../redux/slices/authSlice'
import { publicFetch } from '../../utils/publicFetch'

const initialValues = {
  email: '',
  group: 'sm9',
  password: '',
}

export function Signup() {
  const isAuth = useSelector(getAuthStatusSelector)

  const { mutate } = useMutation({
    mutationFn: (body) => publicFetch('signup', { method: 'POST', body }),
  })

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) {
      navigate('/')
    }
  }, [isAuth])

  const submitHandler = (values) => {
    mutate(values, {
      onSuccess: () => {
        navigate('/signin')
      },
      onError: (error) => {
        alert(error.message)
      },
    })
  }

  return (
    <div className={signupStyles.signup_wrapper}>
      <h1>Зарегистрироваться</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={signupValidator}
        onSubmit={submitHandler}
      >
        <Form>
          <Field name="email" placeholder="mail@mail.com" type="email" />
          <ErrorMessage component="p" className="error" name="email" />

          <Field name="group" placeholder="sm9" type="text" disabled />
          <ErrorMessage component="p" className="error" name="group" />

          <Field name="password" placeholder="Введите пароль" type="text" />
          <ErrorMessage component="p" className="error" name="password" />

          <button type="submit">Зарегистрироваться</button>
        </Form>
      </Formik>
    </div>
  )
}
