import { createContext, useState} from 'react'

//! 1 Crear contexto
export const CartContext = createContext()

//! 2 crear provider 
export function CartProvider ({children}){
    
    /* --------------------------------- Estado --------------------------------- */
    const [cart, setCart] = useState([])
    /* ------------------------------ Func Agregar ------------------------------ */
    const addToCart = product =>{
        //Check si el producto es esta en la cart
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        
        if(productInCartIndex >= 0){

            const newCart = structuredClone(cart) //Copia a fondo de cart
            newCart[productInCartIndex].quantity += 1 //le sumamos + 1 
    
            return setCart(newCart)// retornamos el esado actualizado
        }else{
            // Producto no esta en el carrito
        setCart(prevState => ([ 
            ...prevState,{
                ...product,
                quantity: 1
            }
        ]))

        }
    }

    /* ------------------------------ Limpiar Cart ------------------------------ */
    const clearCart = () =>{
        setCart([])
    }

    return (
        <CartContext.Provider value= {{
            cart,
            addToCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}