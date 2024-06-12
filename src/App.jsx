import { useContext, useState } from 'react'
import { Products} from './componets/Products'
import { products} from './mocks/products.json'
import { Header} from './componets/Header'
import { Footer} from './componets/Footer'
import { useFilters} from './Hooks/useFilters'
// import { FiltersContext } from './context/FiltersContext'

// function useFilters() {
  //return {filters, filterProducts, setFilters}
// }

function App() {

  // const [products] = useState(initialProducts)
  const  {filters,filterProducts, setFilters} = useFilters()
  const filteredProducts = filterProducts(products);
   

  return (
    <>
      {/* <Header changeFilters={setFilters}/>   */}
      <Header />  
      <Products products={filteredProducts}/>
      <Footer filters={filters}/>
    </>
  )
}

export default App
  