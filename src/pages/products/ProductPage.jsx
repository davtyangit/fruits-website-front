import Vagetables from '../../images/backgrounds/vagetables.png'
import Fruits from '../../images/backgrounds/fruits.png'
import { useNavigate } from 'react-router-dom'
import { useProductPage } from './useProductPage'

export const ProductPage = () => {
    const { toFruits, toVagetables } = useProductPage()

    return (
        <div className="products-types">
            <div className="vagetables_block" onClick={toFruits}>
                <div className='block_header'>
                    <span className="glowing_btn">Fruits</span>
                </div>
                <img src={Fruits} width="350px" />
            </div>
            <div className="fruits_block" onClick={toVagetables}>
                <div className='block_header'>
                    <span className="glowing_btn">Vegetables</span>
                </div>
                <img src={Vagetables} width="350px" />
            </div>
        </div>
    )
}