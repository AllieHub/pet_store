/* eslint-disable jsx-a11y/label-has-associated-control */
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeAllChecked, getCartSelector } from '../../redux/slices/cartSlice'
import cartStyles from './cart.module.css'

export function SelectAll() {
  const cart = useSelector(getCartSelector)

  const isSelectAll = useMemo(() => {
    let check = true
    cart.forEach((e) => {
      if (!e.isChecked) {
        check = false
      }
    })
    return check
  }, [cart])

  const dispatch = useDispatch()
  const selectAll = () => {
    dispatch(changeAllChecked(!isSelectAll))
  }

  return (
    <div className={cartStyles.choose_all}>
      <div className={cartStyles.input_check}>
        <input onChange={selectAll} checked={isSelectAll} id="checkAll" type="checkbox" />
        <label htmlFor="checkAll">Выбрать все</label>
      </div>
    </div>
  )
}
