import { useContext } from 'react'
import { FiltersContext } from '../context/FiltersContext'

export function useFilters() {

    const {filters, setFilters} = useContext(FiltersContext)
    // filters =   category: 'all', minPrice: 500
    
    const filterProducts = (products) =>{ //Esta func es compartida en App.js y para luego a Filtrarlo y pasar el filtrado a <Products />
    
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
  