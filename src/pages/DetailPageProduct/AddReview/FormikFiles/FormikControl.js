import { Input } from './Input'
import { Textarea } from './Textarea'

export function FormikControl(props) {
  const { control, ...rest } = props
  switch (control) {
  case 'input':
    return <Input {...rest} />
  case 'textarea': return <Textarea {...rest} />
  case 'select':
  case 'radio':
  case 'checkbox':
  case 'date':
  default:
    return null
  }
}
