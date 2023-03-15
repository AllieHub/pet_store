import { ErrorMessage, Field } from 'formik'
import addReviewStyles from '../addReview.module.css'
import { TextError } from './TextError'

export function Textarea(props) {
  const { label, name, ...rest } = props
  return (
    <div className={addReviewStyles.form_control}>
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}
