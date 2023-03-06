import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import modalStyles from './Modal.module.css'

function ModalInner({ closeHandler, children }) {
  useEffect(() => {
    const escapeModal = (e) => {
      if (e.key === 'Escape') {
        closeHandler()
      }
    }
    document.addEventListener('keydown', escapeModal)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', escapeModal)
      document.body.style.overflow = 'auto'
    }
  }, [])

  const closeModalByClickXMark = () => closeHandler()

  return (
    <div className={modalStyles.modal_inner}>
      <button onClick={closeModalByClickXMark} type="button" className={modalStyles.button}>
        <FontAwesomeIcon className={modalStyles.icon} icon={faXmark} />
      </button>
      {children}
    </div>
  )
}

export function Modal({ isOpen, closeHandler, children }) {
  console.log({ isOpen, closeHandler })

  if (!isOpen) return null

  const closeModalByClickWrapper = (e) => {
    console.log(e)
    if (e.target === e.currentTarget) {
      closeHandler()
    }
  }

  return createPortal(
    <div onClick={closeModalByClickWrapper} className={modalStyles.modal_wr}>
      <ModalInner closeHandler={closeHandler}>
        {children}
      </ModalInner>
    </div>,

    document.getElementById('modal-root'),
  )
}
