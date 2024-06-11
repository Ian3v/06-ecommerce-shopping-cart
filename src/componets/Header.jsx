
import { useState, useId } from 'react'
import {Filters } from './Filters.jsx'
import { IS_DEVELOPMENT } from '../assets/config.js'

export function Header({changeFilters}) {
    const [minPrice, setMinPrice] = useState(0)
    // console.log('%c7 >','color:;font-size:15px;',changeFilters);
    

    return(
        <header>
            <h1>React Shop</h1>
            { IS_DEVELOPMENT && <Filters  onChange={changeFilters}/>}
        </header>
    )
}