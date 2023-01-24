import ProductCardStyles from './ProductCard.module.css'

export function ProductCard({ product }) {
  console.log({ product })
  if (!product) {
    return null
  }
  const addToCartHandler = () => {
    console.log('Продукт добавлен в корзину')
  }
  return (
    <div className={ProductCardStyles.Wr}>
      <div>
        <img
          src={product.pictures}
          alt="Фото товара отсутствует"
          width="180"
        />
      </div>
      <h3>{product.name}</h3>
      <p>
        {product.price}
          &nbsp;₽
      </p>
      <p>{product.wight}</p>
      <button
        type="button"
        onClick={addToCartHandler}
      >
        Добавить в корзину
      </button>
    </div>
  )
}
