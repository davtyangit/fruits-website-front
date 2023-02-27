import React from 'react'
import { useVagetable } from './useVagetable'

export const Vagetable = ({ vagetable }) => {
    const { handleAdd } = useVagetable()


    const { name, price, country, id, imageUrl } = vagetable

    return (
        <div>
            <div className="product-info" onClick={() => handleAdd(vagetable)}>
                <span>{name}</span>
                <span>{price}</span>
                <span>{country}</span>
                <img src={imageUrl} width="120px" />
            </div>
        </div>
    )
}
