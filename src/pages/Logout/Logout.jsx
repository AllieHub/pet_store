import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearToken, getAuthStatusSelector } from '../../redux/slices/authSlice'

function Logout() {
  const isAuth = useSelector(getAuthStatusSelector)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if (isAuth) {
      dispatch(clearToken())
    }
    navigate('/signin')
  }, [isAuth])

  return null
}

export default Logout
