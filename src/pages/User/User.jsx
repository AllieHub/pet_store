import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Loader } from '../../Loader/Loader'
import { getAuthStatusSelector, getGroupSelector } from '../../redux/slices/authSlice'
import { privateFetch } from '../../utils/privateFetch'
import userStyles from './user.module.css'

// Страница с информацией о пользователе (имя, должность, фото, группа, email)

export function User() {
  const groupUser = useSelector(getGroupSelector)

  const isAuth = useSelector(getAuthStatusSelector)

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      navigate('/signin')
    }
  }, [isAuth])

  const url = `v2/${groupUser}/users/me`

  const {
    data, isLoading, isError, error,
  } = useQuery({
    queryKey: [url],
    queryFn: () => privateFetch(url),
  })

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <div className={userStyles.error}>{error.message}</div>
  }

  const {
    name, group, email, about, avatar,
  } = data

  return (
    <div className={userStyles.wr}>
      <div className={userStyles.wr_info}>
        <div className={userStyles.img}>
          <img src={avatar} alt="img" />
        </div>
        <div className={userStyles.info}>
          <p>{name}</p>
          <p>{group}</p>
          <p>{email}</p>
          <p>{about}</p>
        </div>
      </div>
      <button type="button">Редактировать профиль</button>
    </div>
  )
}
