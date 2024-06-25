import './Products.css'
import { useContext } from 'react';
import {AddToCartIcon,RemoveFromCartIcon} from './Icons.jsx'
// import { AddToCardIcon} from './icons'

 /* ------------------- Podemos usar Cual quiera de los dos ------------------ */
import { useCart } from '../Hooks/useCart.js'
// import { CartContext } from "../context/CartContext"; 
/* -------------------------------------------------------------------------- */

export function Products( {product} ){ 
   //Product envia todos los q estan en Pnatalla

   /* ---------- Destructuring o usando lo compartido por el CONTEXTO ---------- */
   const {addToCart, cart,removeItemCart} = useCart() //Usando el contexto pero esta en useCart
   // const {addToCart, cart } = useContext(CartContext)
   // console.log('%c17 recmoveItemCart >','color:white;background:rgba(0, 153, 255, 0.63);border-radius:10px 10px;padding:1px:font-size:15px;',removeItemCart);
   /* -------------------------------------------------------------------------- */
   const checkProductInCart= (product)=>{
      return cart.some(item => item.id === product.id)
   }
   return(
      <main className='products'>
         <h2>Products.js</h2>
         <ul>
            {
               product.map( (element,index)=>{

                  const isProductInCart = checkProductInCart(element)
                  {/* console.log('30', isProductInCart,' > ' ,index) */}
                  return(
                     <li key={element.id}>
                     {/* <h4>{index}</h4> */}
                     <h4>id: {element.id}</h4>
                     <img 
                        src={`https://dummyimage.com/200x200&text=${element.category}`}
                        // src='https://picsum.photos/300/300'
                        // src={`https://robohash.org/${index}`}
                        alt={element.title}
                     />
                     <div>
                        <strong>{element.title}</strong> - ${element.price}
                     </div>
                     <div>
                     {/* {
                        isProductInCart ? 
                        <button onClick={()=>{ removeItemCart(element)}}>
                           <RemoveFromCartIcon />
                        </button> :
                        <button onClick={()=>{ addToCart(element)}}>
                           <AddToCartIcon />
                        </button>
                     } */}

                     <button 
                        style={{backgroundColor: isProductInCart ? 'red': '#09f'}}
                        onClick={()=> isProductInCart ? removeItemCart(element) : addToCart(element) }>
                        {
                           isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />
                        }
                     </button>
                       
                     </div>
                  </li> 
                  )
                  

            })
            }
         </ul>
      </main>
    )
}