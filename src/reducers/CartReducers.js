
export const CART_ACTION_TYPES = {
    'ADD_TO_CART' : 'ADD_TO_CART',
    'REMOVE_FROM_CART': 'REMOVE_FROM_CART',
    'CLEAR_CART': 'CLEAR_CART',
    'SUBTRACT_QUANTITY': 'SUBTRACT_QUANTITY'
}

export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const updateLocalStorage = state =>{
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action)=>{
    const {type: actionType, payload: actionPayload} = action

    switch(actionType){
        case CART_ACTION_TYPES.ADD_TO_CART : {
            const { id } = actionPayload
            const productInCartIndex = state.findIndex(item => item.id === id)

            if(productInCartIndex >= 0){
                const newState = structuredClone(state) //Copia a fondo de cart
                newState[productInCartIndex].quantity += 1 //le sumamos + 1 
                
                updateLocalStorage(newState)
                // return setCart(newCart)// retornamos el esado actualizado
                return newState// en Reducer ya no vamos setearlo si no devolver la variable
            }else{
                // Producto no esta en el carrito
                const newState = [
                ...state, 
                {
                    ...actionPayload, // product
                    quantity: 1
                }
                ]
                updateLocalStorage(newState)
                return newState
             }   
             
             
        }
        case CART_ACTION_TYPES.REMOVE_FROM_CART:{
            const { id } = actionPayload
            const newState = state.filter(item => item.id !== id)
            updateLocalStorage(newState)
            return newState
        }
        case CART_ACTION_TYPES.CLEAR_CART:{
            updateLocalStorage(cartInitialState)
            return cartInitialState
        }
        case CART_ACTION_TYPES.SUBTRACT_QUANTITY:{
            const {id} = actionPayload
            const productInCartIndex = state.findIndex((item)=> {
                return item.id === id
            })
            if(productInCartIndex >= 0){
                const newState = structuredClone(state) //Copia a fondo de cart
                if(newState[productInCartIndex].quantity > 1){
    
                    newState[productInCartIndex].quantity -= 1 //le sumamos + 1 
                }
                return newState// retornamos el esado actualizado
            }
            
        }

    return state
    }
    return state
}


/* -------------------------------------------------------------------------- */
/* ---------------------------- Sin local Storage --------------------------- */

// export const CART_ACTION_TYPES = {
//     'ADD_TO_CART' : 'ADD_TO_CART',
//     'REMOVE_FROM_CART': 'REMOVE_FROM_CART',
//     'CLEAR_CART': 'CLEAR_CART',
//     'SUBTRACT_QUANTITY': 'SUBTRACT_QUANTITY'
// }

// export const cartInitialState = []

// export const cartReducer = (state, action)=>{
//     const {type: actionType, payload: actionPayload} = action

//     switch(actionType){
//         case CART_ACTION_TYPES.ADD_TO_CART : {
//             const { id } = actionPayload
//             const productInCartIndex = state.findIndex(item => item.id === id)

//             if(productInCartIndex >= 0){
//                 const newState = structuredClone(state) //Copia a fondo de cart
//                 newState[productInCartIndex].quantity += 1 //le sumamos + 1 
                
//                 // return setCart(newCart)// retornamos el esado actualizado
//                 return newState// en Reducer ya no vamos setearlo si no devolver la variable
//             }else{
//                 // Producto no esta en el carrito
//                 return [
//                 ...state, 
//                 {
//                     ...actionPayload, // product
//                     quantity: 1
//                 }
//                 ]
            
//              }   
//         }
//         case CART_ACTION_TYPES.REMOVE_FROM_CART:{
//             const { id } = actionPayload
//             return state.filter(item => item.id !== id)
//         }
//         case CART_ACTION_TYPES.CLEAR_CART:{
//             return cartInitialState
//         }
//         case CART_ACTION_TYPES.SUBTRACT_QUANTITY:{
//             const {id} = actionPayload
//             const productInCartIndex = state.findIndex((item)=> {
//                 return item.id === id
//             })
//             if(productInCartIndex >= 0){
//                 const newState = structuredClone(state) //Copia a fondo de cart
//                 if(newState[productInCartIndex].quantity > 1){
    
//                     newState[productInCartIndex].quantity -= 1 //le sumamos + 1 
//                 }
//                 return newState// retornamos el esado actualizado
//             }
            
//         }

//     return state
//     }
//     return state
// }



//#region Alternative StructureClone
/* --------------------- Alternativas a Structure Clone --------------------- */






//#region  MAP 
// const newSate = state.map( item=>{
//     if( item.id === id){
//         return{
//             ...item,
//             quantity: item.quantity + 1
//         }
//     }
// })







//#region Spread Operator y slice ⚡

// const newSate = [
//     ...state.slice(0,productInCartIndex),
//     { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1},
//     ...state.slice(productInCartIndex + 1)



/* -------------------------------------------------------------------------- */


