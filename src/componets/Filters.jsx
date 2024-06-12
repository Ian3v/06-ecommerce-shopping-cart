import './Filters.css'
import { useState,useId, useContext } from 'react'

/* -------------------------------------------------------------------------- */
// Aki Funciona traer "setFilters" desde Hooks/Filters por q aho ya tenemos filters, setFilters y estamos retornado eso
// import { useFilters } from '../Hooks/useFilters'
// Como tambien funciona traer el setFilters desde el origine osea el contexto
import { FiltersContext } from '../context/FiltersContext'
/* -------------------------------------------------------------------------- */

export function Filters () {

   /* -------------------------------------------------------------------------- */
   // Podemos traernos el setFilters desde hooks/useFilters
   // const { setFilters } = useFilters()
   //NOs traemos el Estado actulizador del contexto
   const { setFilters } = useContext(FiltersContext)
   /* -------------------------------------------------------------------------- */
   
   const [minPrice, setMinPrice] = useState(0)
   const minPriceFilterId = useId()
   const categoryFilterId = useId()

   const handleChangeMinPrice = (e)=>{
      setMinPrice(e.target.value)
      
      setFilters( (prevState)=>
        ( {
         ...prevState,
         minPrice: e.target.value
      }))

   }

   const handleChangeCategory = (e)=>{
      setMinPrice(e.target.value)
      
      setFilters( (prevState)=>
        ( {
         ...prevState,
         category: e.target.value
      }))
      
   }



    return(
      <section className="filters">
         <div>
            <label htmlFor={minPriceFilterId}>Price</label>
            <input 
               type='range'
               id={minPriceFilterId}
               min='0'
               max='1000'
               onChange={handleChangeMinPrice}
            />
            <span>${minPrice}</span>
         </div>
         <div>
            <label htmlFor={categoryFilterId}>Categorias</label>
            <select id={categoryFilterId} onChange={handleChangeCategory}>
               <option value='all'>Todas</option>
               <option value='laptops'>Portatiles</option>
               <option value='smartphones'>Celulares</option>
            </select>
         </div>

      </section>
    )
}