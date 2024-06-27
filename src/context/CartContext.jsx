import { createContext, useReducer, useState} from 'react'
import { cartReducer,cartInitialState } from '../reducers/CartReducers'

//! --------------------------  1 Crear contexto -------------------------- */
export const CartContext = createContext()

 //!------------------------------- USEREDUCER ------------------------------- */
//! USEREDUCER para minimizar el uso de tantos setCart / reducer es reducir
// 1  Creamos el estado inicial
function useCartReducer(){
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

     // const [cart, setCart] = useState([])

     //* ----------------------------- Restar Cantidad ---------------------------- */
     // const lessQuantity = (product)=>{
     //     const productInCartIndex = cart.findIndex((item)=> {
     //         return item.id === product.id
     //     })
     //     if(productInCartIndex >= 0){
     //         const newCart = structuredClone(cart) //Copia a fondo de cart
     //         if(newCart[productInCartIndex].quantity > 1){
 
     //             newCart[productInCartIndex].quantity -= 1 //le sumamos + 1 
     //         }
     //         return setCart(newCart)// retornamos el esado actualizado
     //     }
     // }
     const subtractQuantity = (product)=>{
         dispatch(
             {
                 type: 'SUBTRACT_QUANTITY',
                 payload: product
             }
         )
     }
     //* ------------------------------ Func Agregar ------------------------------ */
     const addToCart = product => {
 
         dispatch(
             {
                 type: 'ADD_TO_CART',
                 payload: product
             }
         )
     }
     //* ------------------------------- RemoverItem ------------------------------ */
     const removeItemCart = (product) => {
         dispatch(
             {
                 type: 'REMOVE_FROM_CART',
                 payload: product
             }
         )
     }
     //* ------------------------------ Limpiar Cart ------------------------------ */
     const clearCart = () =>{
 
         dispatch( 
             {
                 type: 'CLEAR_CART',
             }
         )
     }

     return { state, addToCart, removeItemCart, clearCart,subtractQuantity}
}


//! --------------------------  2 crear provider -------------------------- */
export function CartProvider ({children}){
    /* --------------------------------- Estado --------------------------------- */
    const { state, addToCart, removeItemCart, clearCart, subtractQuantity} = useCartReducer()
    return (
        <CartContext.Provider value= {{
            cart: state,
            addToCart,
            clearCart,
            removeItemCart,
            // lessQuantity
            subtractQuantity
            
        }}>
            {children}
        </CartContext.Provider>
    )
}




/* ---------------------------- Antesdel reducer ---------------------------- */
// import { createContext, useState} from 'react'

// //! 1 Crear contexto
// export const CartContext = createContext()


// //! 2 crear provider 
// export function CartProvider ({children}){
//     /* --------------------------------- Estado --------------------------------- */
//     const [cart, setCart] = useState([])


//     const lessQuantity = (product)=>{
//         const productInCartIndex = cart.findIndex((item)=> {
//             return item.id === product.id
//         })
//         if(productInCartIndex >= 0){
//             const newCart = structuredClone(cart) //Copia a fondo de cart
//             if(newCart[productInCartIndex].quantity > 1){

//                 newCart[productInCartIndex].quantity -= 1 //le sumamos + 1 
//             }
//             return setCart(newCart)// retornamos el esado actualizado
//         }
//     }

//     /* ------------------------------ Func Agregar ------------------------------ */
//     const addToCart = (product) =>{ // Product tiene el elemnto cliqueado
//         //Check si el producto es esta en la cart
//         // console.log('%c15 CartContext product>','color:#25E882;font-size:15px;',product);
        
//         const productInCartIndex = cart.findIndex((item)=> {
//               return item.id === product.id
//           }
//         )//al inicio da -1, Nos devuleve el INDICE al q Agregamos

//         if(productInCartIndex >= 0){
//             const newCart = structuredClone(cart) //Copia a fondo de cart
//             newCart[productInCartIndex].quantity += 1 //le sumamos + 1 
            
//             return setCart(newCart)// retornamos el esado actualizado
//         }else{
//          // Producto no esta en el carrito
//             setCart(prevState => (
//                 [ 
//                 ...prevState,{
//                     ...product,
//                         quantity: 1
//                     }
//                 ]
//             ))
//         }
//     }

//     const removeItemCart = (product)=>{ // si le estoy pasndo el q clickeen products\
       
//      //Actualizando el estado, con PreveState donde React nos asegura q PrevState es el estado actualizado
//         setCart( prevState => {
//             return( prevState.filter( item =>  (item.id !== product.id)))
//         })
//      }

//     /* ------------------------------ Limpiar Cart ------------------------------ */
//     const clearCart = () =>{
//         setCart([])
//     }

//     return (
//         <CartContext.Provider value= {{
//             cart,
//             addToCart,
//             clearCart,
//             removeItemCart,
//             lessQuantity
            
//         }}>
//             {children}
//         </CartContext.Provider>
//     )
// }