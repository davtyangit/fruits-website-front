import React from 'react'
import { useProducts } from './useProducts'

export const Product = ({ fruit }) => {
    const { handleAdd } = useProducts()

    return (
        <div>
            <div className="product-info" onClick={() => handleAdd(fruit)}>
                <span>{fruit.name}</span>
                <span>{fruit.price}</span>
                <span>{fruit.country}</span>
                <img src={fruit.imageUrl} width="120px" />
            </div>
        </div>
    )
}
