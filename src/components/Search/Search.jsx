import { useState } from 'react'
import { useDispatch } from 'react-redux'
import searchStyles from './search.module.css'
import { changeSearchFilter } from '../../redux/slices/filterSlice'

export function Search() {
  const [search, setSearch] = useState('')

  const dispatch = useDispatch()
  const SearchHandler = (e) => {
    const newSearchValue = e.target.value
    setSearch(newSearchValue)
    dispatch(changeSearchFilter(newSearchValue))
  }

  return (
    <div className={searchStyles.wr}>
      <p>Поиск товара</p>
      <input
        className={searchStyles.input}
        placeholder="Найти"
        type="search"
        name=""
        maxLength="300"
        value={search}
        onChange={SearchHandler}
      />
    </div>
  )
}
