import './Footer.css'

export function Footer({filters}){
    return(


        <footer className='footer'>
            {
                JSON.stringify(filters, null ,2)
            }
            {/* <h4>Prueba tecnica de Recat * -</h4>
            <span>@mdudev</span>
            <h5>Shopping Cart con useContext & useReducer</h5> */}
        </footer>
    )
}