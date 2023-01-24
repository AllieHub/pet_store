import {
  Formik, Form, ErrorMessage, Field,
} from 'formik'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signupValidator } from './validatorSignup'
import signupStyles from './signup.module.css'
import { useMutateSignup } from './useMutateSignup'
import { usePetStoreContext } from '../../contexts/PetStoreContextProvider'

const initialValues = {
  email: '',
  group: 'sm9',
  password: '',
}

export function Signup() {
  const navigate = useNavigate()
  const { mutateAsync, error, isError } = useMutateSignup()
  const { isAuth } = usePetStoreContext()

  useEffect(() => {
    if (isAuth) {
      navigate('/')
    }
  }, [isAuth])

  useEffect(() => {
    if (isError) {
      // eslint-disable-next-line no-alert
      alert(error.message)
    }
  }, [isError])

  const submitHandler = async (values) => {
    const response = await mutateAsync(values)
    console.log(response)
    navigate('/signin')
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
