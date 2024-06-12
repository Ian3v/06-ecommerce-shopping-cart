
// import { useState, useId } from 'react'
import { Filters } from './Filters.jsx'
// import { IS_DEVELOPMENT } from '../assets/config.js'

export function Header() {
    
    return(
        <header>
            <h1>React Shop</h1>
            {/* { IS_DEVELOPMENT && <Filters />} */}
            <Filters />
        </header>
    )
}


