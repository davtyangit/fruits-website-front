import React from 'react'

export const Content = ({ id, name, price, country, imageUrl }) => {
    return (
        <div>
            <div className="product-info" key={id}>
                <span>{name}</span>
                <span>{price}</span>
                <span>{country}</span>
                <img src={imageUrl} width="120px" />
            </div>
        </div>
    )
}
