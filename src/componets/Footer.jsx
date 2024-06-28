import './Footer.css'
import { useCart } from '../Hooks/useCart'
import { useFilters } from '../Hooks/useFilters'
import { useState } from 'react'
export function Footer(){
    const {filters } = useFilters()
    const { cart} = useCart()
    // console.log('%c7 Footer cart >','color:#25E882;font-size:15px;',cart);
    const [footerVision, setFooterVsion] = useState(true)
    const ocultarDataJSON = ()=>{
        setFooterVsion(!footerVision)
    }
    return(


        <footer className='footer'>
            <div className={footerVision ? 'dataJSON' : 'WAA'}>
                {
                    JSON.stringify(filters, null ,2)
                }
                {
                    JSON.stringify(cart, null ,2)
                }
                
            </div>
           
            <button onClick={ocultarDataJSON}>
                Botton
            </button>
        </footer>
    )
}