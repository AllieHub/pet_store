import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Modal } from '../../../components/Modal/Modal'
import { Loader } from '../../../Loader/Loader'
import { getUserIdSelector } from '../../../redux/slices/authSlice'
import { privateFetch } from '../../../utils/privateFetch'
import Styles from './reviews.module.css'

export function DeleteReview({
  productId, authorId, reviewId, refetch,
}) {
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => { setIsOpen(false) }

  const onOpen = () => { setIsOpen(true) }

  const userId = useSelector(getUserIdSelector)

  const { mutate, isLoading } = useMutation({
    mutationFn: () => privateFetch(
      `products/review/${productId}/${reviewId}`,
      { method: 'DELETE' },
    ),
    onSuccess: () => {
      refetch()
      onClose()
    //   доделать обновление отзывов
    },
    onError: (error) => {
      alert(error.message)
    },
  })

  if (isLoading) {
    return <Loader />
  }

  // eslint-disable-next-line no-underscore-dangle
  if (authorId !== userId) {
    return null
  }

  return (
    <>
      <FontAwesomeIcon className={Styles.some_icon} icon={faTrash} onClick={onOpen} />
      <Modal isOpen={isOpen} closeHandler={onClose}>
        <div className={Styles.modal}>
          <p>
            Вы точно хотите удалить свой отзыв?
          </p>
          <div className={Styles.modal_buttons}>
            <button type="button" onClick={() => mutate({})}>Да</button>
            <button type="button" onClick={onClose}>Нет</button>
          </div>

        </div>
        {/* <EditProduct onCancel={onClose} data={props} /> */}
      </Modal>
    </>
  )
}
