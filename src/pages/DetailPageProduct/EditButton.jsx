/* eslint-disable react/destructuring-assignment */
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Modal } from '../../components/Modal/Modal'
import { getUserIdSelector } from '../../redux/slices/authSlice'
import { EditProduct } from '../EditProduct/EditProduct'

export function EditButton(props) {
  const userId = useSelector(getUserIdSelector)
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => {
    setIsOpen(false)
  }

  const onOpen = () => {
    setIsOpen(true)
  }
  // eslint-disable-next-line no-underscore-dangle
  if (props.author._id !== userId) {
    return null
  }

  return (
    <>
      <button
        type="button"
        onClick={onOpen}
      >
        Редактировать
      </button>
      <Modal isOpen={isOpen} closeHandler={onClose}>
        <EditProduct onCancel={onClose} data={props} />
      </Modal>

    </>

  )
}
