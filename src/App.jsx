import { useState } from 'react'
import { Products} from './componets/Products'
import {products} from './mocks/products.json'

function App() {

  const [filters, setFilters ] = useState({
    category: 'all',
    minPrice: 0 
  })

  const filterProducts = (products) =>{
    // return (
    //   products.filter(product =>{

    //     if( product.price >= filters.minPrice && (filters.category === 'alt' || product.category === filters.category )){
    //       return true
    //     }else{
    //       return false
    //     }
        
    //   })
    // )
      
    return products.filter( product =>{
      return (
        product.price >= filters.minPrice && 
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    } )
  }


  return (
    <>
  
     <h1>hola</h1>
      <Products products={filterProducts(products)}/>
      
    </>
  )
}

export default App
