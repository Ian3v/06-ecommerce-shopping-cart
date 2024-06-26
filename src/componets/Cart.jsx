
import './Cart.css'
import { useId} from 'react'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCart } from '../Hooks/useCart'
import { Products } from './Products';

function CartItem ( {thumbnail, price, title, quantity, addToCart, subtractQuantity,removeItemCart, element}){
    return(
        <li >
            <img 
                src='https://picsum.photos/300/300'
                // alt='iphone'
            />
            <div>
                {/* <strong>{element.id} </strong> */}
                <strong>{title}</strong> - ${price}
            </div> 

            <footer>
                <button onClick={subtractQuantity}>-</button>
                <small>
                     Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>

                {/* <button onClick={addToCart(element)}>+</button> */}
            </footer>
            <button onClick={removeItemCart}>X</button>
        </li>
    )
}

export function Cart (){
    const cartCheckboxId = useId()
    
    const { cart,addToCart,removeItemCart,clearCart,subtractQuantity} = useCart()
    return(
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden/>

            <aside className='cart'>
                <ul>
                    {
                        cart.map((element, index, allArray)=>{
                            
                            {/* console.log("23 element >",element); */}
                            return (
                                <CartItem 
                                    key={element.id} 
                                    price={element.price}
                                    title={element.title}
                                    quantity={element.quantity}

                                    subtractQuantity={()=> subtractQuantity(element)}
                                    addToCart={()=>  addToCart(element)}
                                    removeItemCart={()=> removeItemCart(element)}
                                    {...element}
                                />
         
                            )
                        })
                    }
                </ul>
                <button onClick={()=>{clearCart()}}>
                    <ClearCartIcon/>
                </button>
            </aside>
        </>
    )
}