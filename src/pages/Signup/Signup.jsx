import {
  Formik, Form, ErrorMessage, Field,
} from 'formik'
import { signupValidator } from './validatorSignup'
import signupStyles from './signup.module.css'

const initialValues = {
  email: '',
  group: 'sm9',
  password: '',
}

export function Signup() {
  return (
    <div className={signupStyles.signup_wrapper}>
      <h1>Зарегистрироваться</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={signupValidator}
        onSubmit={(values) => {
          console.log({ values })
        }}
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
