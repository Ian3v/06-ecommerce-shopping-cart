import { useContext, useState } from 'react'
import { Products} from './componets/Products'
import { products} from './mocks/products.json'
import { Header} from './componets/Header'
import { Footer} from './componets/Footer'
import { useFilters} from './Hooks/useFilters'
import { Cart } from './componets/Cart'
import { CartProvider } from './context/CartContext'
// import { FiltersContext } from './context/FiltersContext'

// function useFilters() {
  //return {filters, filterProducts, setFilters}
// }
1.23
function App() {

  // const [products] = useState(initialProducts)
  const {filters,filterProducts, setFilters} = useFilters()
  
  const filteredProducts = filterProducts(products);
   

  return (
    //CartProvider es de CartContext
  
    <CartProvider> 
      {/* <Header changeFilters={setFilters}/>   */}
      <Header />  
      <Cart />
      <Products product={filteredProducts}/>
      <Footer filters={filters}/>
    </CartProvider>
    
  )
}

export default App
