import ProductCardStyles from './ProductCard.module.css'

export function ProductCard(props) {
  const {
    pictures, name, price, wight,
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
      </div>
      <h3>{name}</h3>
      <p>
        {price}
          &nbsp;₽
      </p>
      <p>{wight}</p>
      <button
        type="button"
        onClick={addToCartHandler}
      >
        Добавить в корзину
      </button>
    </div>
  )
}
