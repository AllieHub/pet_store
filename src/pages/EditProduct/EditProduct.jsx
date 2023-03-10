/* eslint-disable no-underscore-dangle */
import { useMutation } from '@tanstack/react-query'
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import { privateFetch } from '../../utils/privateFetch'
import { validatorAddNewProduct } from '../AddProduct/validatorAddNewProduct'
import editProductStyles from './editProduct.module.css'

const initialValues = {
  pictures: '',
  name: '',
  price: 0,
  discount: 0,
  wight: '',
  description: '',
  stock: 0,
  available: true,
}

export function EditProduct({ data, onCancel }) {
  const { mutate, isLoading } = useMutation({
    mutationFn: (body) => privateFetch(
      'products',
      { method: 'PATCH', body: { ...body, _id: data._id } },
    ),
    onSuccess: () => {
      alert('Товар успешно изменен')
      onCancel()
    },
    onError: (error) => {
      alert(error.message)
    },
  })

  return (
    <div className={editProductStyles.wr}>
      <h2>Редактировать товар</h2>
      <Formik
        initialValues={{ ...initialValues, ...data }}
        validationSchema={validatorAddNewProduct}
        onSubmit={mutate}
      >
        <Form className={editProductStyles.form_addProduct}>
          <div className={editProductStyles.field}>
            <p>Ссылка на фото товара</p>
            <Field name="pictures" placeholder="формат .jpg /.jpeg" type="text" />
            <ErrorMessage component="p" className="error" name="pictures" />
          </div>

          <div className={editProductStyles.field}>
            <p>Название товара</p>
            <Field name="name" placeholder="Название товара" type="text" />
            <ErrorMessage component="p" className="error" name="name" />
          </div>

          <div className={editProductStyles.field}>
            <p>Цена товара</p>
            <Field name="price" type="number" />
            <ErrorMessage component="p" className="error" name="price" />
          </div>

          <div className={editProductStyles.field}>
            <p>Скидка</p>
            <Field name="discount" type="number" />
            <ErrorMessage component="p" className="error" name="discount" />
          </div>

          <div className={editProductStyles.field}>
            <p>Вес товара/Сколько штук</p>
            <Field name="wight" placeholder="Вес товара/Сколько штук" type="text" />
            <ErrorMessage component="p" className="error" name="wight" />
          </div>

          <div className={editProductStyles.field}>
            <p>Описание товара</p>
            <Field name="description" placeholder="Описание товара" type="text" />
            <ErrorMessage component="p" className="error" name="description" />
          </div>

          <div className={editProductStyles.field}>
            <p>Количество товара в наличии</p>
            <Field name="stock" placeholder="Количество товара в наличии" type="number" />
            <ErrorMessage component="p" className="error" name="stock" />
          </div>

          <div className={editProductStyles.field_available}>
            <p>Есть ли в наличии (да/нет)</p>
            <Field name="available" type="checkbox" />
            <ErrorMessage component="p" className="error" name="available" />
          </div>

          <button type="submit" disabled={isLoading}>Редактировать товар</button>
          <button type="button" disabled={isLoading} onClick={onCancel}>Отмена</button>
        </Form>
      </Formik>
    </div>
  )
}
