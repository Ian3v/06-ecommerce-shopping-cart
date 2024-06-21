import { useContext } from "react";
import { Cart } from "../componets/Cart";
import { CartContext } from "../context/CartContext";
//Usar el contexto
export const useCart = ()=>{

    const context = useContext(CartContext) // 
    //Verificar si estas usando cart en un sito q no puedes, osea en un lugar node no esta proveendo o esta envuelto para prveer
    if( context === undefined){
        throw new Error(':( useCart must be used within a CartProvider')
    }


    return context
} 
