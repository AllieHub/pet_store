import {
  useEffect,
  useContext, useState, createContext, useMemo,
} from 'react'

export const PetStoreContext = createContext()

const TOKEN_KEY = 'TOKEN_KEY'

export function PetStoreContextWrapper({ children }) {
  const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY))
  const isAuth = useMemo(() => {
    if (token) {
      return true
    }
    return false
  }, [token])

  useEffect(() => {
    localStorage.setItem(TOKEN_KEY, token)
  }, [token])

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <PetStoreContext.Provider value={{ token, isAuth, setToken }}>
      {children}
    </PetStoreContext.Provider>
  )
}

export const usePetStoreContext = () => useContext(PetStoreContext)
