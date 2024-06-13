
import './Cart.css'
import { useId} from 'react'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";

export function Cart (){
    const cartCheckboxId = useId()

    return(
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden/>

            <aside className='cart'>
                <ul>
                    <li>
                        <img 
                            src='https://picsum.photos/300/300'
                            alt='iphone'
                        />
                        <div>
                            <strong>iPhone</strong> - $1429
                        </div>

                        <footer>
                            <small>
                                Qty: 1
                            </small>
                            <button>+</button>
                        </footer>

                    </li>
                </ul>
                <button>
                    <ClearCartIcon/>
                </button>
            </aside>
        </>
    )
}