import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import { signinValidator } from './validatorSignin'
import signinStyles from './signin.module.css'

const initialValues = {
  email: '',
  password: '',
}

export function Signin() {
  return (
    <div className={signinStyles.signin_wrapper}>
      <h1>Авторизоваться</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={signinValidator}
        onSubmit={(values) => {
          console.log({ values })
        }}
      >
        <Form className={signinStyles.form_signin}>
          <Field name="email" placeholder="mail@mail.com" type="email" />
          <ErrorMessage component="p" className="error" name="email" />

          <Field name="password" placeholder="Введите пароль" type="text" />
          <ErrorMessage component="p" className="error" name="password" />

          <button type="submit">Войти</button>
        </Form>
      </Formik>
    </div>
  )
}
