import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePetStoreContext } from '../../contexts/PetStoreContextProvider'

function Logout() {
  const { setToken, isAuth } = usePetStoreContext()

  const navigate = useNavigate()
  useEffect(() => {
    if (isAuth) {
      setToken('')
    }
    navigate('/signin')
  }, [isAuth])

  return null
}

export default Logout
