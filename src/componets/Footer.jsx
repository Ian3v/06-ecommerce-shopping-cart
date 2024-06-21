import './Footer.css'
import { useCart } from '../Hooks/useCart'
import { useFilters } from '../Hooks/useFilters'
export function Footer(){
    const {filters } = useFilters()
    const { cart} = useCart()
    // console.log('%c7 Footer cart >','color:#25E882;font-size:15px;',cart);
    return(


        <footer className='footer'>
            {
                JSON.stringify(filters, null ,2)
            }
            {
                JSON.stringify(cart, null ,2)
            }
            {/* <h4>Prueba tecnica de Recat * -</h4>
            <span>@mdudev</span>
            <h5>Shopping Cart con useContext & useReducer</h5> */}
        </footer>
    )
}