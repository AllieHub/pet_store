import { Search } from '../../components/Search/Search'
import { Filters } from '../Filters/Filters'
import { ProductList } from './ProductList'

export function Products() {
  return (
    <div>
      <Search />
      <Filters />
      <ProductList />
    </div>
  )
}
