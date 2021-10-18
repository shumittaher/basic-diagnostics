import React, { createContext } from 'react'
import useProducts from './../hooks/useProducts';


export const ProductContext = createContext()


const  ProductProvider = ({ children }) => {
    return (
        <ProductContext.Provider value={useProducts()}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider