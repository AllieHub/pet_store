import * as Yup from 'yup'

export const validatorAddNewProduct = () => (
  Yup.object({
    pictures: Yup.string(),
    name: Yup.string().required('Необходимо указать название товара'),
    price: Yup.number().required('Необходимо указать цену товара'),
    discount: Yup.number(),
    wight: Yup.string(),
    description: Yup.string().required('Необходимо указать описание товара'),
    stock: Yup.number(),
    available: Yup.boolean(),
  })
)
