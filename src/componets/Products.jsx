import './Products.css'
// import { AddToCardIcon} from './icons'
import {AddToCartIcon} from './Icons.jsx'
import { useCart } from '../Hooks/useCart.js'

export function Products( {product} ){
   
   const {addToCart, cart} = useCart()
   
   return(
      <main className='products'>
         <h2>Products.js</h2>
         <ul>
            {
               product.map( (element,index)=>(
                  <li key={element.id}>
                     <h4>{index}</h4>
                     <img 
                        // src='https://picsum.photos/300/300'
                        // src={`https://robohash.org/${index}`}
                        alt={element.title}
                     />
                     <div>
                        <strong>{element.title}</strong> - ${element.price}
                     </div>
                     <div>
                        <button onClick={()=>{ addToCart(product)}}>
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