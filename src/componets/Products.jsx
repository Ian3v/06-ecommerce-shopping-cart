import './Products.css'
// import { AddToCardIcon} from './icons'
import {AddToCartIcon} from './Icons.jsx'

export function Products( {products} ){
   
   // console.log('%c9 >','color:red;font-size:15px;',products);
   return(
      <main className='products'>
         <h2>Products.js</h2>
         <ul>
            {
               products.map( (element,index)=>(
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
                        <button>
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