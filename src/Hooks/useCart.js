import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Cart } from "../componets/Cart";

export const useCart = ()=>{

    const context = useContext(CartContext)

    //Verificar si estas usando cart en un sito q no puedes, osea en un lugar node no esta proveendo o esta envuelto para prveer
    if( context === undefined){
        throw new Error(':( useCart must be used within a CartProvider')
    }

    return context
}