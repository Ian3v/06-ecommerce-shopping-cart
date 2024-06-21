import { createContext, useState } from "react";

//1 . Crear el contexto
// Este es el q tenemos q consumir
export const FiltersContext = createContext()

//2. Crear el Provider, para proveer el contextto
//Este es el q nos provee de acceso al contexto
export function FiltersProvider ({ children }){ 

        const [filters, setFilters] = useState({
            category: 'all',
            // minPrice: 500
            minPrice: 0
        })

    return(
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}      
        >
            {children}
        </FiltersContext.Provider>
    )
}





