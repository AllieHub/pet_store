import ProductCardStyles from './ProductCard.module.css'

export function ProductCard(props) {
  const {
    pictures, name, price, wight, description, stock,
  } = props

  const addToCartHandler = () => {
    console.log('Продукт добавлен в корзину')
  }

  return (
    <div className={ProductCardStyles.Wr}>
      <div>

        <img
          src={pictures}
          alt="Фото товара отсутствует"
          width="180"
        />
        <h3>{name}</h3>

      </div>
      <div>
        <p>
          {price}
          &nbsp;₽
        </p>
        <p>{wight}</p>
        <p>
          {stock}
          &nbsp;шт.
        </p>
      </div>
      <p>{description}</p>
      <button
        type="button"
        onClick={addToCartHandler}
      >
        В корзину
      </button>
    </div>
  )
}
