import { useContext, useState } from 'react'
import { Products} from './componets/Products'
import {products} from './mocks/products.json'
import {Header} from './componets/Header'
import{ Footer} from './componets/Footer'

import { FiltersContext } from './context/FiltersContext'
function useFilters() {

  // const [filters, setFilters ] = useState({
  //   minPrice: 0,
  //   category: 'all'
  // })
  
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
  const  {filters,filterProducts, setFilters} = useFilters()
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
