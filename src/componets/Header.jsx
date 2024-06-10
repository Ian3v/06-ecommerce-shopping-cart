
import { useState } from 'react'
import {Filters } from './Filters.jsx'

export function Header({changeFilters}) {
    const [minPrice, setMinPrice] = useState(0)
    // console.log('%c7 >','color:;font-size:15px;',changeFilters);
    
    return(
        <header>
            <h1>React Shop</h1>
            <Filters  onChange={changeFilters}/>
        </header>
    )
}