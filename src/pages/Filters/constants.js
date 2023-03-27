const LOW_PRICE = 'LOW_PRICE'
const HIGH_PRICE = 'HIGH_PRICE'
const SALES = 'SALES'
const NEW_DATE = 'NEW_DATE'
const OLD_DATE = 'OLD_DATE'

export const PRICE_FILTER = {
  type: [LOW_PRICE, HIGH_PRICE],
  name: 'Цена',
}

export const SALES_FILTER = {
  type: SALES,
  name: 'Распродажа',
}

export const DATE_FILTER = {
  type: [NEW_DATE, OLD_DATE],
  name: 'По дате добавления',
}

export const FILTER_QUERY_NAME = 'filterType'

export const getFilteredProducts = ([...products], filterType) => {
  switch (filterType) {
  case LOW_PRICE:
    return products.sort((a, b) => a.price - b.price)
  case HIGH_PRICE:
    return products.sort((a, b) => b.price - a.price)
  case SALES:
    return products.filter((product) => !!product.discount)
  case NEW_DATE:
    return products.sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
  case OLD_DATE:
    return products.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
  default:
    return products
  }
}
