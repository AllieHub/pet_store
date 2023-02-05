import itemCart from './itemCart.module.css'

export function ItemCart({ props }) {
  const {
    pictures, name, price, wight,
  } = props
  return (
    <div className={itemCart.Wr}>

      <div>
        <h3>{name}</h3>
        <img
          src={pictures}
          alt="Фото товара отсутствует"
          width="180"
        />
      </div>

      <div>
        <p>{wight}</p>
        <p>
          {price}
          &nbsp;₽
        </p>

      </div>

      <button
        type="button"
        // onClick={}
      >
        Удалить из корзины
      </button>
    </div>
  )
}
