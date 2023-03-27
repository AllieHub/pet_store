import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import searchStyles from './search.module.css'
import { changeSearchFilter } from '../../redux/slices/filterSlice'
import { useDebounce } from '../../hooks/useDebounce'

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState(() => {
    const searchValueFromQuery = searchParams.get('search')

    return searchValueFromQuery ?? ''
  })

  const dispatch = useDispatch()
  const debounsedSearchValue = useDebounce(search, 1000)

  const searchHandler = (e) => {
    const newSearchValue = e.target.value
    setSearch(newSearchValue)
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      search: newSearchValue,
    })
  }

  // const SearchHandler = (e) => {
  //   const newSearchValue = e.target.value
  //   setSearch(newSearchValue)
  // }
  useEffect(() => {
    dispatch(changeSearchFilter(debounsedSearchValue))
  }, [debounsedSearchValue, dispatch])

  return (
    <div className={searchStyles.wr}>
      <p>Поиск товара</p>
      <input
        className={searchStyles.input}
        placeholder="Поиск..."
        type="search"
        name=""
        maxLength="300"
        value={search}
        onChange={searchHandler}
      />
    </div>
  )
}
