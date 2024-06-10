import './Filters.css'
import { useState,useId } from 'react'

export function Filters ({onChange}) {

   
   const [minPrice, setMinPrice] = useState(0)
   const minPriceFilterId = useId()
   const categoryFilterId = useId()

   const handleChangeMinPrice = (e)=>{
      setMinPrice(e.target.value)
      
      onChange( (prevState)=>
        ( {
         ...prevState,
         minPrice: e.target.value
      }))

   }

   const handleChangeCategory = (e)=>{
      setMinPrice(e.target.value)
      
      onChange( (prevState)=>
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