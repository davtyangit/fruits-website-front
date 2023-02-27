import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { FetchCardContent, RemoveFromCard } from '../../redux/fruitsSlice'

export const CardItem = ({ item }) => {
    const dispatch = useDispatch()
    const { name, price, country, id, imageUrl } = item

    const handleRemove = (id, name) => {
        dispatch(RemoveFromCard(id))
        dispatch(FetchCardContent())
        toast.info(`${name} deleted from card!`)
    }

    return (
        <div>
            <div className="product-info">
                <span>{name}</span>
                <span>{price}</span>
                <span>{country}</span>
                <img src={imageUrl} width="120px" />
            </div>
            <div className='product_btnd'>
                <button className='remove' onClick={() => handleRemove(id, name)}>Remove</button>
            </div>
        </div>
    )
}
