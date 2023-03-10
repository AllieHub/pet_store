// import { useQueryClient } from '@tanstack/react-query'
// import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import { useNavigate } from 'react-router-dom'
import { privateFetch } from '../../utils/privateFetch'

import addProductStyles from './addNewProduct.module.css'
import { validatorAddNewProduct } from './validatorAddNewProduct'

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

export function AddNewProduct() {
  const navigate = useNavigate()

  const backToProductsHandler = () => navigate(-1)

  const { mutate, isLoading } = useMutation({
    mutationFn: (body) => privateFetch('products', { method: 'POST', body }),
    onSuccess: (data) => {
      // eslint-disable-next-line no-underscore-dangle
      navigate(`/products/${data._id}`)
    },
    onError: (error) => {
      alert(error.message)
    },
  })

  return (
    <div className={addProductStyles.wr}>
      <h2>Добавить товар</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validatorAddNewProduct}
        onSubmit={mutate}
      >
        <Form className={addProductStyles.form_addProduct}>
          <div className={addProductStyles.field}>
            <p>Ссылка на фото товара</p>
            <Field name="pictures" placeholder="формат .jpg /.jpeg" type="text" />
            <ErrorMessage component="p" className="error" name="pictures" />
          </div>

          <div className={addProductStyles.field}>
            <p>Название товара</p>
            <Field name="name" placeholder="Название товара" type="text" />
            <ErrorMessage component="p" className="error" name="name" />
          </div>

          <div className={addProductStyles.field}>
            <p>Цена товара</p>
            <Field name="price" type="number" />
            <ErrorMessage component="p" className="error" name="price" />
          </div>

          <div className={addProductStyles.field}>
            <p>Скидка</p>
            <Field name="discount" type="number" />
            <ErrorMessage component="p" className="error" name="discount" />
          </div>

          <div className={addProductStyles.field}>
            <p>Вес товара/Сколько штук</p>
            <Field name="wight" placeholder="Вес товара/Сколько штук" type="text" />
            <ErrorMessage component="p" className="error" name="wight" />
          </div>

          <div className={addProductStyles.field}>
            <p>Описание товара</p>
            <Field name="description" placeholder="Описание товара" type="text" />
            <ErrorMessage component="p" className="error" name="description" />
          </div>

          <div className={addProductStyles.field}>
            <p>Количество товара в наличии</p>
            <Field name="stock" placeholder="Количество товара в наличии" type="number" />
            <ErrorMessage component="p" className="error" name="stock" />
          </div>

          <div className={addProductStyles.field_available}>
            <p>Есть ли в наличии (да/нет)</p>
            <Field name="available" type="checkbox" />
            <ErrorMessage component="p" className="error" name="available" />
          </div>

          <button type="submit" disabled={isLoading}>Добавить товар</button>
          <button type="button" disabled={isLoading} onClick={backToProductsHandler}>Отмена</button>
        </Form>
      </Formik>
    </div>
  )
}
