import './Products.css'
import { useContext } from 'react';
import {AddToCartIcon} from './Icons.jsx'
// import { AddToCardIcon} from './icons'

 /* ------------------- Podemos usar Cual quiera de los dos ------------------ */
import { useCart } from '../Hooks/useCart.js'
// import { CartContext } from "../context/CartContext"; 
/* -------------------------------------------------------------------------- */

export function Products( {product} ){ 
   //Product envia todos los q estan en Pnatalla

   /* ---------- Destructuring o usando lo compartido por el CONTEXTO ---------- */
   const {addToCart, cart} = useCart() //Usando el contexto pero esta en useCart
   // const {addToCart, cart } = useContext(CartContext)
   /* -------------------------------------------------------------------------- */
   return(
      <main className='products'>
         <h2>Products.js</h2>
         <ul>
            {
               product.map( (element,index)=>(
                  <li key={element.id}>
                     {/* <h4>{index}</h4> */}
                     <h4>id: {element.id}</h4>
                     <img 
                        // src='https://picsum.photos/300/300'
                        // src={`https://robohash.org/${index}`}
                        alt={element.title}
                     />
                     <div>
                        <strong>{element.title}</strong> - ${element.price}
                     </div>
                     <div>
                        <button onClick={()=>{ addToCart(element)}}>
                           <AddToCartIcon />
                        </button>
                     </div>
                  </li> 

               ))
            }
         </ul>
      </main>
    )
}