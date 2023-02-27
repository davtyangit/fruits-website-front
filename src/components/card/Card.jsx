import { TfiShoppingCartFull } from 'react-icons/tfi'
import { useCards } from './useCards'

export const Card = () => {
    const { card } = useCards()

    return (
        <div className='card'>
            <div className='shop_icon'>
                <TfiShoppingCartFull />
            </div>
            <span>{card.length}</span>
        </div>
    )
}
