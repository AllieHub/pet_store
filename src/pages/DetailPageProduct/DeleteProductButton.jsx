import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Modal } from '../../components/Modal/Modal'
import { Loader } from '../../Loader/Loader'
import { getUserIdSelector } from '../../redux/slices/authSlice'
import { privateFetch } from '../../utils/privateFetch'

export function DeleteProductButton({ productId, authorId, name }) {
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => { setIsOpen(false) }

  const onOpen = () => { setIsOpen(true) }

  const navigate = useNavigate()

  const { mutate, isLoading } = useMutation({
    mutationFn: () => privateFetch(
      `products/${productId}`,
      { method: 'DELETE' },
    ),
    onSuccess: () => {
      onClose()
      navigate('/products')
    },
    onError: (error) => {
      alert(error.message)
    },
  })

  const userId = useSelector(getUserIdSelector)

  if (isLoading) {
    return <Loader />
  }

  // eslint-disable-next-line no-underscore-dangle
  if (authorId !== userId) {
    return null
  }
  return (
    <>
      <button type="button" onClick={onOpen}>
        Удалить товар
      </button>
      <Modal isOpen={isOpen} closeHandler={onClose}>
        <div>
          <p>
            Вы точно хотите удалить
            {' '}
            &quot;
            {name}
            &quot;
            ?
          </p>
          <button type="button" onClick={() => mutate({})}>Да</button>
          <button type="button" onClick={onClose}>Нет</button>
        </div>
        {/* <EditProduct onCancel={onClose} data={props} /> */}
      </Modal>
    </>

  )
}
