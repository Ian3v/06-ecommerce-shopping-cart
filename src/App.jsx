import { useState } from 'react'
import { Products} from './componets/Products'
import {products} from './mocks/products.json'
import {Header} from './componets/Header'
import {Footer} from './componets/Footer'
import { IS_DEVELOPMENT } from './assets/config'
import { FiltersContext } from './context/Filters'
import { useContext } from 'react'

function useFilters() {

  
  const {filters, setFilters} = useContext(FiltersContext)
  
  

  const filterProducts = (products) =>{

    return products.filter( product =>{
      return (
        product.price >= filters.minPrice && ( 
          filters.category === 'all' || 
          product.category === filters.category 
        )
      )
    } )
  }
  
  return {filters, filterProducts, setFilters}

}

function App() {

  // const [products] = useState(initialProducts)
  const {filters,filterProducts, setFilters} = useFilters()
  const filteredProducts = filterProducts(products);
   

  return (
    <>
      <Header changeFilters={setFilters}/>  
      <h1>hola</h1>
      <Products products={filteredProducts}/>
      <Footer filters={filters}/>
    </>
  )
}

export default App
