import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FetchCardContent } from '../../redux/fruitsSlice'
import { CardItem } from './CardItem'

export const Card = () => {
    const dispatch = useDispatch()
    const card = useSelector(state => state.fruits.card)
    const sum = card && card?.map(item => item.price).reduce((prev, curr) => Number(prev) + Number(curr), 0);

    const [newPrice, setNewPrice] = useState(sum)

    useEffect(() => {
        localStorage.setItem('sum', sum)
    }, [card])

    const handleAdd = () => {

    }

    console.log(newPrice, 'newPrice')

    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        dispatch(FetchCardContent())
    }, [])

    return (
        <div className='card-container'>
            <div className='empty-card'>
                {card && card?.length ? <h1>Products in the card, amount {sum}</h1> : ''}
            </div>

            <div className='products card-content'>
                {
                    card && card?.length ? card.map((item) => {
                        return (
                            <div key={item.id} className="product_item">
                                <CardItem quantity={quantity} handleAdd={handleAdd} item={item} />
                            </div>
                        )
                    }) : <div className='empty-card'>
                        <h2>There is nothing in the cart
                        </h2>
                        <span>Back to <Link to={"/products"}>Products</Link></span>
                    </div>
                }
            </div>
        </div>
    )
}